import React, { useCallback, useEffect, useState } from "react";
import { Footer } from "../../components";
import { Link } from "react-router-dom";
import { userActions } from "../../_actions";
import { useDispatch, useSelector } from "react-redux";

const Register = () => {
  const [inputs, setInputs] = useState({
    firstname: "",
    lastname: "",
    emailaddress: "",
    currency: "",
    password: "",
    password2: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const {
    firstname,
    lastname,
    emailaddress,
    password,
    password2,
    currency,
  } = inputs;
  const registering = useSelector((state) => state.registration.registering);
  const dispatch = useDispatch();

  const initFetch = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  useEffect(() => {
    initFetch();
  }, [initFetch]);

  const onChange = (event) => {
    const { name, value } = event.target;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  };

  const handleRegister = (e) => {
    e.preventDefault();
    console.log(inputs)
    setSubmitted(true);
    if (password !== password2) {
      return alert("Password mismatch");
    }
    if (inputs) {
      dispatch(
        userActions.register(
          firstname,
          lastname,
          emailaddress,
          currency,
          password
        )
      );
    }
    return submitted;
  };
  return (
    <>
      <div className="row">
        <div className="offset-md-4 col-md-4">
          <div className="heading">
            <center>Create new kaazi account</center>
          </div>
          <div className="card">
            <form className="card-body" onSubmit={handleRegister}>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="First Name"
                  className="form-control"
                  name="firstname"
                  value={firstname}
                  onChange={onChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Last Name"
                  className="form-control"
                  name="lastname"
                  value={lastname}
                  onChange={onChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Email Address"
                  className="form-control"
                  name="emailaddress"
                  value={emailaddress}
                  onChange={onChange}
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
                  value={currency}
                  name="currency"
                  onChange={onChange}
                  className="form-control"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  placeholder="Password"
                  className="form-control"
                  name="password"
                  value={password}
                  onChange={onChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="form-control"
                  name="password2"
                  value={password2}
                  onChange={onChange}
                  required
                />
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-block btn-success">
                  {registering && (
                    <span className="spinner-border spinner-border-sm mr-1"></span>
                  )}
                  Register
                </button>
              </div>
              <div className="form-group">
                <Link to="/login" className="btn btn-link btn-block">
                  Already have an account?
                </Link>
              </div>
            </form>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Register;
