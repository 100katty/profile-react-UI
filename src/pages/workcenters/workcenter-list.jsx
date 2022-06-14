import React, { Fragment, useState } from "react";
import { NavLink } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import NoRecords from "../../components/no-records";
import WorkcenterList from "../../components/workcenters/list-items";

import data from "../../data/workcenters.json";

export default () => {
  const [tabIndex, setTabIndex] = useState(0);
  return (
    <Fragment>
      <ol className="breadcrumb">
        <li className="breadcrumb-item active">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="breadcrumb-item active">
          <NavLink to="/accounts/1/view">Account</NavLink>
        </li>
        <li className="breadcrumb-item active">Workcenters</li>
      </ol>

      <Tabs
        selectedIndex={tabIndex}
        onSelect={(tabIndex) => setTabIndex(tabIndex)}
      >
        <TabList>
          <Tab>
            <i className="fas fa-users"></i> Active
          </Tab>
          <Tab>
            <i className="fas fa-trash-alt"></i> Inactive
          </Tab>
        </TabList>
        <TabPanel>
          <h6>Active Workcenters</h6>
          {data && data.filter((f) => f.isActive).length > 0 ? (
            <WorkcenterList items={data.filter((f) => f.isActive)} />
          ) : (
            <NoRecords />
          )}
        </TabPanel>
        <TabPanel>
          <h6>Inactive Workcenters</h6>
          {data && data.filter((f) => !f.isActive).length > 0 ? (
            <WorkcenterList items={data.filter((f) => !f.isActive)} />
          ) : (
            <NoRecords />
          )}
        </TabPanel>
      </Tabs>
    </Fragment>
  );
};
