import React, { Component } from 'react'

import DynamicGrid from '../utilities/DynamicGrid'
import ProductCard from './ProductCard';

class Products extends Component {
  
  render() {
    const {products, addToCart, showCart} = this.props;

    const ProductCards = products.map((product)=>{
      return (<ProductCard product={product} addToCart={addToCart} showCart={showCart}/>)
    })
  
    return (
      <div className="container">
          <DynamicGrid 
            colSize={4}
            cols={3}
            contents={ProductCards} 
          />
      </div>
    )
  }
}

export default Products;