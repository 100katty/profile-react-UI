import React, { Fragment, useState } from "react";
import { NavLink } from "react-router-dom";

const NoDocLoaded = () => (
  <div className="text-center text-muted">No File Loaded</div>
);

export default () => {
  const [path, setPath] = useState("");
  return (
    <Fragment>
      <ol className="breadcrumb">
        <li className="breadcrumb-item active">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="breadcrumb-item active">
          <NavLink to="/accounts/1/view">Account</NavLink>
        </li>
        <li className="breadcrumb-item active">
          <NavLink to="/accounts/1/workcenters/1">Workcenter</NavLink>
        </li>
        <li className="breadcrumb-item active">Documents</li>
      </ol>

      <ul class="list-group">
        <li className="list-group-item no-hover">
          Path: <span className="badge bg-secondary rounded-pill">/</span>
        </li>
      </ul>

      <div className="row">
        <div className="col-4">
          <div className="list-group">
            <a
              href="#"
              className="list-group-item list-group-item-action active"
            >
              <i className="fas fa-upload fa-lg mr-2"></i> Upload new file...
            </a>
          </div>
          <div className="list-group">
            <a href="#" className="list-group-item list-group-item-action">
              <i className="fas fa-folder fa-lg mr-2"></i> Personal
            </a>
            <a href="#" className="list-group-item list-group-item-action">
              <i className="fas fa-folder fa-lg mr-2"></i> Photos
            </a>
            <a href="#" className="list-group-item list-group-item-action">
              <i className="fas fa-folder fa-lg mr-2"></i> New Folder (1)
            </a>
            <a href="#" className="list-group-item list-group-item-action">
              <i class="far fa-file-pdf fa-lg mr-2"></i> 2019-Tax-Formns-W2.pdf
            </a>
            <a href="#" className="list-group-item list-group-item-action">
              <i className="far fa-file-alt fa-lg mr-2"></i> Personal Notes.txt
            </a>
            <a href="#" className="list-group-item list-group-item-action">
              <i className="far fa-file-alt fa-lg mr-2"></i> Discovery 2020 -
              Project Alpha.txt
            </a>
            <a href="#" className="list-group-item list-group-item-action">
              <i className="far fa-file-excel fa-lg mr-2"></i> NewDocument.xls
            </a>
          </div>
        </div>
        <div className="col-8">
          <NoDocLoaded />
        </div>
      </div>
    </Fragment>
  );
};
