import React from "react";
import { ExclamationTriangle } from "react-bootstrap-icons";

const NotFound = () => {
  return (
    <>
      <h1 className="x-large text-primary">
        <ExclamationTriangle /> Page Not Found
      </h1>
      <p className="large">Sorry, this page does not exist</p>
    </>
  );
};

export default NotFound;
