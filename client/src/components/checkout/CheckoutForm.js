import React, {Component} from 'react';
import { Button } from 'reactstrap';
import API from '../../services/apiService';

import {
  CardElement, 
  CardNumberElement,
  CardExpiryElement,
  CardCVCElement,
  PostalCodeElement,
  injectStripe} from 'react-stripe-elements';

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    const { cart } = this.props

    this.submit = ()=> {
      this.checkout(this.props.stripe, cart);
    }
  }

  checkout(stripe, cart) {
    // User clicked submit
    API.checkout(stripe,cart)
      .then(res=>{
        console.log('success', res)
      })
  }

  render() {
    return (
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
        <Button variant="primary" onClick={this.submit}>
            Submit
        </Button>
      </div>
    );
  }
}

export default injectStripe(CheckoutForm);