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
            <Button style={{backgroundColor:"#3ecf8e",borderColor:"#3ecf8e"}} onClick={this.addToCart}>Buy Now</Button>
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
                Product Description
              </div>
              <div className="card-body">
                  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>
                  <p>Solet vocent no pro, et nam erat eripuit, per te iusto officiis assueverit. Mei sint apeirian an, an his nonumy utamur ocurreret. Cum impedit facilis quaerendum te, oportere tractatos ius at. Adhuc malis duo at. Et adhuc vocibus pri. Iisque vidisse eu has. Utinam scaevola eos ne, meis justo eum eu.</p>
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