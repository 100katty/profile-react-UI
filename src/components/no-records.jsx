import React from "react";

export default () => {
  return (
    <div
      className="text-muted text-center p-3"
      style={{
        border: "1px solid #eee",
        background: "#f5f5f5",
        fontSize: 13
      }}
    >
      <i className="far fa-question-circle"></i> No records found.
    </div>
  );
};
