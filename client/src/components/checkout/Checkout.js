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
        const {showCart, hideCheckout} = this.props;

        this.checkout = (ev) => {
            // User clicked submit
            API.checkout(this.props.stripe)
                .then(res=>{
                console.log('success', res)
                })
        }

        this.backToCart = () => {
            hideCheckout();
            showCart();
        }
    }
    
                                     
    render() {
        const {cart, checkout} = this.props

        return (
            <div className="static-modal">
            <Modal isOpen={checkout.show}>
                <div className="modal-header">
                    <h2>Order Summary</h2>
                    <span onClick={this.backToCart} style={{cursor:"pointer",float:"right"}}>Back to Cart</span>
                </div>
                
                <ModalBody>
                    {cart.items.length === 0 ? "Your cart is empty" :null  }
                    <CartItems cart={ cart } checkout="true"/>
                    <Divider/>
                    <div style={{textAlign:"right"}}>Total: ${ cart.total }</div>
                    <Divider/>
                    <StripeProvider style={{marginRight:"20%"}}apiKey="pk_test_TYooMQauvdEDq54NiTphI7jx">
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

            </Modal>
            </div>
        )
    }
}
export default Checkout;