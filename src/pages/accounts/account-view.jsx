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
        <li className="breadcrumb-item active">
          <NavLink to="/accounts/1/view">Account</NavLink>
        </li>
        <li className="breadcrumb-item active">Details</li>
      </ol>
      <Tabs
        selectedIndex={tabIndex}
        onSelect={(tabIndex) => setTabIndex(tabIndex)}
      >
        <TabList>
          <Tab>
            <i className="far fa-user"></i> Details
          </Tab>
          <Tab>
            <i className="fas fa-list-ul"></i> Fields
          </Tab>
          <Tab>
            <i className="fas fa-object-ungroup"></i> Templates
          </Tab>
          <Tab>
            <i className="fas fa-wallet"></i> Billing
          </Tab>
          <Tab>
            <i className="fas fa-cogs"></i> Settings
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
