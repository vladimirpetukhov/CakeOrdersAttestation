import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SignedInOrders from './SignedInOrders';
import SignedOutOrders from './SignedOutOrders';

const Navbar = () => {
	return (
		<nav className="nav-wrapper black">
			<div className="container">
            <Link to="/" className="brand-logo">Home</Link>
            <SignedInOrders/>
            <SignedOutOrders/>
            </div>
		</nav>
	);
};

export default Navbar;
