import React, { useState } from 'react';
import { MDBCol, MDBContainer, MDBRow,MDBSelect } from 'mdbreact';
import Form from 'react-bootstrap/Form';
import PetukhovaLogo from '../features/PetukhovaLogo';

const formFields = {
	username: '',
	password: '',
	confirmPassword: '',
	firstName: '',
	middleName: '',
	lastName: '',
	personalNumber: '',
	keyNumber: '',
	email: '',
};

function Register() {
	const formGroup = (label, type, placeholder, name, fields, setFields) => {
		return (
			<Form.Group>
				<Form.Label className="small  mb-0 active">{label}</Form.Label>
				<Form.Control
					type={type}
					placeholder={placeholder}
					value={fields[name]}
					name={name}
					data-testid={'register-' + name}
					onChange={(e) => handleChange(e, fields, setFields, false)}
				/>
			</Form.Group>
		);
	};
	const [fields, setFields] = useState(formFields);


	const handleChange = (event, fields, fieldsSet, isCheckbox) => {
		event.persist();

		var fieldValue;

		isCheckbox ? (fieldValue = event.target.checked) : (fieldValue = event.target.value);

		fieldsSet({
			...fields,
			[event.target.name]: fieldValue,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(fields);
	};

	return (
		<MDBContainer>
			<PetukhovaLogo/>
			<MDBRow className="m-0">
				<Form
					onSubmit={handleSubmit}
					className="col-lg-8 col-md-10 mx-auto text-left shadow-lg p-3 mb-5 cake-forms rounded cake-input-form"
				>
					<MDBRow>
						<div className="col-md-12  text-center">
							<h3>Регистрация</h3>
						</div>
						<MDBCol md="4">{formGroup('Име:', 'text', 'Име', 'firstName', fields, setFields)}</MDBCol>
						<MDBCol md="4">
							{formGroup('Бащино име:', 'text', 'Бащино име ', 'middleName', fields, setFields)}
						</MDBCol>
						<MDBCol md="4">
							{formGroup('Фамилия:', 'text', 'Фамилия ', 'lastName', fields, setFields)}
						</MDBCol>
					</MDBRow>
					<MDBRow>
						<MDBCol md="6">
							{formGroup(
								'Потребителско име:',
								'text',
								'Потребителско име',
								'username',
								fields,
								setFields
							)}
						</MDBCol>
						<MDBCol md="6">
							{formGroup('Електронна поща:', 'text', 'Електронна поща', 'email', fields, setFields)}
						</MDBCol>
					</MDBRow>
					<MDBRow>
						<MDBCol md="6">{formGroup('Парола:', 'text', 'Парола', 'password', fields, setFields)}</MDBCol>
						<MDBCol md="6">
							{formGroup(
								'Повтори парола:',
								'text',
								'Повтори парола',
								'confirmPassword',
								fields,
								setFields
							)}
						</MDBCol>
					</MDBRow>
					<MDBRow>
						<MDBCol md="6">
							{formGroup('Личен номер:', 'text', 'Личен номер', 'personalNumber', fields, setFields)}
						</MDBCol>
						<MDBCol md="6">{formGroup('Ключ:', 'text', 'Ключ', 'keyNumber', fields, setFields)}</MDBCol>
					</MDBRow>
					<MDBCol md="12" className="p-0 m-0 mt-4">
						<button type="submit" class="btn  submit-btn btn-rounded waves-effect btn-md btn-block">
							Регистрация <i class="fa fa-forward" aria-hidden="true"></i>
						</button>
					</MDBCol>
				</Form>
			</MDBRow>
		</MDBContainer>
	);
}

export default Register;
