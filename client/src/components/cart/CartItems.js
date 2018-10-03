import React from 'react'
import { Item, Icon} from 'semantic-ui-react';

class CartItems extends React.Component{
    constructor(props) {
        super(props);
        const {removeFromCart, checkout} = this.props;

        this.removeFromCart = (index) => {
            return () => removeFromCart(index);
          }
        
        this.renderIcon = (index) => {
            if (checkout) {
                return (
                    <span style={ {float:'right', color:'#3ecf8e'} }> 
                        <span><Icon name='check' /></span>
                    </span>
                )
            } else {
                return (
                    <span style={ {float:'right'} }onClick={this.removeFromCart(index)}> 
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
                <Item.Group key={index+'key'}>
                    <Item>
                        <Item.Image size='mini' src= {product.cardImage} />
                        <Item.Content>
                            <Item.Header as='a'>{ product.title }</Item.Header>
                                { this.renderIcon(index) }
                            <Item.Meta>{ '$'+product.price }</Item.Meta>
                            <Item.Extra>
                            { product.description }
                            </Item.Extra>
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