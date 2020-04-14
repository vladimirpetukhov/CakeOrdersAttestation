import React from 'react'

const OrderSummary = ({order}) => {
  console.log(order);
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title ">{order.id}</span>
        <p>{order.lastName}</p>
        <p className="grey-text">3rd September, 2am</p>
      </div>
    </div>
  )
}

export default OrderSummary;