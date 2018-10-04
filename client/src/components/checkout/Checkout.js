import React, { Component } from 'react'
import {Modal,  ModalBody, ModalFooter } from 'reactstrap';
import {Divider} from 'semantic-ui-react'

import StripeCheckoutForm from '../stripe/StripeCheckoutForm';
import CartItems from '../cart/CartItems';

class Checkout extends Component {
	constructor(props) {
		super(props);
		const { cart, showCart, hideCheckout, showThankYou, clearCart } = this.props;

		this.backToCart = () => {
			// User clicks "back to cart" button
			hideCheckout();
			showCart();
		}

		this.checkoutHandler = (err, confirmationId, cart, total) => {
			// Stripe checkout completed
			if (err) return alert(err);
			console.log('cart',cart)
			const purchasedItems = cart.items.slice();
			console.log('purchasedItems',purchasedItems)
			// Empty the cart, close the checkout page, show thank you page
			clearCart();
			hideCheckout();
			showThankYou(confirmationId, purchasedItems, total);
			
		}

	}
                     
	render() {
		const { cart, hideCheckout, checkout, removeFromCart } = this.props

		return (
			<Modal isOpen={checkout.show} toggle={hideCheckout}>
			<div className="modal-header">
				<h2>Order Summary</h2>
				<span onClick={this.backToCart} style={{cursor:"pointer",float:"right"}}>Back to Cart</span>
			</div>

			<ModalBody>
				{cart.items.length === 0 ? "Your cart is empty" :null  }
				<CartItems items={ cart.items } removeFromCart={ removeFromCart } removable="true"/>
				<Divider/>
				<div style={{textAlign:"right"}}>Total: ${ cart.total }</div>
				<Divider/>
				<StripeCheckoutForm cart={ cart } hideCheckout={ hideCheckout } checkoutHandler={ this.checkoutHandler } />
			</ModalBody>

			<ModalFooter>
			</ModalFooter>

			</Modal>
		)
	}
}
export default Checkout;