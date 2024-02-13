import React from 'react'
import { useStateValue } from './StateProvider';
import { total } from './Reducer';

function Subtotal() {
  const [{basket},dispatch] = useStateValue();
  return (
    <div className='bg-light p-4 mt-1'>
        <p>Subtotal ({basket.length} items): <strong>${total(basket)}</strong></p>
        <input type='checkbox' className='m-1'/><small>This order contains a gift</small>
        <button className='btn btn-warning mt-2 btn-sm w-100'>Proceeds to Buy</button>
    </div>
  )
}

export default Subtotal