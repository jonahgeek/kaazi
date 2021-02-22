import React from "react";
import { Aside } from "../../components";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <div className="container mt-5">
        <h3>Dashboard</h3>
        <div className="row mt-4">
          <div className="col-md-8">
            <div className="row">
              <div className="col-md-3">
                <Link to="/account/receipt">
                  <div className="card">
                    <div className="card-body">
                      45 <br /> Receipts
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-md-3">
                <Link to="/account/invoice">
                  <div className="card">
                    <div className="card-body">
                      13 <br /> Invoices
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-md-3">
                <Link to="/account/quotation">
                  <div className="card">
                    <div className="card-body">
                      20 <br /> Quotations
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-md-3">
                <Link to="/account/client">
                  <div className="card">
                    <div className="card-body">
                      20 <br /> Clients
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <Aside />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
