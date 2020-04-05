import React, { Component } from 'react';
import { Button, ButtonGroup } from '@material-ui/core';

class AllInfo extends Component {
	back = e => {
		e.preventDefault();
		this.props.prevStep();
    };
    
	handleSubmit = e => {
		e.preventDefault();
		console.log(this.state);
	};

	render() {
		const { firstName, lastName, jobTitle, jobCompany, jobLocation } = this.props;
		return (
			// <>
			//     <h2>Here is the information you entered:</h2>
			//     First Name: <b>{firstName}</b><br />
			//     Last Name: <b>{lastName}</b><br />
			//     Job: <b>{jobTitle}</b><br />
			//     Company: <b>{jobCompany}</b><br />
			//     Location: <b>{jobLocation}</b><br />
			//     <button className="Back" onClick={this.back}>
			//         « Back
			//     </button>
			// </>
			<div className="row ">
				<form className="white z-depth-5 col s8  offset-s2" onSubmit={this.handleSubmit}>
					<div className="row ">
						<h4 className="blue-text center ">Преглед</h4>
					</div>
					<div className="row">
						<div className="input-field col s12">
							<label htmlFor="firstName">Потребителско име:</label>
							<input id="username" type="text" value={firstName}/>
						</div>
						<div className="input-field col s4">
							<label htmlFor="firstName">Име:</label>
							<input id="firstName" type="text" value={'ГГГГ'}/>
						</div>
						<div className="input-field col s4">
							<label htmlFor="middleName">Бащино име:</label>
							<input id="middleName" type="text" value={'ГГГГ'}/>
						</div>
						<div className="input-field col s4">
							<label htmlFor="lastName">Фамилно име:</label>
							<input id="lastName" type="text" value={'ГГГГ'}/>
						</div>
						<div className="input-field col s6">
							<label htmlFor="password">Парола:</label>
							<input type="password" id="password" value={'ГГГГ'}/>
						</div>
						<div className="input-field col s6">
							<label htmlFor="confirmPassword">Повтори парола:</label>
							<input type="password" id="confirmPassword" value={'ГГГГ'}/>
						</div>
						<div className="input-field col s12">
							<label htmlFor="personalNumber">Номер на договор:</label>
							<input type="text" id="personalNumber" value={'ГГГГ'}/>
						</div>
						<div className="input-field col s12">
							<Button onClick={this.back} className="btn blue lighten-1 z-depth-0 left-btn">Назад</Button>

							<Button type="reset" className="btn green lighten-1 z-depth-0 ">
								Изпрати
							</Button>
						</div>
					</div>
				</form>
			</div>
		);
	}
}

export default AllInfo;
