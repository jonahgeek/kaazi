import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRightCircle } from "react-bootstrap-icons";

const Register = () => {
  return (
    <>
      <div className="row mt-5">
        <div className="offset-md-4 col-md">
          <div class="login-form-1 mt-5 mx-5">
            <form id="login-form" class="text-left">
              <div class="login-form-main-message">
                Create new Kaazi Account
              </div>
              <div class="main-login-form">
                <div class="login-group">
                  <div class="form-group">
                    <label for="firstname" class="sr-only">
                      First Name
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="firstname"
                      name="firstname"
                      placeholder="First Name"
                    />
                  </div>
                  <div class="form-group">
                    <label for="lastname" class="sr-only">
                      Last Name
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="lastname"
                      name="lastname"
                      placeholder="Last Name"
                    />
                  </div>
                  <div class="form-group">
                    <label for="emailaddress" class="sr-only">
                      Email Address
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="emailaddress"
                      name="emailaddress"
                      placeholder="Email Address"
                    />
                  </div>
                  <div class="form-group">
                    <label for="password" class="sr-only">
                      Password
                    </label>
                    <input
                      type="password"
                      class="form-control"
                      id="password"
                      name="password"
                      placeholder="Password"
                    />
                  </div>
                </div>
                <button type="submit" class="login-button">
                  <ArrowRightCircle />
                </button>
              </div>
              <Link to="/login" className="btn btn-link btn-block">
                Already have an account?
              </Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
