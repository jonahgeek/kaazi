import React from "react";
import { Aside } from "../../components";

const NewClient = () => {
  return (
    <>
      <div className="heading">Create New Client</div>
      <div className="row">
        <div className="col-md-8">
          <form>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="">First Name</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="form-group">
                  <label htmlFor="">Last Name</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="form-group">
                  <label htmlFor="">Phone Number</label>
                  <input type="number" className="form-control" />
                </div>
                <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
              </div>
              <div className="col-md-6">
                  <div className="form-group">
                      <label htmlFor="">Physical Address</label>
                      <textarea name="" id="" cols="30" rows="10" className="form-control"></textarea>
                  </div>
                  <div className="form-group">
                      <button className="btn btn-success btn-block">Create</button>
                  </div>
              </div>
            </div>
          </form>
        </div>
        <Aside />
      </div>
    </>
  );
};

export default NewClient;
