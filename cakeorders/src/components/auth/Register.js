import React, { Component } from 'react';
import { Button, ButtonGroup } from '@material-ui/core';

class Register extends Component {
	state = {
		username: '',
		password: '',
		confirmPassword: '',
		firstName: '',
		middleName: '',
		lastName: '',
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
			<div className="row ">
				
				<form className="white z-depth-5 col s8  offset-s2" onSubmit={this.handleSubmit}>
                    <div className="row ">
                    <h4 className="blue-text center ">Регистрация</h4>
                    </div>
					<div className="row">
						<div className="input-field col s12">
							<label htmlFor="username">Потребителско име:</label>
							<input id="username" type="text" onChange={this.handleChange} />
						</div>
						<div className="input-field col s4">
							<label htmlFor="firstName">Име:</label>
							<input id="firstName" type="text" onChange={this.handleChange} />
						</div>
						<div className="input-field col s4">
							<label htmlFor="middleName">Бащино име:</label>
							<input id="middleName" type="text" onChange={this.handleChange} />
						</div>
						<div className="input-field col s4">
							<label htmlFor="lastName">Фамилно име:</label>
							<input id="lastName" type="text" onChange={this.handleChange} />
						</div>
						<div className="input-field col s6">
							<label htmlFor="password">Парола:</label>
							<input type="password" id="password" onChange={this.handleChange} />
						</div>
						<div className="input-field col s6">
							<label htmlFor="confirmPassword">Повтори парола:</label>
							<input type="password" id="confirmPassword" onChange={this.handleChange} />
						</div>
						<div className="input-field col s12">
							<label htmlFor="personalNumber">Номер на договор:</label>
							<input type="text" id="personalNumber" onChange={this.handleChange} />
						</div>
						<div className="input-field col s12">
							<Button className="btn blue lighten-1 z-depth-0 left-btn">Регистрация</Button>

							<Button type="reset" className="btn green lighten-1 z-depth-0 ">
								Изчисти
							</Button>
						</div>
					</div>
				</form>
			</div>
		);
	}
}

export default Register;
