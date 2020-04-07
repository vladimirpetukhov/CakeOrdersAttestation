import React, { Component } from 'react';
import { Button, ButtonGroup, Badge, TextField } from '@material-ui/core';
import Select from 'react-select';


class OrderDetails extends Component {
	continue = e => {
		e.preventDefault();
		this.props.nextStep();
	};

	back = e => {
		e.preventDefault();
		this.props.prevStep();
    };
    
    handleEditorChange=(e, editor)=>{

    }

	render() {
        const { jobTitle, jobCompany, jobLocation, handleChange,data,handleEditorChange} = this.props;
        
		const options = [
			{ value: 'chocolate', label: 'Chocolate' },
			{ value: 'strawberry', label: 'Strawberry' },
			{ value: 'vanilla', label: 'Vanilla' },
		];

		return (
			<div className="container white z-depth-5">
				<div className="row ">
					<h4 className="blue-text center ">Продукт детайли:</h4>
				</div>
				<div className="row">
					<div className="col s12">
						<CKEditor
							editor={ClassicEditor}
                            handleEditorChange={handleEditorChange}
                            name="data"
                            value={data}
							
						/>
					</div>

					<div className="input-field col s6">
						<label htmlFor="firstName">Надпис:</label>
						<input id="firstName" type="text" />
					</div>

					<div className="input-field col s6">
						<Select
							onChange={this.handleChange}
							options={options}
							name="product"
							placeholder="Изберете вкус"
						/>
					</div>
					<div className="input-field col s6">
						<Select
							onChange={this.handleChange}
							options={options}
							name="product"
							placeholder="Количество"
						/>
					</div>
					<div className="input-field col s6">
						<Select
							onChange={this.handleChange}
							options={options}
							name="product"
							placeholder="Придружаващ документ"
						/>
					</div>

					<div className="input-field col s12">
						<Badge onClick={this.back} className="btn blue lighten-1  left-btn">
							Назад
						</Badge>
						<Badge onClick={this.continue} className="btn blue lighten-1  left-btn">
							Напред
						</Badge>
					</div>
				</div>
			</div>
		);
	}
}

export default OrderDetails;
