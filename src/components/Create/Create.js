import React from "react";
import { AiOutlineFileAdd } from "react-icons/ai";
import { FaFileInvoiceDollar, FaQuoteLeft, FaReceipt} from 'react-icons/fa'
import {BsFillPersonPlusFill} from 'react-icons/bs'
import { Link } from "react-router-dom";

const Create = () => {
  return (
    <>
      <div className="card">
        <div className="card-header"><AiOutlineFileAdd/> Create New</div>
        <div className="card-body">
          <Link to="/account/new-client">
          <BsFillPersonPlusFill /> Client
          </Link>
          <br/>
          <Link to="/account/new-invoice">
            <FaFileInvoiceDollar /> Invoice
          </Link>{" "}
          <br />
          <Link to="/account/new-quotation">
            <FaQuoteLeft /> Quotation
          </Link>{" "}
          <br />
          <Link to="/account/new-receipt">
            <FaReceipt /> Receipt
          </Link>
        </div>
      </div>
    </>
  );
};

export { Create };
