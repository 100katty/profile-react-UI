import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

export default () => (
  <Fragment>
    <div className="row bg-white m-2 shadow" style={{ maxWidth: 800 }}>
      <div
        className="p-0 col-lg-4 col-md-4 d-none d-md-block"
        style={{
          backgroundImage: `url(${require("../assets/images/login_splash.png")})`,
          backgroundSize: "cover"
        }}
      >
        &nbsp;
      </div>
      <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
        <div className="card-body">
          <h4 className="card-title">Start using Procorem</h4>
          <div className="card-text pt-2">
            <div className="form-group">
              <label htmlFor="account_email">Email address</label>
              <input
                type="email"
                className="form-control"
                id="account_email"
                placeholder="Enter a valid email here..."
              />
            </div>
            <div className="form-group">
              <label htmlFor="account_password">Password</label>
              <input
                type="password"
                className="form-control"
                id="account_password"
                placeholder="Enter a valid password here..."
              />
            </div>
            <br />
            <button type="button" className="btn btn-success w-100">
              Sign in
            </button>
            <div className="text-center text-muted mt-4 mb-0">
              <NavLink to="/register">Join Procorem</NavLink> or{" "}
              <NavLink to="/register">Forgot Password</NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Fragment>
);
