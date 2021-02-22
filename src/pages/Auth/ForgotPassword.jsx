import React from "react";

const ForgotPassword = () => {
  return (
    <>
      <div class="starter-template text-center py-5 px-3">
        <div className="row">
          <div className="offset-md-4 col-md-4 mt-2">
            Email address you use to log in to your account
            <br />
            We'll send you an email with instructions to choose a new password.
            <form action="">
              <div class="mt-4">
                <div class="input-group mb-3">
                  <input
                    type="email"
                    class="form-control"
                    placeholder="Email Address"
                  />
                  <button
                    class="btn btn-outline-success"
                    type="submit"
                    id="submit"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
