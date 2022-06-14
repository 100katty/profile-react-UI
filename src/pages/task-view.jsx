import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

export default () => (
  <Fragment>
    <ol className="breadcrumb">
      <li className="breadcrumb-item active">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="breadcrumb-item active">
        <NavLink to="/tasks">Tasks</NavLink>
      </li>
      <li className="breadcrumb-item active">View Task</li>
    </ol>
    <div>This is a blank page.</div>
  </Fragment>
);
