import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import {
	MDBNavLink,
	MDBNavItem,
	MDBDropdownMenu,
	MDBDropdownItem,
	MDBDropdown,
	MDBNavbarNav,
	MDBDropdownToggle,
} from 'mdbreact';

const SignedInOrders = () => {
	return (
		<MDBNavbarNav left>
			<MDBNavItem active>
				<MDBNavLink exact to="/">Начало</MDBNavLink>
			</MDBNavItem>
			<MDBNavItem>
				<MDBNavLink  to="#!">Справки</MDBNavLink>
			</MDBNavItem>
			<MDBNavItem>
				<MDBNavLink to="/create-order">Заявки цех</MDBNavLink>
			</MDBNavItem>
			<MDBNavItem>
				<MDBDropdown>
					<MDBDropdownToggle nav caret>
						<div className="d-none d-md-inline">Бланки</div>
					</MDBDropdownToggle>
					<MDBDropdownMenu className="dropdown-default">
						<MDBDropdownItem href="#!">Индивидуална</MDBDropdownItem>
						<MDBDropdownItem href="#!">Детска</MDBDropdownItem>
						<MDBDropdownItem href="#!">Сватбена</MDBDropdownItem>
						<MDBDropdownItem href="#!">Каталог</MDBDropdownItem>
					</MDBDropdownMenu>
				</MDBDropdown>
			</MDBNavItem>
		</MDBNavbarNav>
	);
};

export default SignedInOrders;
