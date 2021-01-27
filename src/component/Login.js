import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div>
      <div className="login">
        <h2>Login</h2>
        <div className="input-box">
          <form>
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
              <button type="submit" className="btn btn-primary">
                Sign in
              </button>
              <div className="register"> <Link to="/register">Registration Here...</Link> </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
