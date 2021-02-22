import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../actions/auth";
import { ArrowRightCircle, Person } from "react-bootstrap-icons";

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    emailaddress: "",
    password: "",
  });

  const { emailaddress, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(emailaddress, password)
    login(emailaddress, password);
  };

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <>
      <div className="row mt-5">
        <div className="offset-md-4 col-md">
          <div class="login-form-1 mt-5 mx-5 text-center">
            <h5><Person className="mx-1" />  Sign Into Your Account</h5>
            <form id="login-form" class="text-left mt-3" onSubmit={onSubmit}>
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
                      value={emailaddress}
                      onChange={onChange}
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
                      value={password}
                      onChange={onChange}
                      minLength="6"
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

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
