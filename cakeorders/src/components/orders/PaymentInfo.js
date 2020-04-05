import React, { Component } from 'react';
import { Button, ButtonGroup, Badge } from '@material-ui/core';

class PaymentDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render(){
        const { price, capro, rest, lblRest,handleChange } = this.props;
        return(
            <div className="container white z-depth-5">
				
				
                    <div className="row ">
                    <h4 className="blue-text center ">Заплащане:</h4>
                    </div>
					<div className="row">
						<div className="input-field col s6">
							<label htmlFor="price">Цена:</label>
							<input id="price" type="number"  onChange={handleChange('price')} />
						</div>
						<div className="input-field col s6">
							<label htmlFor="capro">Капаро:</label>
							<input id="capro" type="number" onChange={handleChange('capro')} />
						</div>
						<div className="input-field col s6">
							<label htmlFor="rest"></label>
							<input id="rest" type="number" value={Number(price-capro).toFixed(2)}  onChange={handleChange('rest')} readOnly/>
						</div>
						<div className="input-field col s6">
							<h4 name="lblRest" className="blue white-text size8 center">{Number(price-capro).toFixed(2)?? 0} </h4>
						</div>
												
                        <div className="input-field col s12">
                        <Badge onClick={this.back} className="btn blue lighten-1  left-btn">Назад</Badge>
							<Badge onClick={this.continue} className="btn blue lighten-1  left-btn">Напред</Badge>
                            
						</div>
					</div>
				
			</div>
            
        );
    }
}

export default PaymentDetails;