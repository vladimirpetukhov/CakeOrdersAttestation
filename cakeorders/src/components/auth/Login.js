import React, { Component } from 'react';
import { Button, ButtonGroup } from '@material-ui/core';
import '../../../node_modules/materialize-css/dist/css/materialize.css';

class Login extends Component {
	state = {
		username: '',
		password: '',
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
				<form className="white z-depth-5 col s6 offset-s3" onSubmit={this.handleSubmit}>
                <div className="row ">
                <h4 className="blue-text center ">Вход</h4>
                </div>
					<div className="input-field">
						<label htmlFor="username">Потребителско име:</label>
						<input id="username" type="text" onChange={this.handleChange} />
					</div>
					<div className="input-field">
						<label htmlFor="password">Парола:</label>
						<input type="password" id="password" type="text" onChange={this.handleChange} />
                    </div>
                    <br/>
					<div className="input-field ">
						<Button className="btn blue lighten-1 z-depth-0 left-btn white-text">Вход</Button>

						<Button type="reset" className="btn green lighten-1 z-depth-0 ">
							Изчисти
						</Button>
					</div>
				</form>
			</div>
		);
	}
}

export default Login;
