import React, { Fragment, useState } from "react";
import { NavLink } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import NoRecords from "../../components/no-records";

export default () => {
  const [tabIndex, setTabIndex] = useState(0);
  return (
    <Fragment>
      <ol className="breadcrumb">
        <li className="breadcrumb-item active">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="breadcrumb-item active">Prifle</li>
      </ol>
      <Tabs
        selectedIndex={tabIndex}
        onSelect={(tabIndex) => setTabIndex(tabIndex)}
      >
        <TabList>
          <Tab>
            <i className="far fa-user"></i> Profile
          </Tab>
          <Tab>
            <i className="far fa-bell"></i> Notifications
          </Tab>
          <Tab>
            <i className="fas fa-cogs"></i> Preferences
          </Tab>
        </TabList>
        <TabPanel>
          <NoRecords />
        </TabPanel>
        <TabPanel>
          <NoRecords />
        </TabPanel>
        <TabPanel>
          <NoRecords />
        </TabPanel>
      </Tabs>
    </Fragment>
  );
};
