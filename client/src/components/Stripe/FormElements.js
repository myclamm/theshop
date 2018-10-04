import React, {Component} from 'react';
import { Button } from 'reactstrap';

import {
  CardNumberElement,
  CardExpiryElement,
  CardCVCElement,
  PostalCodeElement,
  injectStripe} from 'react-stripe-elements';

class FormElements extends Component {

  render() {
    const { onSubmit, cart } = this.props;
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
        <Button onClick={ onSubmit(this.props.stripe, cart) } style={{backgroundColor:"#3ecf8e",borderColor:"#3ecf8e"}} variant="primary">
            Submit
        </Button>
      </div>
    );
  }
}

// injectStripe injects "Stripe Object" into this.props
export default injectStripe(FormElements);