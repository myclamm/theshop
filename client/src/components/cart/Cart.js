import React, { Component } from 'react';
import {Button, Modal, ModalHeader,  ModalBody, ModalFooter } from 'reactstrap';

import CartItems from './CartItems';

class Cart extends React.Component {
  constructor(props) {
    super(props);
    // Extract props from Parent
    const { hideCart, showCheckout} = this.props;
    
    this.hideCart = hideCart;

    this.checkout = () => {
      hideCart();
      showCheckout();
    }
  }

  render() {
    // Extract props from parent
    const { cart, cartTotal, removeFromCart } = this.props;
    
    return (
        <Modal isOpen={cart.show}>
          <div className="modal-header">
          <h2>My Cart</h2>
          <span onClick={this.hideCart} style={{cursor:"pointer",float:"right"}}>Close</span>
          </div>
          <ModalBody>
              {cart.items.length === 0 ? "Your cart is empty" :null  }
              <CartItems cart={ cart } removeFromCart={ removeFromCart }/>
          </ModalBody>

          <ModalFooter>
            <div>Total: ${ cart.total }</div>
          </ModalFooter>

          <ModalFooter>
            <Button variant="secondary" onClick={this.hideCart}>
              Close
            </Button>
            <Button style={{backgroundColor:"#3ecf8e",borderColor:"#3ecf8e"}} variant="primary" onClick={this.checkout}>
              Checkout
            </Button>
          </ModalFooter>
        </Modal>
    );
  }
}

export default Cart;