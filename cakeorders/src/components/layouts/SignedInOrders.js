import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

const SignedInOrders = () => {
	return (
		<ul className="right">
            <li><NavLink to="/create-order">Поръчка</NavLink></li>
            <li><NavLink to="/">Дневна</NavLink></li>
            <li><NavLink to="/">Индивидуален</NavLink></li>
            <li><NavLink to="/">Детска</NavLink></li>
            <li><NavLink to="/" className="btn btn-floating dark-gray lighten-1 ">КП</NavLink></li>
        </ul>
	);
};

export default SignedInOrders;
