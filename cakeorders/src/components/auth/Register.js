import React, { Component } from 'react';
import{Button, ButtonGroup} from '@material-ui/core';
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
			<div className="container">
				<form className="white" onSubmit={this.handleSubmit}>
					<h5 className="grey-text text-darken-3">Регистрация</h5>
					<div className="input-field">
						<label htmlFor="username">Потребителско име:</label>
						<input id="username" onChange={this.handleChange} />
					</div>
					<div className="input-field">
						<label htmlFor="firstName">Име:</label>
						<input id="firstName" onChange={this.handleChange} />
					</div>
					<div className="input-field">
						<label htmlFor="middleName">Бащино име:</label>
						<input id="middleName" onChange={this.handleChange} />
					</div>
					<div className="input-field">
						<label htmlFor="lastName">Фамилно име:</label>
						<input id="lastName"  onChange={this.handleChange} />
					</div>
					<div className="input-field">
						<label htmlFor="password">Парола:</label>
						<input type="password" id="password" onChange={this.handleChange} />
					</div>
					<div className="input-field">
						<label htmlFor="confirmPassword">Повтори парола:</label>
						<input type="password" id="confirmPassword" onChange={this.handleChange} />
					</div>
					<div className="input-field">
						<label htmlFor="personalNumber">Номер на договор:</label>
						<input
							type="text"
							id="personalNumber"
							onChange={this.handleChange}
						/>
					</div>
					<div className="input-field ">
                        
                        <Button id="register-submit" className="btn red lighten-1 z-depth-0 " >Регистрация</Button>
                        
                        <Button type="reset"  className="btn green lighten-1 z-depth-0 ">Изчисти</Button>

                       
                        
                    </div>
                    
				</form>
			</div>
		);
	}
}

export default Register;
