import React from "react";
import { Footer } from "../../components";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <>
      <div className="row">
        <div className="offset-md-4 col-md-4">
          <div className="heading">
            <center>Create new kaazi account</center>
          </div>
          <div className="card">
            <div className="card-body">
              <div className="form-group">
                <input
                  type="text"
                  placeholder="First Name"
                  className="form-control"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Last Name"
                  className="form-control"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Email Address"
                  className="form-control"
                  required
                />
                <label htmlFor="">
                  <small>We promise not to share your email</small>
                </label>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Currency"
                  className="form-control"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  placeholder="Password"
                  className="form-control"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="form-control"
                  required
                />
              </div>
              <div className="form-group">
                <Link to="/login" className="btn btn-block btn-success">
                  Register
                </Link>
              </div>
              <div className="form-group">
                <Link to="/login" className="btn btn-link btn-block">
                  Already have an account?
                </Link>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Register;
