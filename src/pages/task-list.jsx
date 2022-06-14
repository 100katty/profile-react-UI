import React, { Fragment, useState } from "react";
import { NavLink } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import NoRecords from "../components/no-records";
import TaskList from "../components/tasks/task-list";

import data from "../data/tasks.json";

export default () => {
  const [tabIndex, setTabIndex] = useState(0);
  return (
    <Fragment>
      <ol className="breadcrumb">
        <li className="breadcrumb-item active">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="breadcrumb-item active">Tasks</li>
      </ol>

      <Tabs
        selectedIndex={tabIndex}
        onSelect={(tabIndex) => setTabIndex(tabIndex)}
      >
        <TabList>
          <Tab>
            <i className="fas fa-list"></i> Pending Tasks
          </Tab>
          <Tab>
            <i className="fas fa-clipboard-check"></i> Completed
          </Tab>
          <Tab>
            <i className="fas fa-trash-alt"></i> Deleted
          </Tab>
        </TabList>
        <TabPanel>
          <h6>Pending Tasks</h6>
          {data && data.filter((f) => !f.isComplete).length > 0 ? (
            <TaskList items={data.filter((f) => !f.isComplete)} />
          ) : (
            <NoRecords />
          )}
        </TabPanel>
        <TabPanel>
          <h6>Completed Tasks</h6>
          {data && data.filter((f) => f.isComplete).length > 0 ? (
            <TaskList items={data.filter((f) => f.isComplete)} />
          ) : (
            <NoRecords />
          )}
        </TabPanel>
        <TabPanel>
          <h6>Deleted Tasks</h6>
          <NoRecords />
        </TabPanel>
      </Tabs>
    </Fragment>
  );
};
