import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Layout from "./pages/Layout";
import Login from "./pages/Login";
import Clients from "./pages/Clients";


const app = document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <Route path="login" name="login" component={Login}></Route>
      <Route path="clients" name="clients" component={Clients}></Route>
    </Route>
  </Router>,
app);
