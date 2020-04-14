import React, { Component } from 'react';
import Image from 'react-bootstrap/Image';
import SignedInOrders from './SignedInOrders';
import SignedOutOrders from './SignedOutOrders';
import logo from '../../images/biglogo.png';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarToggler, MDBCollapse, MDBNavbarNav } from 'mdbreact';
import './layouts.css';

class Navbar extends React.Component {
	state = {
		isOpen: false,
	};

	toggleCollapse = () => {
		this.setState({ isOpen: !this.state.isOpen });
	};
	render() {
		return (
			<MDBNavbar id="navbar-custom" dark expand="md" className="z-depth-3">
				<MDBNavbarToggler onClick={this.toggleCollapse} />
				<MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
					<SignedInOrders />
					<MDBNavbarNav right>
						<SignedOutOrders />
					</MDBNavbarNav>
				</MDBCollapse>
			</MDBNavbar>
		);
	}
}

export default Navbar;
