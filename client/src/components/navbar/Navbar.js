import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';

class Navbar extends Component {
  render() {
    const { showCart } = this.props
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
              <li className="nav-item">
                <span style={{color:'#fff', marginRight:"10px"}}>View Cart</span> 
                <Icon onClick={ showCart } style={{cursor:'pointer',color:'#3ecf8e'}} name='shopping cart' size="big"/>
              </li>
            </ul>
          </div>

        </div>
      </nav>
    )
  }
}

export default Navbar;