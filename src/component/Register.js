import React from "react";
import { Link } from "react-router-dom";

function Register() {
  return (
    <>
      <div className="login">
        <h2>Registration </h2>
        <div className="input-box">
          <form>
          <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Full Name
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                placeholder="Full Name"
              />
            </div>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Email"
              />
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
              />
            </div>
            <div className="login-btn">
              <button type="submit" className="btn btn-success">
                Register
              </button>
              <div className="register"> <span>Already Member?</span> <Link to="/login">Login Here...</Link> </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;
