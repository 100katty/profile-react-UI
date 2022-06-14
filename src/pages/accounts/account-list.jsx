import React, { Fragment, useState } from "react";
import { NavLink } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import NoRecords from "../../components/no-records";
import AccountList from "../../components/accounts/list-items";

import data from "../../data/accounts.json";

export default () => {
  const [tabIndex, setTabIndex] = useState(0);
  return (
    <Fragment>
      <ol className="breadcrumb">
        <li className="breadcrumb-item active">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="breadcrumb-item active">Accounts</li>
      </ol>

      <Tabs
        selectedIndex={tabIndex}
        onSelect={(tabIndex) => setTabIndex(tabIndex)}
      >
        <TabList>
          <Tab>
            <i className="fas fa-address-book"></i> Personal
          </Tab>
          <Tab>
            <i className="fas fa-building"></i> Business
          </Tab>
          <Tab>
            <i className="fas fa-trash-alt"></i> Inactive
          </Tab>
        </TabList>
        <TabPanel>
          <h6>Personal Accounts</h6>
          {data &&
          data.filter((f) => f.type === "Personal" && f.isActive).length > 0 ? (
            <AccountList
              items={data.filter((f) => f.type === "Personal" && f.isActive)}
            />
          ) : (
            <NoRecords />
          )}
        </TabPanel>
        <TabPanel>
          <h6>Business Accounts</h6>
          {data &&
          data.filter((f) => f.type === "Business" && f.isActive).length > 0 ? (
            <AccountList
              items={data.filter((f) => f.type === "Business" && f.isActive)}
            />
          ) : (
            <NoRecords />
          )}
        </TabPanel>
        <TabPanel>
          <h6>Inactive Accounts</h6>
          {data && data.filter((f) => !f.isActive).length > 0 ? (
            <AccountList items={data.filter((f) => !f.isActive)} />
          ) : (
            <NoRecords />
          )}
        </TabPanel>
      </Tabs>
    </Fragment>
  );
};
