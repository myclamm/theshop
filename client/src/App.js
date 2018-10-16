import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SimpleStorage from "react-simple-storage";

import Navbar from './components/navbar/Navbar';
import Products from './components/products/Products';
import Product from './components/products/Product';
import Cart from './components/cart/Cart';
import API from './services/apiService.js';
import Checkout from './components/checkout/Checkout';
import ThankYou from './components/thankYou/ThankYou';

import './App.css';
import 'semantic-ui-css/semantic.min.css'

class App extends Component {
  constructor() {
    super()

    // Global App state, separated by components
    this.state = {
      products: [],
      charges: [],

      cart: {
        total: 0,
        show: false,
        items: []
      },

      checkout: {
        show: false
      },

      thankYou: {
				total: 0,
        show: false,
        purchasedItems: []
      }
    }

  }

  // CART METHODS
  updateCartTotal = () => {
    const total = this.state.cart.items.reduce((accum,curr)=>{
      return accum + curr.price;
    },0);
    
    // Tip: Never mutate state. Instead, perform full copy and re-assign.
    const state = Object.assign({},this.state);
    state.cart.total = total;
    this.setState(state);
  }

  // Add an item to cart
  addToCart= (product) => {
    const state = Object.assign({},this.state);
    state.cart.items.push(product);
    this.setState(state)
    this.updateCartTotal();
  }

  // Remove an item from cart
  removeFromCart = (index) => {
    const state = Object.assign({},this.state);
    state.cart.items.splice(index, 1)
    this.setState(state)
    this.updateCartTotal();
  }

  // Display cart to user
  showCart = () => {
    const state = Object.assign({},this.state);
    state.cart.show = true;
    this.setState(state);
  }

  // Hide cart
  hideCart = () => {
    const state = Object.assign({},this.state);
    state.cart.show = false;
    this.setState(state);
  }

  // Empty the cart
  clearCart = () => {
    const state = Object.assign({}, this.state);
    state.cart.items = [];
		this.setState(state);
		this.updateCartTotal();
  }

  // CHECKOUT METHODS
  showCheckout = () => {
    const state = Object.assign({},this.state);
    state.checkout.show = true;
    this.setState(state);
  }

  hideCheckout = () => {
    const state = Object.assign({},this.state);
    state.checkout.show = false;
    this.setState(state)
  }

  // THANKYOU METHODS
  showThankYou = (confirmationId, purchasedItems, total) => {
    const state = Object.assign({},this.state);
    state.thankYou.show = true;
    state.thankYou.purchasedItems = purchasedItems;
		state.thankYou.confirmationId = confirmationId;
		state.thankYou.total = total;
    this.setState(state);
	}
	
  hideThankYou = () => {
    const state = Object.assign({},this.state);
    state.thankYou.show = false;
    this.setState(state)
  }

  // Create routes for each individual product page
  createProductPages = (addToCart, showCart) => {
    if(!this.state.products){
      return
    }
    return this.state.products.map((product, index) => {
      return (
      <Route key={index+"route"} exact path={"/"+product.uri} render={(props) => 
        <Product 
          product={product} 
          addToCart={addToCart} 
          showCart={showCart}/>}
      />)
    })
  }

  // Fetch list of products from server
  componentWillMount() {
    API.getProducts()
      .then(res=>{
        this.setState({products: res.data})
      })
    
    API.getCharges()
      .then(res=>{
        console.log('charges',res.data.charges.data)
        this.setState({charges: res.data.charges.data})
      })
  }

  render() {
    return (
        <Router>
          <div className="App">
						{/* Sync state with webstorage */}
						<SimpleStorage parent={this} />

            <Cart 
              cart={ this.state.cart } 
              hideCart={ this.hideCart } 
              removeFromCart={ this.removeFromCart } 
              showCheckout={ this.showCheckout } />
            <Checkout 
              cart={ this.state.cart } 
              checkout={ this.state.checkout } 
              hideCheckout={ this.hideCheckout } 
              removeFromCart={ this.removeFromCart } 
              showCart={ this.showCart } 
              clearCart={ this.clearCart } 
              showThankYou={ this.showThankYou } />
            <ThankYou 
              thankYou={ this.state.thankYou }
              hideThankYou={ this.hideThankYou } 
              charges={ this.state.charges }/>
            <Navbar 
              showCart={ this.showCart }/>
            <Route exact path="/" render={(props) => 
              <Products 
              products={ this.state.products } 
              addToCart={ this.addToCart } 
              showCart={ this.showCart }/>}
            />
            { this.createProductPages(this.addToCart, this.showCart) }
          </div>
        </Router>
    );
  }
}

export default App;
