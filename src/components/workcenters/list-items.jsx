import React from "react";
import { NavLink } from "react-router-dom";

export default ({ items }) => {
  return items.map((item, i) => {
    return (
      <div key={i} className="card mb-1">
        <div className="card-body p-3">
          <h5 className="card-title">
            <NavLink
              to={`/accounts/${item.account.id}/workcenters/${item.id}/view`}
              className="mb-1 font-weight-normal"
              style={{
                fontWeight: 300,
                fontSize: 16,
                color: "#6396c9"
              }}
              activeClassName="active-link"
            >
              <i className="fas fa-users mr-2"></i> {item.name}
            </NavLink>
            {item.isActive ? null : (
              <span className="badge badge-pill badge-warning float-right">
                Inactive
              </span>
            )}
          </h5>
          <h6 className="card-subtitle text-muted">
            Docs:{" "}
            <span className="badge badge-pill badge-secondary">
              {item.metaData.docs}
            </span>{" "}
            • Tasks:{" "}
            <span className="badge badge-pill badge-secondary">
              {item.metaData.tasks}
            </span>{" "}
            • Posts:{" "}
            <span className="badge badge-pill badge-secondary">
              {item.metaData.posts}
            </span>
          </h6>
        </div>
      </div>
    );
  });
};
