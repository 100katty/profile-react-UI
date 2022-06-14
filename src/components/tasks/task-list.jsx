import React from "react";
import { NavLink } from "react-router-dom";

export default ({ items }) => {
  const getIcon = (item) => {
    return item.isComplete ? "far fa-check-square" : "far fa-square";
  };
  const getFontStyles = (item) => {
    return item.isComplete ? "text-strike text-muted" : "";
  };
  const formatDateTime = (date) => {
    if (date && date !== "") {
      return new Date(date).toLocaleString();
    }
    return "";
  };
  return items ? (
    <ul className="list-group">
      {items.map((item, i) => {
        return (
          <li key={i} className="list-group-item">
            <div className={getFontStyles(item)}>
              <i
                className={`${getIcon(item)} fa-lg pointer`}
                style={{ marginTop: 5 }}
              ></i>
              <span className="ml-3">{item.title}</span>
              <NavLink to={`/tasks/${item.id}/delete`} className="float-right">
                <i className="fas fa-trash-alt fa-lg text-danger"></i>
              </NavLink>
              <NavLink to={`/tasks/${item.id}`} className="float-right mr-3">
                <i className="fas fa-pencil-alt fa-lg"></i>
              </NavLink>
            </div>
            <div className={`${getFontStyles(item)} mt-2`}>
              Some description here
            </div>
            <div className={`${getFontStyles(item)} mt-2 text-muted`}>
              Due: {formatDateTime(item.due)}
            </div>
          </li>
        );
      })}
    </ul>
  ) : null;
};
