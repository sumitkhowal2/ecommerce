import React from 'react'
import {useStateValue} from './StateProvider';

function Products({id,title,image,rating,price}) {
  const [state,dispatch] =useStateValue();
 function addProduct() {
   dispatch({
     type: "ADD_TO_BASKET",
     item: {
       id: id,
       title: title,
       image: image,
       rating: rating,
       price: price,
     },
   });
   alert("Add to Cart Successfully")
 }
  return (
    <div className="d-flex flex-column p-2">
      <h4>{title}</h4>
      <strong>${price}</strong>
      <p>
        {Array(rating)
          .fill()
          .map((_, i) => (
            <span>⭐</span>
          ))}
        
      </p>
      <div className="d-flex flex-column align-items-center">
        <img src={`/images/${image}`} style={{height:"180px"}} className="w-50 mt-1" alt="pc" />
        <button onClick={addProduct} className="btn btn-warning btn-sm w-auto mt-3">Add to Cart</button>
      </div>
    </div>
  );
}

export default Products