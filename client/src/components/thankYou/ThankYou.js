import React, { Component } from 'react';
import { Modal, ModalBody, ModalFooter } from 'reactstrap';
import { Divider } from 'semantic-ui-react';

import CartItems from '../cart/CartItems';

class ThankYou extends Component {
	renderCharges = (charges) => {
		const chargeList = charges.map((charge)=>{
			return(<div>{ charge.id }</div>)
		})
		return chargeList;
	}
  render() {
		const { charges, thankYou, hideThankYou } = this.props;
		console.log('charges',charges)
    return (
      <Modal isOpen={thankYou.show} toggle={ hideThankYou }>
			<div className="modal-header">
				<h2>Thank You!</h2>
				<span onClick={ hideThankYou } style={{cursor:"pointer",float:"right"}}>Close</span>
			</div>

			<ModalBody>
				<CartItems items={ thankYou.purchasedItems } removable={0} />
				<Divider/>
				<div style={{textAlign:"right"}}>
				<b style={{float:"left"}}>Confirmation Number:</b> {thankYou.confirmationId}
				</div>
				<Divider/>
				<div style={{textAlign:"right"}}>
				<b style={{float:"left"}}>Order Total:</b> ${ thankYou.total }
				</div>
				<div>{this.renderCharges(charges)}</div>
				
			</ModalBody>

			<ModalFooter>
			</ModalFooter>

			</Modal>
    )
  }
}
export default ThankYou;