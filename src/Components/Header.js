import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function Header() {
const [{basket} ,dispatch] =useStateValue();
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container-fluid">
          <Link to="/" className="d-flex text-decoration-none">
            <i className="bi bi-shop-window fs-4 text-warning me-2"></i>
            <a className="navbar-brand" href="/">
              eShop
            </a>
          </Link>
          <div className="input-group">
            <input
              type="text"
              className="form-control "
              placeholder="Search..."
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <span className="input-group-text bg-warning" id="basic-addon2">
              <i className="bi bi-search"></i>
            </span>
          </div>
          <ul className="navbar-nav me-auto ms-2 mt-2 mt-lg-0">
            <li className="nav-item">
              <a
                className="nav-link active d-flex flex-column"
                href="/"
                aria-current="page"
              >
                <Link to="/login" className="text-decoration-none text-white  ">
                  <small style={{ fontSize: "10px" }}>Hello,sign in</small>{" "}
                  <strong style={{ fontSize: "11px" }}>Account & Lists</strong>
                </Link>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active d-flex flex-column"
                href="/"
                aria-current="page"
              >
                <small style={{ fontSize: "10px" }}>Your</small>{" "}
                <strong style={{ fontSize: "11px" }}>Shop</strong>
              </a>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active d-flex"
                to="/checkout"
                aria-current="page"
              >
                <i className="bi bi-basket2 text-white me-2 fs-5"></i>
                <span className="mt-1">{basket.length}</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
