import React, { Component } from 'react'
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

class RepeatRows extends Component {
	// Ceate one cell for every item in "items"
	renderRows(colSize,cols,items) {
		let temp_rows = []
		let temp_cols = []

		items.forEach((RepeatableComponent,index)=>{
			// Fill first row
			temp_cols.push(
				(<Col sm={ colSize } key={index+'col'}>{ RepeatableComponent }</Col>)
			);
			// Create a new row for every n cols
			if (((index+1) % cols) === 0 && (index !==0)) {
				temp_rows.push(<Row key={index+'row'} style={{marginTop:'28px'}}>{ temp_cols }</Row>)
				temp_cols=[];
			}
		})
		// If leftover cols, create final row
		if (cols.length) {
			temp_rows.push(<Row key={'last row'}>{ temp_cols }</Row>)
		}
		
		return temp_rows;
	}

	render() {
		const { colSize, cols, items } = this.props;
		
		return (
			<div>
				{this.renderRows(
					colSize, 
					cols,
					items)
				}
			</div>
		)
	}
}
export default RepeatRows