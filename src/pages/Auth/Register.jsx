import React, { useState } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { ArrowRightCircle } from "react-bootstrap-icons";
import { setAlert } from "../../actions/alert";
import { register } from "../../actions/auth";
import PropTypes from "prop-types";

const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    emailaddress: "",
    currency: "",
    password: "",
    passwordcheck: "",
  });

  const {
    firstname,
    lastname,
    emailaddress,
    currency,
    password,
    passwordcheck,
  } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== passwordcheck) {
      setAlert("Passwords do not match", "danger");
    } else {
      register({ firstname, lastname, emailaddress, currency, password });
    }
  };

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <>
      <div className="row mt-5">
        <div className="offset-md-4 col-md">
          <div class="login-form-1 mt-5 mx-5 text-center">
            <h5>Create new Kaazi Account</h5>
            <form id="login-form" class="text-left" onSubmit={onSubmit}>
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
                      value={firstname}
                      onChange={onChange}
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
                      value={lastname}
                      onChange={onChange}
                      placeholder="Last Name"
                    />
                  </div>
                  <div class="form-group">
                    <label for="emailaddress" class="sr-only">
                      Email Address
                    </label>
                    <input
                      type="email"
                      class="form-control"
                      id="emailaddress"
                      name="emailaddress"
                      value={emailaddress}
                      onChange={onChange}
                      placeholder="Email Address"
                    />
                  </div>
                  <div class="form-group">
                    <label for="currency" class="sr-only">
                      Currency
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="currency"
                      name="currency"
                      value={currency}
                      onChange={onChange}
                      placeholder="Currency"
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
                      placeholder="Password"
                    />
                  </div>
                  <div class="form-group">
                    <label for="passwordcheck" class="sr-only">
                      passwordcheck
                    </label>
                    <input
                      type="password"
                      class="form-control"
                      id="passwordcheck"
                      name="passwordcheck"
                      value={passwordcheck}
                      onChange={onChange}
                      placeholder="Repeat password"
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

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { setAlert, register })(Register);
