import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { ArrowRightCircle } from "react-bootstrap-icons";

const Login = () => {
  return (
    <>
      <div className="row mt-5">
        <div className="offset-md-4 col-md">
          <div class="login-form-1 mt-5 mx-5">
            <form id="login-form" class="text-left">
              <div class="login-form-main-message"></div>
              <div class="main-login-form">
                <div class="login-group">
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
              <div class="etc-login-form text-center">
                <p>
                  <Link to="/forgot-password">Forgot password</Link>
                </p>
                <p>
                  <Link to="/register">Need an account?</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
