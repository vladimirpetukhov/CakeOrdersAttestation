import React, { Component } from 'react';
import { Button, ButtonGroup, Badge, TextField } from '@material-ui/core';

class PersonalInfo extends Component{
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    render(){
        const { firstName, lastName,address1,address2, handleChange } = this.props;
        return(
            // <>
            //     <h2>Данни за клиента:</h2>
            //     <label>
            //         <input 
            //             type="text"
            //             name="firstName"
            //             value={firstName}
            //             placeholder="First Name"
            //             onChange={handleChange('firstName')}
            //         />
            //     </label>
            //     <label>
            //         <input 
            //             type="text"
            //             name="lastName"
            //             value={lastName}
            //             placeholder="Last Name"
            //             onChange={handleChange('lastName')}
            //         />
            //     </label>
            //     <button className="Next" onClick={this.continue}>
            //         Next »
            //     </button>
            // </>

            <div className="container white z-depth-5">
				
				
                    <div className="row ">
                    <h4 className="blue-text center ">Данни за клиента:</h4>
                    </div>
					<div className="row">
						<div className="input-field col s6">
							<label htmlFor="firstName">Име:</label>
							<input id="firstName" type="text" onChange={handleChange('firstName')} />
						</div>
						<div className="input-field col s6">
							<label htmlFor="lastName">Фамилия:</label>
							<input id="lastName" type="text" onChange={handleChange('lastName')} />
						</div>
						<div className="input-field col s6">
							<label htmlFor="address">Адрес за доставка:</label>
							<input id="address" type="text" onChange={handleChange('address')} />
						</div>
						<div className="input-field col s6">
							<label htmlFor="phone">Телефон:</label>
							<input id="phone" type="text" onChange={handleChange('phone')} />
						</div>
						<div className="input-field col s6">
							<label htmlFor="city">Град:</label>
							<input type="text" id="city" onChange={handleChange('city')} />
						</div>
						
						<div className="input-field col s12">
							<Badge onClick={this.continue} className="btn blue lighten-1  left-btn">Напред</Badge>

						</div>
					</div>
				
			</div>
        );
    }
}

export default PersonalInfo;