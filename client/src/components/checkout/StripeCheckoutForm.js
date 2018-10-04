import React, { Component } from 'react'
import {Elements, StripeProvider} from 'react-stripe-elements';

import API from '../../services/apiService';
import { Button } from 'reactstrap';

import {
  CardNumberElement,
  CardExpiryElement,
  CardCVCElement,
  PostalCodeElement,
  injectStripe} from 'react-stripe-elements';

class StripeCheckoutForm extends Component {
  constructor(props) {
    super(props);

    this.checkoutHandler = (stripe, cart)=> {
      // User clicked submit
      return () => {
        this.stripeCheckout(stripe,cart)
      }
      
    }
  }

  stripeCheckout(stripe, cart) {
    API.checkout(stripe,cart)
      .then(res=>{
        console.log('success', res)
      })
  }

  render() {
    const { cart } = this.props;

    const StripeElements = injectStripe(
      <Elements>
        <div className="checkout">
          <h2>Checkout</h2>
          <p>Fill out the form below to complete your purchase.</p>
          
          <small>Credit Card Number</small>
          <div className="checkout-form"><CardNumberElement/></div>
          
          <small>Expiration Date</small>
          <div className="checkout-form"><CardExpiryElement/></div>
          
          <small>CVC</small>
          <div className="checkout-form"><CardCVCElement/></div>
          
          <small>Postal Code</small>
          <div className="checkout-form"><PostalCodeElement/></div>
          <br></br>
          <Button onClick={ this.checkoutHandler(this.props.stripe, cart) } style={{backgroundColor:"#3ecf8e",borderColor:"#3ecf8e"}} variant="primary">
              Submit
          </Button>
        </div>
      </Elements>
    )

    return (
      <StripeProvider 
					style={{marginRight:"20%"}}
					apiKey="pk_test_URHVeGrMAhyRcedLv3pL1gTE">
					<div className="example">
            <StripeElements/>
					</div>
			</StripeProvider>
    )
  }
}
export default StripeCheckoutForm;