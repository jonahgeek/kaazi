import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import { Admin } from "./pages/Admin";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/account" render={(props) => <Admin {...props} />} />
          <Route path="/login" component={Login} />
          {/* <Route path="/register" component={Register} /> */}
          <Redirect from="*" to="/login" />
        </Switch>
      </Router>
    </>
  );
}

export default App;
