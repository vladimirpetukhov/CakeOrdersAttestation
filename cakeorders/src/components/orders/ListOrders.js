import React from 'react';
import OrderSummary from './OrderSummary';

const ListOrders = ({ orders }) => {
      console.log(orders)
	return (
		<div className="order-list section">
			{orders &&
				orders.map((order) => {
					return <OrderSummary order={order} key={order.id} />;
				})}
		</div>
	);
};

export default ListOrders;
