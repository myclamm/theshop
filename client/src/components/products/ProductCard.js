import React from 'react'
import { withRouter } from 'react-router-dom'
import { Card, Image, Icon} from 'semantic-ui-react'

class ProductCard extends React.Component {
	constructor(props){
		super(props);
		const { addToCart, product, showCart } = this.props;

		this.state = {
			cartHover: false,
			cardHover: false
		}

		this.addToCart = () => {
			addToCart(product);
			showCart();
		}
		
		this.goToProductPage = () => {
			this.props.history.push('/'+product.uri)
		}

	}
    
    toggleCartHoverOn = () => {
      this.setState({cartHover: true})
    }

    toggleCartHoverOff = () => {
      this.setState({cartHover: false})
    }

    render() {
			// Extract necessary props from parent
			const { title,company,description,price,lbs,cardImage } = this.props.product;

			const cartButtonBackgroundColor = this.state.cartHover ? '#3ecf8e' : null
			const cartButtonColor = this.state.cartHover ? '#3f4247' : null
			
			return (
				<Card className="product-card" style={{height:"100%", width:"100%"}}>
					<Image onClick={ this.goToProductPage } src={ cardImage } />
					
					<Card.Content onClick={ this.goToProductPage } className="cardContent">
						<Card.Header>{title}</Card.Header>
						<Card.Meta>
							<span>{company}</span>
						</Card.Meta>
						<Card.Meta>
							<span >{lbs+' lbs'}</span>
						</Card.Meta>
						<Card.Description>{ description }</Card.Description>
					</Card.Content>

					<Card.Content extra 
						onClick={ this.addToCart }
						style={{
							backgroundColor: cartButtonBackgroundColor, 
							color: cartButtonColor}} 
						onMouseEnter={ this.toggleCartHoverOn } 
						onMouseLeave={ this.toggleCartHoverOff } 
					>

					<span>{ "Price: $"+price }</span>
					<span style={{float:'right'}}>
						<Icon name='cart' /> {' Add to Cart'}
					</span>
					</Card.Content>
				</Card>
			)
    }
}

export default withRouter(ProductCard)