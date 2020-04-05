import React, { Component } from 'react';
import ListOrders from '../orders/ListOrders';
import Notifications from './Notifications';
import { connect } from 'react-redux';

class Dashboard extends Component {
	render() {
		return (
			<div className="dashboard container">
				<div className="row">
					<div className="col s12 m6">
						<ListOrders />
					</div>
					<div className="col s12 m5 offset-m1">
						<Notifications />
					</div>
				</div>
			</div>
		);
	}
}

export default Dashboard;
