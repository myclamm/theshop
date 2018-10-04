import React from 'react';
import {Button, Modal,  ModalBody, ModalFooter } from 'reactstrap';

import CartItems from './CartItems';

class Cart extends React.Component {
  constructor(props) {
    super(props);
    // Extract props from Parent
    const { hideCart, showCheckout } = this.props;
    this.hideCart = hideCart;
    this.checkout = () => {
      hideCart();
      showCheckout();
		}
	}

  render() {
    // Extract props from parent
    const { cart, removeFromCart } = this.props;
    
    return (
			<Modal isOpen={ cart.show } toggle={ this.hideCart }>
				<div className="modal-header">
					<h2>My Cart</h2>
					<span onClick={ this.hideCart } style={{cursor:"pointer",float:"right"}}>Close</span>
				</div>
				<ModalBody>
					{cart.items.length === 0 ? "Your cart is empty" :null  }
					<CartItems items={ cart.items } removeFromCart={ removeFromCart } removable="true"/>
				</ModalBody>

				<ModalFooter>
					<div>Total: ${ cart.total }</div>
				</ModalFooter>

				<ModalFooter>
					<Button onClick={ this.hideCart } variant="secondary">
						Close
					</Button>
					<Button onClick={ this.checkout } style={{backgroundColor:"#3ecf8e",borderColor:"#3ecf8e"}} variant="primary">
						Checkout
					</Button>
				</ModalFooter>
			</Modal>
    );
  }
}

export default Cart;