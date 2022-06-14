import React, { useState } from "react";

export default ({ contents, buttonClassName, ddClassName, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <button
        onClick={toggleOpen}
        type="button"
        className={`dropdown-toggle btn btn-secondary ${buttonClassName}`}
      >
        {contents}
      </button>
      <div className={`${isOpen ? "show" : ""} dropdown-menu ${ddClassName}`}>
        {children}
      </div>
    </div>
  );
};
