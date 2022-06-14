import React, { Fragment, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import NoRecords from "../components/no-records";
import HeatMap from "../components/activity-feed/heatmap";
import Timeline from "../components/activity-feed/timeline";
import _acivityFeed from "../data/activity-feed.json";

import heatMapData from "../data/heatmap.json";

export default () => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <Fragment>
      <ol className="breadcrumb">
        <li className="breadcrumb-item active">Home</li>
      </ol>
      <h6>Heatmap</h6>
      <HeatMap data={heatMapData} color={"#6396c9"} />
      <h6>Timeline</h6>
      <Timeline data={_acivityFeed} />
    </Fragment>
  );
};
