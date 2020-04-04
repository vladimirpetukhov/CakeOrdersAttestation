import React, { Component } from 'react';
import '../../../node_modules/materialize-css/dist/css/materialize.css';
import { Link } from 'react-router-dom';
import SignedInOrders from './SignedInOrders';
import SignedOutOrders from './SignedOutOrders';

const Navbar = () => {
	return (
		<nav className="nav-wrapper blue z-depth-5">
			<div className="container">
            <Link to="/" className="brand-logo">Home</Link>
            <SignedInOrders/>
            <SignedOutOrders/>
            </div>
		</nav>
	);
};

export default Navbar;
