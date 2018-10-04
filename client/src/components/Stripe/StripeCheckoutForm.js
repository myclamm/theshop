import React, { Component } from 'react'
import {Elements, StripeProvider} from 'react-stripe-elements';

import StripeFormElements from './FormElements';
import API from '../../services/apiService';

class StripeCheckoutForm extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = (stripe, cart)=> {
      // User clicked submit order
      return () => {
        this.stripeCheckout(stripe, cart)
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

    return (
      <StripeProvider 
        style={{marginRight:"20%"}}
        apiKey="pk_test_URHVeGrMAhyRcedLv3pL1gTE">
        <div className="example">
        <Elements>
            <StripeFormElements cart={ cart } onSubmit={ this.onSubmit }/>
        </Elements>
        </div>
      </StripeProvider>
    )
  }
}
export default StripeCheckoutForm;