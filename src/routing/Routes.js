import React from 'react'
import { Route, Switch } from "react-router-dom";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import Dashboard from "../pages/Dashboard/Dashboard";
import NotFound from "../pages/Error/NotFound";
import PrivateRoute from "./PrivateRoute";

const Routes = (props) => {
  return (
    <Switch>
      <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={Login} />
      <PrivateRoute exact path="/dashboard" component={Dashboard} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default Routes;
