import React, { useState } from "react";
import { Aside } from "../../components";
import InvoiceItem from "./InvoiceItem";

const NewInvoice = () => {
  const [items, setItems] = useState([]);

  const addItem = (quantity, description, unitprice, amount) => {
    amount = parseInt(quantity) * parseInt(unitprice)
    console.log(amount);
    setItems([{ quantity, description, unitprice, amount, ...items }]);
  };
  return (
    <>
      <div className="heading">Create new Invoice</div>
      <div className="row">
        <div className="col-md-8">
          <div className="row">
            <div className="col-md-4">
              <div className="form-group">
                <label htmlFor="">Select Client</label>
                <select class="custom-select" id="inputGroupSelect01">
                  <option selected>Choose...</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div className="card">
                <div className="card-body">
                  <InvoiceItem onSubmit={addItem} />
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Quantity</th>
                    <th scope="col">Description</th>
                    <th scope="col">Unit Price</th>
                    <th scope="col">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item) => {
                    console.log(item);
                    return (
                      <tr key={item.description}>
                        <th scope="row">{item.quantity}</th>
                        <td>{item.description}</td>
                        <td>{item.unitprice}</td>
                        <td>{item.amount}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <Aside />
      </div>
    </>
  );
};

export default NewInvoice;
