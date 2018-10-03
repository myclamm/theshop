import React from 'react'
import { Item, Icon} from 'semantic-ui-react';

class CartItems extends React.Component{
	// Used to display items in a cart
	
	constructor(props) {
		super(props);
		const {removeFromCart, checkout} = this.props;

		this.removeFromCart = (index) => {
			return () => removeFromCart(index);
		}
		
		// Shows "x" if user is viewing cart and "check" if viewing checkout modal
		this.renderIcon = (index) => {
			if (checkout) {
				return (
					<span style={ {float:'right', color:'#3ecf8e'} }> 
						<span><Icon name='check' /></span>
					</span>
				)
			} else {
				return (
					<span onClick={ this.removeFromCart(index) } style={ {float:'right'} }> 
						<span><Icon name='close' /></span>
					</span>
				)
			}
		}
	}

	render() {
			// Extract props from parent
		const { cart } = this.props;

		const CartItems = cart.items.map((product,index)=> {
			return (
				<Item.Group key={ index+'key' }>
					<Item>
						<Item.Image size='mini' src= { product.cardImage } />
						<Item.Content>
							<Item.Header as='a'>{ product.title }</Item.Header>
							{ this.renderIcon(index) }
							<Item.Meta>{ '$'+product.price }</Item.Meta>
							<Item.Extra>{ product.description }</Item.Extra>
						</Item.Content>
					</Item>
				</Item.Group>   
			)
		})

		return (
				<Item.Group>
						{CartItems}
				</Item.Group>  
			)
	}
  
}

export default CartItems;