import React, { Component } from 'react';
import { Button, ButtonGroup, Badge, TextField } from '@material-ui/core';
import Select from 'react-select';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

class OrderDetails extends Component {
	continue = e => {
		e.preventDefault();
		this.props.nextStep();
	};

	back = e => {
		e.preventDefault();
		this.props.prevStep();
	};

	render() {
		// const { jobTitle, jobCompany, jobLocation, handleChange } = this.props;
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
							data="<p>Описание на продукта</p>"
							onInit={editor => {
								console.log('Editor is ready to use!', editor);
							}}
							onChange={(event, editor) => {
								const data = editor.getData();
								console.log({ event, editor, data });
							}}
							onBlur={(event, editor) => {
								console.log('Blur.', editor);
							}}
							onFocus={(event, editor) => {
								console.log('Focus.', editor);
							}}
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
