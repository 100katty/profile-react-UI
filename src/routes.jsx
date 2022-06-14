import React from "react";
import { Switch, Route } from "react-router";

import Login from "./pages/login";
import Home from "./pages/home";
import Favorites from "./pages/favorites";
import Feed from "./pages/feed";
import Calendar from "./pages/calendar";
import ListTasks from "./pages/task-list";
import ViewTasks from "./pages/task-view";
import ListAccounts from "./pages/accounts/account-list";
import ViewAccount from "./pages/accounts/account-view";
import CreateAccount from "./pages/wizards/account-create";
import CreateWorkcenter from "./pages/wizards/workcenter-create";
import Profile from "./pages/profiles/profile-edit";
import ProfileMessages from "./pages/profiles/profile-inbox";
import ListWorkcenters from "./pages/workcenters/workcenter-list";
import ViewWorkcenter from "./pages/workcenters/workcenter-view";
import WorkcenterDocuments from "./pages/workcenters/documents";
import WorkcenterTasks from "./pages/workcenters/tasks";

const NotFound = () => (
  <div className="text-center">
    Oops, what you are looking for, does not exist.
  </div>
);

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/login" exact component={Login} />
    <Route path="/profile" exact component={Profile} />
    <Route path="/profile/messages" exact component={ProfileMessages} />
    <Route path="/accounts" exact component={ListAccounts} />
    <Route path="/accounts/:accountId/view" exact component={ViewAccount} />
    <Route
      path="/accounts/:accountId/workcenters"
      exact
      component={ListWorkcenters}
    />
    <Route
      path="/accounts/:accountId/workcenters/:workcenterId/view"
      exact
      component={ViewWorkcenter}
    />
    <Route
      path="/accounts/:accountId/workcenters/:workcenterId/documents"
      exact
      component={WorkcenterDocuments}
    />
    <Route
      path="/accounts/:accountId/workcenters/:workcenterId/tasks"
      exact
      component={WorkcenterTasks}
    />
    <Route path="/favorites" exact component={Favorites} />
    <Route path="/feed" exact component={Feed} />
    <Route path="/calendar" exact component={Calendar} />
    <Route path="/tasks" exact component={ListTasks} />
    <Route path="/tasks/:taskId" exact component={ViewTasks} />
    <Route path="/create/account" exact component={CreateAccount} />
    <Route path="/create/workcenter" exact component={CreateWorkcenter} />
    {/* ELSE */}
    <Route path="*" exact component={NotFound} />
  </Switch>
);

export default Routes;
