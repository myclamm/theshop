import React, { Component } from 'react'
import {Button, Modal, ModalHeader,  ModalBody, ModalFooter } from 'reactstrap';
import {Divider} from 'semantic-ui-react'
import {Elements, StripeProvider} from 'react-stripe-elements';

import CheckoutForm from './CheckoutForm';
import CartItems from '../cart/CartItems';
import API from '../../services/apiService';

class Checkout extends Component {
    constructor(props) {
        super(props);
        
        this.checkout = (ev) => {
            // User clicked submit
            API.checkout(this.props.stripe)
                .then(res=>{
                console.log('success', res)
                })
        } 
    }
    
                                     
    render() {
        const {cart, removeFromCart, checkout, hideCheckout} = this.props

        return (
            <div className="static-modal">
            <Modal isOpen={checkout.show}>
                <ModalHeader>
                    Order Summary
                </ModalHeader>

                <ModalBody>
                    {cart.items.length === 0 ? "Your cart is empty" :null  }
                    <CartItems cart={ cart } checkout="true"/>
                    <Divider/>
                    <StripeProvider apiKey="pk_test_TYooMQauvdEDq54NiTphI7jx">
                        <div className="example">
                        <Elements>
                            <CheckoutForm cart={ cart }/>
                        </Elements>
                        </div>
                    </StripeProvider>
                </ModalBody>

                <ModalFooter>
                    <div>Total: ${ cart.total }</div>
                </ModalFooter>

                <ModalFooter>
                <Button  onClick={hideCheckout}>
                    Cancel
                </Button>

                </ModalFooter>
            </Modal>
            </div>
        )
    }
}
export default Checkout;