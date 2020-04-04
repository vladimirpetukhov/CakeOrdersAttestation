import React from 'react'

const OrderDetails = (props) => {
  const id = props.match.params.id;
  console.log(props.match.params);
  return (
    <div className="container section order-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Order title - { id }</span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et labore quaerat quibusdam vel saepe, ab voluptate accusantium culpa nemo fuga earum? Soluta amet nobis officia sed neque fuga aperiam quia?</p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by The Net Ninja</div>
          <div>2nd September, 2am</div>
        </div>
      </div>
    </div>
  )
}

export default OrderDetails;