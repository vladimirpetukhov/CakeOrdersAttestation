import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import {
	MDBNavLink,
	MDBNavItem,
	MDBNavbarNav
} from 'mdbreact';

const SignedOutOrders = () => {
	return (
		<MDBNavbarNav left>
			<MDBNavItem >
				<MDBNavLink to="/login">Вход</MDBNavLink>
			</MDBNavItem>
			<MDBNavItem>
				<MDBNavLink to="/register">Регистрация</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
				<MDBNavLink to="/register">Изход</MDBNavLink>
			</MDBNavItem>
		</MDBNavbarNav>
	);
};

export default SignedOutOrders;
