import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

import Accordion from "../../components/accordion";

export default () => (
  <Fragment>
    <ol className="breadcrumb">
      <li className="breadcrumb-item active">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="breadcrumb-item active">Create Account</li>
    </ol>

    <Accordion title="Account information" defaultOpen={true}>
      <div className="form-group">
        <label htmlFor="account_name">Account Name</label>
        <input
          type="text"
          className="form-control required"
          id="account_name"
          placeholder="eg. Company or Organization Name..."
        />
        <small id="emailHelp" className="form-text text-muted">
          This must be unique, this is how others find you!
        </small>
      </div>
      <div className="form-group">
        <label htmlFor="account_email">Primary email address</label>
        <input
          type="email"
          className="form-control"
          id="account_email"
          placeholder="Enter a valid email here..."
        />
        <small id="emailHelp" className="form-text text-muted">
          We'll never share your email with anyone else.
        </small>
      </div>

      <div className="form-group">
        <label htmlFor="exampleSelect1">Workcenter Defaults</label>
        <select className="form-control" id="exampleSelect1">
          <option>Do not create workcenters for me</option>
          <option>Create a basic set of workcenters</option>
        </select>
        <small id="emailHelp" className="form-text text-muted">
          We can go ahead and stub out a basic set of workcenters for you, or
          you can tell us not to and create them only as you need them.
        </small>
      </div>
    </Accordion>

    <Accordion title="Subscription">
      <div className="row">
        <div className="col-6">
          <div className="form-group">
            <label htmlFor="exampleSelect1">Subscription Level</label>
            <select className="form-control" id="exampleSelect1">
              <option>Free 30-Day Trial</option>
              <option>Professional</option>
              <option>Business</option>
              <option>Enterprise</option>
            </select>
          </div>
        </div>
        <div className="col-6">
          <fieldset className="form-group">
            <label htmlFor="exampleSelect1">Billing Plan</label>
            <div className="form-check">
              <label className="form-check-label">
                <input
                  type="radio"
                  className="form-check-input"
                  name="optionsRadios"
                  id="optionsRadios1"
                  value="option1"
                  defaultChecked={true}
                />
                Monthly $15.00 per member / month
              </label>
            </div>
            <div className="form-check">
              <label className="form-check-label">
                <input
                  type="radio"
                  className="form-check-input"
                  name="optionsRadios"
                  id="optionsRadios2"
                  value="option2"
                />
                Annual (2 months free) $15.00 per member / month
              </label>
            </div>
          </fieldset>
        </div>
      </div>

      <div className="row">
        <div className="col-6">
          <div className="form-group">
            <label htmlFor="account_licenses">Member Licenses</label>
            <input
              type="number"
              className="form-control"
              id="account_licenses"
              min="1"
              max="100"
              defaultValue="1"
            />
          </div>
        </div>
        <div className="col-6">&nbsp;</div>
      </div>
    </Accordion>

    <Accordion title="Billing">
      <div className="form-group">
        <label htmlFor="account_firstname">First Name on Credit Card</label>
        <input
          type="text"
          className="form-control required"
          id="account_firstname"
        />
      </div>
      <div className="form-group">
        <label htmlFor="account_lastname">Last Name on Credit Card</label>
        <input
          type="text"
          className="form-control required"
          id="account_lastname"
        />
      </div>
      <div className="form-group">
        <label htmlFor="account_ccnumber">Credit Card Number</label>
        <input
          type="text"
          className="form-control required"
          id="account_ccnumber"
        />
      </div>
      <div className="row">
        <div className="col-6">
          <div className="form-group">
            <label htmlFor="account_firstname">Expiration</label>
            <input
              type="text"
              className="form-control required"
              id="account_firstname"
            />
          </div>
        </div>
        <div className="col-6">
          <div className="form-group">
            <label htmlFor="account_firstname">Zip Code</label>
            <input
              type="text"
              className="form-control required"
              id="account_firstname"
            />
          </div>
        </div>
      </div>
    </Accordion>

    <hr />
    <button type="button" className="btn btn-secondary">
      Cancel
    </button>
    <button type="button" className="btn btn-success float-right">
      Create Account
    </button>
  </Fragment>
);
