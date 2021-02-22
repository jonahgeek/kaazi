import React from "react";

const Donate = () => {
  return (
    <>
      <div class="starter-template text-center py-5 px-3">
        <div className="row">
          <div className="offset-md-4 col-md-4 mt-2">
            <h5>Wanna show your support?</h5>
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

export default Donate;
