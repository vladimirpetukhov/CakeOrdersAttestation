import React from 'react';
import OrderSummary from './OrderSummary';

const ListOrders = () => {
	return (
		<div className="order-list section">
            <OrderSummary />
            <OrderSummary />
            <OrderSummary />
            <OrderSummary />
		</div>
	);
};

export default ListOrders;
