import React, { Component } from 'react'

import DynamicGrid from '../utilities/DynamicGrid'
import ProductCard from './ProductCard';

class Products extends Component {
  render() {
    const { products, addToCart, showCart } = this.props;
		
		// Create a "Product Card" for every product
    const ProductCards = products.map((product)=>{
			return (
			<ProductCard 
				product={ product } 
				addToCart={ addToCart } 
				showCart={ showCart }
			/>)
    })
  
    return (
      <div className="container" style={{marginBottom:"30px"}}>
			{/* Display products in a grid */}
				<DynamicGrid 
					colSize={4}
					cols={3}
					items={ ProductCards } 
				/>
      </div>
    )
  }
}

export default Products;