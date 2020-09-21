import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import { Admin } from "./pages/Admin";
import { history } from "./_helpers";
import { alertActions } from "./_actions";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    history.listen((location, action) => {
      dispatch(alertActions.clear());
    });
  });
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        pauseOnHover
      />
      <Router history={history}>
        <Switch>
          <Route path="/account" render={(props) => <Admin {...props} />} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Redirect from="*" to="/login" />
        </Switch>
      </Router>
    </>
  );
}

export default App;
