import React, { Component } from 'react';
import PersonalInfo from './PersonalInfo';
import JobDetails from './OrderDetails';
import AllInfo from './AllInfo';
import PaymentInfo from './PaymentInfo';
import { makeStyles } from '@material-ui/core/styles';
import OrderDetails from './OrderDetails';

const useStyles = makeStyles(theme => ({
	appBar: {
		position: 'relative',
	},
	layout: {
		width: 'auto',
		marginLeft: theme.spacing(2),
		marginRight: theme.spacing(2),
		[theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
			width: 600,
			marginLeft: 'auto',
			marginRight: 'auto',
		},
	},
	paper: {
		marginTop: theme.spacing(3),
		marginBottom: theme.spacing(3),
		padding: theme.spacing(2),
		[theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
			marginTop: theme.spacing(6),
			marginBottom: theme.spacing(6),
			padding: theme.spacing(3),
		},
	},
	stepper: {
		padding: theme.spacing(3, 0, 5),
	},
	buttons: {
		display: 'flex',
		justifyContent: 'flex-end',
	},
	button: {
		marginTop: theme.spacing(3),
		marginLeft: theme.spacing(1),
	},
}));

export class StepForm extends Component {
	state = {
		step: 1,

		// step 1
		firstName: '',
		lastName: '',
		address: '',
		phone: '',
		city: '',

		// step 2
		jobTitle: '',
		jobCompany: '',
		jobLocation: '',
		data: '',

		// step 3
		jobTitle: '',
		jobCompany: '',
		jobLocation: '',
	};

	nextStep = () => {
		const { step } = this.state;

		this.setState({
			step: step + 1,
		});
		console.log(this.state);
	};

	prevStep = () => {
		const { step } = this.state;
		this.setState({
			step: step - 1,
		});
	};


	handleChange = input => e => {
		this.setState({ [input]: e.target.value });
	};

	calculateRest = e => {
		this.setState({
			rest: parseFloat(this.price - this.capro).toFixed(2),
			lblRest: parseFloat(this.price - this.capro).toFixed(2),
		});
	};

	showStep = () => {
		const { step, firstName, lastName, address, phone, city, price, capro, rest, lblRest, data } = this.state;

		if (step === 1)
			return (
				<PersonalInfo
					nextStep={this.nextStep}
					handleChange={this.handleChange}
					firstName={firstName}
					lastName={lastName}
					address={address}
					phone={phone}
					city={city}
				/>
			);
		if (step === 2)
			return (
				<OrderDetails
					nextStep={this.nextStep}
					prevStep={this.prevStep}
					data={data}
				/>
			);
		if (step === 3)
			return (
				<PaymentInfo
					nextStep={this.nextStep}
					prevStep={this.prevStep}
					handleChange={this.handleChange}
					price={price}
					capro={capro}
					rest={rest}
					calculateRest={this.calculateRest}
					lblRest={lblRest}
				/>
			);
		if (step === 4) return <AllInfo firstName={firstName} lastName={lastName} prevStep={this.prevStep} />;
	};

	render() {
		const { step } = this.state;

		return (
			<>
				<h6 className="white-text center">Стъпка {step} от 4.</h6>

				{this.showStep()}
			</>
		);
	}
}

export default StepForm;
