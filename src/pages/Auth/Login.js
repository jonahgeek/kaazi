import React, { useState, useEffect, useCallback } from "react";
import { Footer } from "../../components";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../../_actions";

const Login = () => {
  const [inputs, setInputs] = useState({
    emailaddress: "",
    password: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const { emailaddress, password } = inputs;
  const loggingIn = useSelector((state) => state.authentication.loggingIn);
  const dispatch = useDispatch();

  const initFetch = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  useEffect(() => {
    initFetch();
  }, [initFetch]);

  function handleChange(event) {
    const { name, value } = event.target;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    setSubmitted(true);
    if (emailaddress && password) {
      dispatch(userActions.login(emailaddress, password));
    }
    return submitted;
  }

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
          <br />
          <br />
          <div className="card">
            <form onSubmit={handleSubmit}>
              <div className="card-body">
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="email address"
                    className="form-control"
                    name="emailaddress"
                    value={emailaddress}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    placeholder="password"
                    className="form-control"
                    name="password"
                    value={password}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <button type="submit" className="btn btn-block btn-success">
                    {loggingIn && (
                      <span className="spinner-border spinner-border-sm mr-1"></span>
                    )}
                    Log in
                  </button>
                </div>
                <div className="form-group">
                  <Link to="/register" className="btn btn-link btn-block">
                    Create new user?
                  </Link>
                </div>
              </div>
            </form>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Login;
