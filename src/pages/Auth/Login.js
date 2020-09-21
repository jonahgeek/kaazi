import React from "react";
import {Footer} from '../../components'
import { Link } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const [user, setUser] = useState("")

  return (
    <>
      <div className="row">
        <div className="offset-md-4 col-md-4">
          <div className="heading">
            <center>kaazi</center>
          </div>
          <small>
            Welcome to kaazi, your invoice, receipt and quotation solution
          </small>
          <br/><br/>
          <div className="card">
            <div className="card-body">
              <div className="form-group">
                <input
                  type="text"
                  placeholder="email address"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  placeholder="password"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <Link to="/account/dashboard" className="btn btn-block btn-success">Log in</Link>
              </div>
              <div className="form-group">
                  <Link to="/register" className="btn btn-link btn-block">Create new user?</Link>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Login;
