import React, { Component } from 'react'
import {Elements, StripeProvider} from 'react-stripe-elements';
import {Segment, Dimmer, Loader, Image} from 'semantic-ui-react'

import StripeFormElements from './FormElements';
import API from '../../services/apiService';

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

  stripeCheckout(stripe, cart, callback) {
    // If currently processing, do nothing
    if (this.state.processing) {
      return
    }

    this.setState({processing:true});
    API.checkout(stripe,cart)
      .then(res => {
        this.setState({processing:false})

        if (res.status !== 200) {
          callback(res.message);
        } else {
          const confirmationId = res.data.charge.id
          const total = res.data.charge.amount / 100
          callback(null, confirmationId, cart, total);
        }
      })
  }

  render() {
    const { cart } = this.props;
    let displayProcessing = this.state.processing ? "block" : "none"

    return (
      <StripeProvider 
        style={{marginRight:"20%"}}
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