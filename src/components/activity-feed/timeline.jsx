import React from "react";
import { NavLink } from "react-router-dom";

import "../../assets/styles/timeline.css";

export default ({ data }) => {
  const formatDateTime = (date) => {
    if (date && date !== "") {
      return new Date(date).toLocaleString();
    }
    return "";
  };
  const getIcon = (type) => {
    switch (type) {
      case "document":
        return "fas fa-file";
      case "profile":
        return "fas fa-user";
      case "task":
        return "fas fa-tasks";
      default:
        return "fas fa-align-left";
    }
  };
  const createWorkcenterLink = (item) => {
    return (
      <NavLink
        style={{ color: "#7fa8d1" }}
        to={`/workcenter/${item.workcenter.id}`}
      >
        {item.workcenter.name}
      </NavLink>
    );
  };
  return (
    <ul className="cbp_tmtimeline">
      {data.map((item, i) => {
        return (
          <li key={i}>
            <time className="cbp_tmtime">
              <span>{formatDateTime(item.date)}</span>
            </time>
            <div className="cbp_tmicon">
              <i className={`${getIcon(item.type)}`}></i>
            </div>
            <div className="cbp_tmlabel">
              <h2>
                A {item.type} was {item.action}
              </h2>
              <p>
                The {item.type} {item.record ? `record ${item.record}` : null}{" "}
                was {item.action} by {item.account.name} in the "
                {createWorkcenterLink(item)}" workcenter.
              </p>
            </div>
          </li>
        );
      })}
    </ul>
  );
};
