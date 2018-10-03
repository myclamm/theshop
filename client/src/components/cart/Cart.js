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
      <div>
        <Modal isOpen={cart.show}>
          <ModalHeader size="lg">
           My Cart
          </ModalHeader>

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
            <Button variant="primary" onClick={this.checkout}>
              Checkout
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default Cart;