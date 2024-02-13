import React, { useState } from 'react'
import { Link } from "react-router-dom";
function Login() {
     const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");
     const [error, setError] = useState("");

    function handlesubmit(event) {
      // Basic validation
      if (!email || !password) {
        setError("Email and password are required");
        return;
      }
      alert("Login Successfully")
      console.log(email + password);
      setError(""); // Reset error state
    }
  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100">
      <div className="mb-4">
        <img
          src="/images/eshoplogo.png"
          alt="eShop"
          className="img-fluid"
          style={{ width: "200px", height: "auto" }}
        />
      </div>
      <div className="bg-white p-3 rounded border">
        <form onSubmit={handlesubmit} className="w-100 max-w-md">
          <h2>Sign in</h2>
          <div className="mb-2">
            <label>
              <strong>Email or mobile phone number</strong>
            </label>
            <input
              type="text"
              placeholder="Enter Email or Mobile Number"
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="mb-2">
            <label>
              <strong>Password</strong>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
            />
          </div>
          {error && <p className="text-danger">{error}</p>}
          <button className="btn btn-warning w-100 mb-2">Continue</button>
          <p>
            <small>
              By continuing, you agree to eShop's
              <Link
                className="text-decoration-none"
                to="https://www.amazon.com/gp/help/customer/display.html/ref=ap_register_notification_condition_of_use?ie=UTF8&nodeId=508088"
              >
                Conditions <br></br> of Use
              </Link>
              and
              <Link
                className="text-decoration-none"
                to="https://www.amazon.com/gp/help/customer/display.html/ref=ap_register_notification_privacy_notice?ie=UTF8&nodeId=468496"
              >
                Privacy Notice.
              </Link>
            </small>
          </p>
          <hr aria-hidden="true" class="a-divider-normal"></hr>
          <p>
            <strong>Buying for work?</strong>
            <br></br>
            <Link className="text-decoration-none">
              Create a free business account
            </Link>
          </p>
          <Link
            to="/register"
            className="btn btn-default border w-100 bg-light rounded-0 text-decoration -none"
          >
            Create your Amazon account
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login