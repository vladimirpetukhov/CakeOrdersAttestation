import React, { Component } from 'react';
import ListOrders from '../orders/ListOrders';
import Notifications from './Notifications';
import { connect } from 'react-redux';

class Dashboard extends Component {
	render() {
		
		const {orders}=this.props;
		return (
			<div className="dashboard container">
				<div className="row">
					<div className="col s12 m6">
						<ListOrders orders={orders}/>
					</div>
					<div className="col s12 m5 offset-m1">
						<Notifications />
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		orders: state.order.orders
	};
};

export default connect(mapStateToProps)(Dashboard);
