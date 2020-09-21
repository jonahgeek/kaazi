import React, { useState } from "react";

const useInputValue = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  return {
    value,
    onChange: (event) => setValue(event.target.value),
  };
};
const InvoiceItem = ({ onSubmit }) => {
  const quantity = useInputValue();
  const description = useInputValue("");
  const unitprice = useInputValue();
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(quantity.value, description.value, unitprice.value);
      }}
    >
      <div className="form-group">
        <input
          type="number"
          placeholder="Quantity"
          className="form-control"
          {...quantity}
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          placeholder="Description"
          className="form-control"
          {...description}
        />
      </div>
      <div className="form-group">
        <input
          type="number"
          placeholder="Unit price"
          className="form-control"
          {...unitprice}
        />
      </div>
      <div className="form-group">
        <button className="btn btn-block btn-primary">Add</button>
      </div>
    </form>
  );
};

export default InvoiceItem;
