import React, { Component } from 'react'
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

class RepeatRows extends Component {

    repeatRows(colSize,cols,contents) {
        let temp_rows = []
        let temp_cols = []
        contents.forEach((RepeatableComponent,index)=>{

        // Fill first row
          temp_cols.push(
            (<Col sm={colSize} key={index+'col'}>{RepeatableComponent}</Col>)
          );
          
          // Create a new row for every n cols
          if (((index+1) % cols) === 0 && (index !==0)) {
            temp_rows.push(<Row key={index+'row'} style={{marginTop:'28px'}}>{temp_cols}</Row>)
            temp_cols=[];
          }
        })
        // If leftover cols, create final row
        cols.length ? temp_rows.push((<Row key={'last row'}>{temp_cols}</Row>)) : null
        
        return temp_rows;
    }

    render() {
        return (
        <div>
            {this.repeatRows(
                this.props.colSize, 
                this.props.cols,
                this.props.contents)
            }
        </div>
        )
    }
}
export default RepeatRows