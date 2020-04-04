import React, { Component } from 'react';
import COrder from '../features/Checkout';



class CreateOrder extends Component {
	state = {
		type: 'Тип',
		content: '',
		acceptDate: Date.now(),
		deliveryDate: '',
		shopName: '',
		employerName: '',
		price: '',
		capro: '',
		remains: '',
		delivery: '',
		certificate: '',
		address: '',
	};
	handleChange = e => {
		this.setState({
			[e.target.id]: e.target.value,
		});
	};
	handleSubmit = e => {
		e.preventDefault();
		console.log(this.state);
	};
	render() {
		return (
			<div className="container">
				<form  onSubmit={this.handleSubmit}>
					<h5 className="grey-text text-darken-3">Create a New Project</h5>
					<div className="row">
						<COrder />						
					</div>
					<div className="input-field">
						<button className="btn pink lighten-1">Create</button>
					</div>
				</form>
			</div>
		);
	}
}

export default CreateOrder;
