import React, { Fragment } from "react";

export default ({ data, color }) => {
  const emptyColor = "#ffffff";
  const emptyColorBorder = "#f0f0f0";
  const getMaxDataValue = () => {
    if (data === undefined || data.length === 0) {
      return 1;
    }
    return [...data].sort((a, b) => (a.count < b.count ? 1 : -1))[0].count;
  };
  const max = getMaxDataValue();
  const calculateColor = (count, color) => {
    const val = count === 0 || max === 0 ? 1 : count / max;
    return `${color}${Math.floor(val * 255)
      .toString(16)
      .padStart(2, 0)}`;
  };
  return (
    <Fragment>
      <div style={{ marginBottom: 20, paddingLeft: 60, paddingRight: 60 }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "start"
          }}
        >
          {data.map((item, i) => {
            return (
              <div
                key={i}
                className="tooltip"
                style={{
                  margin: 2,
                  borderRadius: 3,
                  width: 20,
                  height: 20,
                  fontSize: 8,
                  lineHeight: 3,
                  zIndex: 1,
                  border: `1px solid ${
                    item.count === 0
                      ? emptyColorBorder
                      : calculateColor(item.count, color)
                  }`,
                  background:
                    item.count === 0
                      ? emptyColor
                      : calculateColor(item.count, color),
                  opacity: 1,
                  textAlign: "center"
                }}
              >
                &nbsp;
                <span className="tooltiptext tooltip-top">
                  {item.count} events.
                </span>
              </div>
            );
          })}
        </div>
        <div className="text-center">
          <small className="text-muted">
            (Showing the last 180 days of activity)
          </small>
        </div>
      </div>
    </Fragment>
  );
};
