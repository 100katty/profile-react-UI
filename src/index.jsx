import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Layout from "./components/layout";
import Routes from "./routes";

import "./assets/styles/bootstrap.css";
import "./assets/styles/bootstrap.overrides.css";
import "./assets/styles/main.scss";

import "./assets/styles/heatmap.css";
import "./assets/styles/tabs.css";

const App = () => (
  <BrowserRouter>
    <Layout>
      <Routes />
    </Layout>
  </BrowserRouter>
);

render(<App />, document.getElementById("root"));
