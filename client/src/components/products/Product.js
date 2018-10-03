import React, { Component } from 'react';
import {Button} from 'reactstrap';

class Product extends Component {
  constructor(props) {
    super(props);
    const {product, addToCart, showCart} = this.props;

    this.addToCart = () => {
      console.log(addToCart)
      this.props.addToCart(product);
      showCart();
    }
  }
  render() {
    const {product, addToCart, showCart} = this.props;
    
    return (
        <div className="container">

        <div className="row">
  
          <div className="col-lg-3">
            <h1 className="my-4">{ product.company }</h1>
            <Button onClick={this.addToCart}>Buy Now</Button>
          </div>
          
  
          <div className="col-lg-9">
  
            <div className="card mt-4">
              <img className="card-img-top img-fluid" src={product.heroImage} alt=""/>
              <div className="card-body">
                <h3 className="card-title">{ product.title }</h3>
                <h4>${product.price}</h4>
                <p className="card-text">{product.description}</p>
                <span className="text-warning">&#9733; &#9733; &#9733; &#9733; &#9734;</span>
                4.0 stars
              </div>
            </div>
            
            <div className="card card-outline-secondary my-4">
              <div className="card-header">
                Product Reviews
              </div>
              <div className="card-body">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis et enim aperiam inventore, similique necessitatibus neque non! Doloribus, modi sapiente laboriosam aperiam fugiat laborum. Sequi mollitia, necessitatibus quae sint natus.</p>
                <small className="text-muted">Posted by Anonymous on 3/1/17</small>
                <hr/>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis et enim aperiam inventore, similique necessitatibus neque non! Doloribus, modi sapiente laboriosam aperiam fugiat laborum. Sequi mollitia, necessitatibus quae sint natus.</p>
                <small className="text-muted">Posted by Anonymous on 3/1/17</small>
                <hr/>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis et enim aperiam inventore, similique necessitatibus neque non! Doloribus, modi sapiente laboriosam aperiam fugiat laborum. Sequi mollitia, necessitatibus quae sint natus.</p>
                <small className="text-muted">Posted by Anonymous on 3/1/17</small>
                <hr/>
              </div>
            </div>
            {/* Card  */}
  
          </div>
          
  
        </div>
  
      </div>
    )
  }
}
export default Product