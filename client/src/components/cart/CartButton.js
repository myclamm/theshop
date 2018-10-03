import React, { Component } from 'react'

class CartButton extends Component {
  constructor (props) {
    super(props);
  }

  clickHandler = () => {
    this.props.addToCart()
    this.props.handleShow()
  }

  render() {
    return (
        <div onClick={this.clickHandler} style={{cursor:'pointer'}}>
          <i className="fas fa-shopping-cart fa-2x" style={{color:'#F6F8FA'}}></i>
        </div>
    )
  }
}

export default CartButton