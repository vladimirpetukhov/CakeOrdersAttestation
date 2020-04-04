import React, { Component } from 'react';
import FormHelperText from '@material-ui/core/FormHelperText';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import NativeSelect from '@material-ui/core/NativeSelect';

const useStyles = makeStyles(theme => ({
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120,
	},
	selectEmpty: {
		marginTop: theme.spacing(2),
	},
}));

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
				<form className="azure" onSubmit={this.handleSubmit}>
					<h5 className="grey-text text-darken-3">Create a New Project</h5>
					<div className="row">
						<div className="input-field col s12">
							<InputLabel htmlFor="age-native-helper">Тип</InputLabel>
							<NativeSelect
								required
								value={this.state.type}
								onChange={this.handleChange}
								inputProps={{
									name: 'type',
									id: 'type',
								}}
							>
								<option aria-label="None" value="" />
								<option value={10}>Ten</option>
								<option value={20}>Twenty</option>
								<option value={30}>Thirty</option>
							</NativeSelect>
							<FormHelperText className="bg-teal">Изберете вид на поръчката</FormHelperText>
						</div>
                        <div className="row">
                        <div className="input-field col s4">
							<label htmlFor="type">Вид на поръчката:</label>
							<input id="t" name="" onChange={this.handleChange} />
                        </div>
                        <div className="input-field col s4">
							<label htmlFor="type">Вид на поръчката:</label>
							<input id="t" name="" onChange={this.handleChange} />
                        </div>
                        <div className="input-field col s4">
							<label htmlFor="type">Вид на поръчката:</label>
							<input id="t" name="" onChange={this.handleChange} />
						</div>
                        </div>
                        

						<div className="col-md-4"></div>
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
