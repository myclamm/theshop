import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';

class Navbar extends Component {
  render() {
    const { cart, showCart, hideCart} = this.props
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Scooter Town
            </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="mobile-nav">

            <ul className="navbar-nav ml-auto">
              
              <li className="nav-item" style={{cursor:'pointer',color:'#3ecf8e'}} onClick={showCart}>
                <span>View Cart</span> <Icon name='shopping cart' size="big"/>
              </li>
              

              <li className="nav-item">
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar;