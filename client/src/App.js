import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from './components/navbar/Navbar';
import Products from './components/products/Products';
import Product from './components/products/Product';
import Cart from './components/cart/Cart';
import API from './services/apiService.js';
import Checkout from './components/checkout/Checkout';

import './App.css';
import 'semantic-ui-css/semantic.min.css'

class App extends Component {
  constructor() {
    super()

    // Global App state
    this.state = {
      currentProduct: null,
      products: [],
      cart: {
        total: 0,
        show: false,
        items: []
      },
      checkout: {
        show: false
      }
    }

  }

  // CART METHODS
  updateCartTotal = () => {
    const total = this.state.cart.items.reduce((accum,curr,index,arr)=>{
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
    this.setState(state)
  }

  hideCart = () => {
    const state = Object.assign({},this.state);
    state.cart.show = false;
    this.setState(state)
  }

  // CHECKOUT METHODS
  showCheckout = () => {
    const state = Object.assign({},this.state);
    state.checkout.show = true;
    this.setState(state)
  }

  hideCheckout = () => {
    const state = Object.assign({},this.state);
    state.checkout.show = false;
    this.setState(state)
  }

  // Create routes for each individual product page
  // Invoked when App loads.
  createProductPages = (addToCart, showCart) => {
    if(!this.state.products){
      return
    }
    return this.state.products.map(function(product, index){
      console.log('addToCart', addToCart)
      return (<Route key={index+"route"} exact path={"/"+product.uri} render={
        (props) => <Product product={product} addToCart={addToCart} showCart={showCart}/>
        }
      />)
    })
  }

  // Fetch list of products from server
  componentWillMount() {
    API.getProducts()
      .then(res=>{
        this.setState({products: res.data})
        console.log('received products',this.state.products)
      })
  }

  render() {
    return (
        <Router>
          <div className="App">
            <Cart cart={this.state.cart} hideCart={this.hideCart} removeFromCart={this.removeFromCart} showCheckout={ this.showCheckout } />
            <Checkout cart={ this.state.cart } checkout={this.state.checkout} hideCheckout={this.hideCheckout} removeFromCart={this.removeFromCart} showCart={this.showCart}/>
            <Navbar showCart={this.showCart}/>
            <Route exact path="/" render={
              (props) => <Products products={this.state.products} addToCart={this.addToCart} showCart={this.showCart}/>
              }
            />
            {this.createProductPages(this.addToCart, this.showCart)}
          </div>
        </Router>
    );
  }
}

export default App;
