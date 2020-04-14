import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBLink, MDBInput, MDBIcon, MDBTooltip, MDBFormInline } from 'mdbreact';

import logoviku from '../../images/biglogo.png';
import './register.css';

const formFields = {
	firstName: '',
	secondName: '',
	familyName: '',
	companyEmail: '',
	phone: '',
	password: '',
	repeatedPassword: '',
	position: '',
	unit: '',
	administrativeArea: '',
	city: '',
	organizationStructure: '',
	administrativeDocument: null,
	additionalInformation: '',
	useDigitalSignature: false,
};

function handleChange(event, fields, fieldsSet, isCheckbox) {
	event.persist();

	var fieldValue;

	isCheckbox ? (fieldValue = event.target.checked) : (fieldValue = event.target.value);

	fieldsSet({
		...fields,
		[event.target.name]: fieldValue,
	});
}

function formGroup(label, type, placeholder, name, fields, setFields) {
	return (
		<Form.Group>
			<Form.Label className="small grey-text mb-0 active">{label}</Form.Label>
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
}

function formGroupSelect(label, defaultOption, options, name, fields, setFields) {
	var optionsArray = options.split(',');
	var allOptions = [];

	for (var i = 0; i < optionsArray.length; i++) {
		allOptions.push(
			<option value={optionsArray[i]} key={[i]}>
				{optionsArray[i]}
			</option>
		);
	}

	return (
		<Form.Group>
			<Form.Label className="small grey-text mb-0 active">{label}</Form.Label>
			<Form.Control
				as="select"
				defaultValue={defaultOption}
				className="browser-default custom-select"
				onChange={(e) => handleChange(e, fields, setFields, false)}
				data-testid={'register-' + name}
				name={name}
			>
				<option disabled>{defaultOption}</option>
				{allOptions}
			</Form.Control>
		</Form.Group>
	);
}

function CreateOrder() {
	const [fields, setFields] = useState(formFields);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const fileChangeHandler = (files) => {
		setFields({ ...fields, administrativeDocument: files[0] });
	};

	return (
		<div>
			<MDBContainer className="mt-4 text-center">
				

				<MDBRow>
					<Form className="col-lg-8 col-md-10 mx-auto text-left shadow-lg p-3 mb-5 bg-white rounded">
						{/* Sub Header */}
						<div className="page-header mt-4">
							<div className="h6 text-muted mt-2">Данни за клиента:</div>
							<hr className="mt-1 mb-3" />
						</div>
						{/* Sub Header */}
						<MDBRow>
							<MDBCol md="6">
								{formGroup('Име:', 'text', 'Име на клиента', 'firstName', fields, setFields)}
							</MDBCol>

							<MDBCol md="6">
								{formGroup('Фамилия:', 'text', 'Фамилия на клиента', 'secondName', fields, setFields)}
							</MDBCol>
						</MDBRow>

						<MDBRow>
							<MDBCol md="6">
								{formGroup('Адрес 1', 'email', 'Въведете адрес', 'address1', fields, setFields)}
							</MDBCol>

							<MDBCol md="6">
								{formGroup(
									'Личен телефон',
									'text',
									'Въведете личен телефонен номер',
									'phone1',
									fields,
									setFields
								)}
							</MDBCol>
						</MDBRow>

						<MDBRow>
							<MDBCol md="6">
								{formGroup(
									'Адрес 2',
									'text',
									'Въведете алтернативен адрес',
									'address2',
									fields,
									setFields
								)}
							</MDBCol>

							<MDBCol md="6">
								{formGroup(
									'Алтернативен телефон',
									'text',
									'Въведете алтернативен телефон',
									'phone2',
									fields,
									setFields
								)}
							</MDBCol>
						</MDBRow>

						{/* Sub Header */}
						<div className="page-header mt-4">
							<div className="h6 text-muted mt-2">Данни за артикула:</div>
							<hr className="mt-1 mb-3" />
						</div>
						{/* Sub Header */}

						{formGroupSelect(
							'Вкус',
							'Изберете вкус',
							'Русе,София,Варна',
							'administrativeArea',
							fields,
							setFields
						)}

						{formGroupSelect(
							'Населено място',
							'Изберете населено място',
							'гр. София,с. Своге,гр. Пловдив',
							'city',
							fields,
							setFields
						)}

						{formGroupSelect(
							'Организационна структура',
							'Изберете oрганизационна структура',
							'Организационна структура #1,Организационна структура #2,Организационна структура #3',
							'organizationStructure',
							fields,
							setFields
						)}

						{formGroup('Подразделение', 'text', 'Въведете подразделение', 'unit', fields, setFields)}

						{formGroup('Позиция', 'text', 'Въведете позиция', 'position', fields, setFields)}

						{/* Sub Header */}
						<div className="page-header mt-5">
							<div className="h6 text-muted mt-2">Данни за заплащане:</div>
							<hr className="mt-1 mb-3" />
						</div>
						{/* Sub Header */}

						{/* <Form.Group>
							<Form.Label className="small grey-text mb-0">Добавете административен документ</Form.Label>
							<MDBFileInput
								btnColor="grey"
								btnTitle="Добави документ"
								textFieldTitle="Няма приложен документ"
								reset
								getValue={fileChangeHandler}
							/>
						</Form.Group> */}

						<MDBRow>
							<MDBCol md="12">
								<Form.Group>
									<Form.Label className="small grey-text mb-0 active">
										Допълнителна информация
									</Form.Label>
									<Form.Control
										as="textarea"
										rows="5"
										placeholder="Няма към момента"
										value={fields.additionalInformation}
										name="additionalInformation"
										data-testid={'register-additionalInformation'}
										onChange={(e) => handleChange(e, fields, setFields, false)}
									/>
								</Form.Group>
							</MDBCol>
						</MDBRow>

						<hr className="mt-3" />

						<div className="text-center mt-4 mb-2">
							<MDBRow className="justify-content-center">
								<MDBInput
									label="Сертификат"
									type="checkbox"
									id="useDigitalSignature"
									name="useDigitalSignature"
									checked={fields.useDigitalSignature}
									onChange={(e) => handleChange(e, fields, setFields, true)}
								/>

								<MDBTooltip placement="top" domElement>
									<div className="ml-1" style={{ cursor: 'pointer' }}>
										<MDBIcon icon="info-circle" className="red-text" size="sm" />
									</div>
									<div>Избери сертификат</div>
								</MDBTooltip>
							</MDBRow>
						</div>

						<div className="text-center m-0">
							{fields.useDigitalSignature ? (
								<MDBBtn color="danger" className="mt-4 text-uppercase">
									Сертификат
								</MDBBtn>
							) : (
								<MDBBtn outline color="info" className="mt-4 text-uppercase">
									Без Сертификат
								</MDBBtn>
							)}
							<MDBFormInline>
								<MDBInput label="1" type="checkbox" id="checkbox1" containerClass="mr-5" />
								<MDBInput label="2" type="checkbox" id="checkbox2" containerClass="mr-5" />
								<MDBInput label="3" type="checkbox" id="checkbox3" containerClass="mr-5" />
							</MDBFormInline>
						</div>

						<div className="text-center pt-3">
							<MDBLink to="/login">Вход в системата</MDBLink>
						</div>
					</Form>
				</MDBRow>

				<hr className="my-5" />

				<p className="text-primary text-uppercase text-center">
					Единна информационна система за ВиК услугите и регистър на асоциациите по ВиК и ВиКО
				</p>

				<MDBRow className="mt-3 mb-5 text-center">
					<p className="text-center text-muted small ml-4 mr-4">
						Единната информационна система за ВиК услугите и регистъра на асоциациите по ВиК и на ВиК
						операторите има за цел да спомогне реализирането на визия за финансово, технически и екологично
						устойчив ВиК отрасъл, който да осигурява качествени услуги на поносими за потребителите цени в
						съответствие с изискванията на законодателството на ЕС в областта на опазване на водите.
					</p>
				</MDBRow>
			</MDBContainer>
		</div>
	);
}

export default CreateOrder;
