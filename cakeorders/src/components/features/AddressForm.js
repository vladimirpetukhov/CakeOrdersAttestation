import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { TextareaAutosize } from '@material-ui/core';

export default class AddressForm extends Component {
    constructor(props){
        super(props);
       
    }

    state = {
		firstName: '',
		lastName: '',
	};
    
	

	render() {
		return (
			<React.Fragment>
				<br />
				<Grid container spacing={3}>
					<Grid item xs={12} sm={6}>
						<label htmlFor="firstName">Име</label>
						<input id="firstName" name="firstName"  />
					</Grid>
					<Grid item xs={12} sm={6}>
						<label htmlFor="lastName">Бащино име</label>
						<input id="lastName" name="lastName" />
					</Grid>
					<Grid item xs={12}>
						<label htmlFor="lastName">Адрес 1</label>
						<input required id="address1" name="address1" />
					</Grid>
					<Grid item xs={12}>
						<input
							id="address2"
							name="address2"
							label="Адрес 2"
							fullWidth
							autoComplete="billing address-line2"
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<input
							required
							id="city"
							name="city"
							label="Град"
							fullWidth
							autoComplete="billing address-level2"
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<input id="state" name="state" label="State/Province/Region" fullWidth />
					</Grid>
					<Grid item xs={12} sm={6}>
						<input
							required
							id="phone"
							name="phone"
							label="Телефонен номер"
							fullWidth
							autoComplete="billing postal-code"
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<input
							required
							id="country"
							name="country"
							label="Country"
							fullWidth
							autoComplete="billing country"
						/>
					</Grid>
					<Grid item xs={12}>
						<FormControlLabel
							control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
							label="Use this address for payment details"
						/>
					</Grid>
				</Grid>
			</React.Fragment>
		);
	}
}
