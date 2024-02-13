import React from "react";
import Products from "./Products";

function Home() {
  return (
    <div>
      <div className="w-100">
        <img
          src="/images/ecommerce2.jpg"
          className="w-100 "
          style={{ height: "300px" }}
          alt=""
        />
        
      </div>
      <div className="products bg-light p-3">
        <div className="p-3 d-flex">
          <div className="w-50 p-2 bg-white m-2">
            <Products
              id={1223}
              title={"This is seven Generation Laptop..."}
              image="pc.jpg"
              rating={4}
              price={240}
            />
          </div>
          <div className="w-50 p-2 bg-white m-2">
            <Products
              id={1245}
              title={"This is Digital Watch..."}
              image="watch.jpg"
              rating={4}
              price={240}
            />
          </div>
        </div>
        <div className="p-3 d-flex">
          <div className="p-2 bg-white m-2 col">
            <Products
              id={12246}
              title={"Boult Audio Z20 Ear Earbuds (Black)..."}
              image="earbuds.webp"
              rating={4}
              price={340}
            />
          </div>
          <div className="p-2 bg-white m-2 col">
            <Products
              id={1295}
              title={"iQOO Z7s 5G by vivo (Phone)..."}
              image="phone.jpg"
              rating={5}
              price={100}
            />
          </div>
          <div className="p-2 bg-white m-2 col">
            <Products
              id={1240}
              title={"Modern Swivel Lounge Chair (Grey)..."}
              image="chair.jpg"
              rating={5}
              price={60}
            />
          </div>
        </div>
        <div className="p-3">
          <div className="p-2 bg-white m-2 d-flex justify-content-center">
            <Products
              id={1248}
              title={"This is Main Jacket..."}
              image="jacket.jpg"
              rating={3}
              price={160}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
