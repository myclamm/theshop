import React, { Component } from 'react'
import {Modal,  ModalBody, ModalFooter } from 'reactstrap';
import {Divider} from 'semantic-ui-react'

import StripeCheckoutForm from '../Stripe/StripeCheckoutForm';
import CartItems from '../cart/CartItems';

class Checkout extends Component {
	constructor(props) {
		super(props);
		const {showCart, hideCheckout} = this.props;

		this.backToCart = () => {
			hideCheckout();
			showCart();
		}
	}
                     
	render() {
		const {cart, hideCheckout, checkout} = this.props

		return (
			<Modal isOpen={checkout.show} toggle={hideCheckout}>
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
				<StripeCheckoutForm cart={ cart } />
			</ModalBody>

			<ModalFooter>
			</ModalFooter>

			</Modal>
		)
	}
}
export default Checkout;