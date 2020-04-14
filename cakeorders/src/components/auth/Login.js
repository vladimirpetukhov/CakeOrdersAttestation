import React, { useState } from 'react';
import { MDBCol, MDBContainer, MDBRow } from 'mdbreact';
import Form from 'react-bootstrap/Form';
import PetukhovaLogo from '../features/PetukhovaLogo';

const formFields = {
	username: '',
	password: '',
};

function Login() {
	const formGroup = (label, type, placeholder, name, fields, setFields) => {
		return (
			<Form.Group>
				<Form.Label className="small  mb-0 active">{label}</Form.Label>
				<div className="invalid-tooltip">
                  Please provide a valid zip.
                </div>
				<Form.Control
					type={type}
					placeholder={placeholder}
					value={fields[name]}
					name={name}
					data-testid={'register-' + name}
					onChange={(e) => handleChange(e, fields, setFields, false)}
					required
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
		e.target.className += " was-validated";
		console.log(fields);
	};

	return (
		<MDBContainer>
			<PetukhovaLogo />
			<MDBRow className="m-0">
				<Form
				noValidate
					onSubmit={handleSubmit}
					className="col-lg-8 col-md-10 mx-auto text-left shadow-lg p-3 mb-5 needs-validation  rounded "
				>
					<MDBRow>
						<div className="col-md-12  text-center">
							<h3>Вход</h3>
						</div>
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
						<MDBCol md="6">{formGroup('Парола:', 'text', 'Парола ', 'password', fields, setFields)}</MDBCol>
					</MDBRow>
					<MDBCol md="12" className="p-0 m-0 mt-4">
						<button type="submit" class="btn  submit-btn btn-rounded waves-effect btn-md btn-block">
							Вход <i class="fa fa-forward" aria-hidden="true"></i>
						</button>
					</MDBCol>
				</Form>
			</MDBRow>
		</MDBContainer>
	);
}

export default Login;
