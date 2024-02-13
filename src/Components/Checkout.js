import React from 'react'
import CheckoutProducts from './CheckoutProducts';
import Subtotal from './Subtotal';
import {useStateValue} from './StateProvider';

function Checkout() {
  const [{basket}, dispatch] = useStateValue();
  return (
    <div className="container-fluid">
      <div className="row mt-1 min-vh-100">
        <div className="col-9">
          <img src="/images/amezonads2.png" className="w-100" alt="ads" />
          <div>
            <h3>Shopping Cart</h3>
            {basket.map(item=>(
              <CheckoutProducts
              id = {item.id}
              title = {item.title}
              image = {item.image}
              rating = {item.rating}
              price = {item.price}
              />
            ))}
          </div>
        </div>
        <div className="col-3">
          <Subtotal/>
        </div>
      </div>
    </div>
  );
}

export default Checkout