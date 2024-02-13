import React, { useState } from "react";
import { Link } from "react-router-dom";

function SignUp() {
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [confirmPassword, setConfirmPassword] = useState("");
   const [error, setError] = useState("");

  function handleSubmit(event) {
    

    // Basic validation
    if (!name || !email || !password || !confirmPassword) {
      setError("All fields are required");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    // If validation passes, you can proceed with further actions
    console.log(name, email, password);
    alert("You have Created your Account Successfully")
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
        <form onSubmit={handleSubmit} className="w-100 max-w-md">
          <h4>Create account</h4>
          <div className="mb-2">
            <label>
              <strong>Your name</strong>
            </label>
            <input
              type="text"
              placeholder="First and last name"
              onChange={(e) => setName(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="mb-2">
            <label>
              <strong>Mobile number or email</strong>
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
              placeholder="At least 6 characters"
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="d-flex">
            <i className="bi bi-info text-primary"></i>
            <p>
              <small>Password must be at least 6 characters.</small>
            </p>
          </div>
          <div className="mb-2">
            <label>
              <strong>Re-enter password</strong>
            </label>
            <input
              type="password"
              placeholder=""
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="form-control"
            />
          </div>
          {error && <p className="text-danger">{error}</p>}
          <button className="btn btn-warning w-100 mb-2">Continue</button>
          <p>
            By continuing, you agree to eShop's<br></br>
            <Link
              className="text-decoration-none"
              to="https://www.amazon.com/gp/help/customer/display.html/ref=ap_register_notification_condition_of_use?ie=UTF8&nodeId=508088"
            >
              <small>Conditions of Use </small>
            </Link>
            and
            <Link
              className="text-decoration-none"
              to="https://www.amazon.com/gp/help/customer/display.html/ref=ap_register_notification_privacy_notice?ie=UTF8&nodeId=468496"
            >
              <small> Privacy Notice.</small>
            </Link>
          </p>
          <hr aria-hidden="true" class="a-divider-normal"></hr>
          <p>
            <strong>Buying for work?</strong>
            <br></br>
            <Link className="text-decoration-none">
              Create a free business account
            </Link>
          </p>
          <p>
            Already have an account?{" "}
            <Link to="/login" className="text-decoration-none">
              Sign in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
