import React from "react";

export default () => {
  return (
    <div
      className="text-muted text-center p-2"
      style={{
        border: "1px solid #eee",
        background: "#f5f5f5",
        fontSize: 13
      }}
    >
      <i className="fas fa-spinner fa-lg fa-pulse"></i> Loading ...
    </div>
  );
};
