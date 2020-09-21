import React from "react";

const Account = () => {
  return (
    <>
      <div className="row">
        <div className="offset-md-4 col-md-4">
          <div className="heading">Edit Account</div>
          <small>Need to make some changes to your account?</small>
          <div className="form-group">
            <input
              type="text"
              placeholder="First Name"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Last Name"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              placeholder="Email Address"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Currency"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="New Password"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Confirm new password *"
              className="form-control"
              required
            />
          </div>
          <div className="form-group">
            <button className="btn btn-block btn-success">Save Changes</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Account;
