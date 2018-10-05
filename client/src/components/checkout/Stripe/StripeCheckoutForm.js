import React, { Component } from 'react'
import {Elements, StripeProvider} from 'react-stripe-elements';
import {Segment, Dimmer, Loader, Image} from 'semantic-ui-react'

import StripeFormElements from './StripeFormElements';
import API from '../../../services/apiService';

class StripeCheckoutForm extends Component {
  constructor(props) {
    super(props);
    const { checkoutHandler } = this.props;

    this.state = {
      processing: false
    };

    this.onSubmit = (stripe, cart)=> {
      if(!cart.items.length) {
        return
      }
      // User clicked submit order
      return () => {
        this.stripeCheckout(stripe, cart, checkoutHandler)
      }
    };
  }

  stripeCheckout(stripe, cart, checkoutHandler) {
    // Prevent click spam
    if (this.state.processing) {
      return
    }
    // Start spinner
    this.setState({processing:true});

    // Generate stripe charge on server
    API.checkout(stripe,cart)
      .then(res => {
        // Stop spinner
        this.setState({processing:false})
        
        // If tokenization failed return early
        if (!res) return

        // 
        if (res.status !== 200) {
          checkoutHandler(res.message);
        } else {
          const confirmationId = res.data.charge.id
          const total = res.data.charge.amount / 100
          checkoutHandler(null, confirmationId, cart, total);
        }
      })
  }

  render() {
    const { cart } = this.props;
    let displayProcessing = this.state.processing ? "block" : "none"

    return (
      <StripeProvider 
        apiKey="pk_test_URHVeGrMAhyRcedLv3pL1gTE">
        <div className="example">
        
        <Elements>
            <StripeFormElements cart={ cart } onSubmit={ this.onSubmit }/>
        </Elements>

        <Segment style={{display: displayProcessing}}>
          <Dimmer active inverted>
            <Loader size='small'>Processing</Loader>
          </Dimmer>
          <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
        </Segment>

        </div>
        
      </StripeProvider>
    )
  }
}
export default StripeCheckoutForm;