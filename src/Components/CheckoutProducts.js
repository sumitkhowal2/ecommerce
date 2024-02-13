import React from 'react';
import { useStateValue } from './StateProvider';

function CheckoutProducts({id,title,image,rating,price}) {
  const [{basket},dispatch] =useStateValue();
  const RemoveFromCart = () =>{
    dispatch({
      type:"Remove_From_Cart",
      id:id
    })
  }
  return (
    <div className="d-flex mb-3">
      <div style={{ width: "140px" }}>
        <img src={`/images/${image}`} className="w-100" alt="pc" />
      </div>
      <div className="ms-3">
        <h4>{title}</h4>
        <span>
          $<strong>{price}</strong>
        </span>
        <p>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <span>⭐</span>
            ))}
        </p>
        <button className="btn btn-sm btn-warning" onClick={RemoveFromCart}>Remove from Cart</button>
      </div>
    </div>
  );
}

export default CheckoutProducts