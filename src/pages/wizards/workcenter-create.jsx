import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

import Accordion from "../../components/accordion";

export default () => (
  <Fragment>
    <ol className="breadcrumb">
      <li className="breadcrumb-item active">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="breadcrumb-item active">Create Workcenter</li>
    </ol>

    <Accordion title="Information" defaultOpen={true}>
      <div className="form-group">
        <label htmlFor="workcenter_name">Workcenter Name</label>
        <input
          type="text"
          className="form-control required"
          id="workcenter_name"
        />
      </div>
      <div className="form-group">
        <label htmlFor="workcenter_account">Account</label>
        <select className="form-control required" id="workcenter_account">
          <option>John Smith</option>
          <option>ProLink Solutions</option>
          <option>Big Business LLC</option>
          <option>ePixelation (Inactive)</option>
        </select>
      </div>
    </Accordion>

    <Accordion title="Details (optional)">
      <div className="form-group">
        <label htmlFor="workcenter_category">Category</label>
        <select className="form-control" id="workcenter_category">
          <option>Uncatagorized</option>
          <option>Career</option>
          <option>Financial</option>
          <option>Health</option>
          <option>Home</option>
          <option>Legal</option>
          <option>Personal Development</option>
          <option>Relationships</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="workcenter_description">Description</label>
        <textarea
          type="text"
          className="form-control"
          id="workcenter_description"
        ></textarea>
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
