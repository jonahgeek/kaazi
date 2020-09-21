import React from "react";
import { Create } from "../Create/Create";
import { Footer } from "../Footer/Footer";

const Aside = () => {
  return (
    <>
      <div className="col-md-4">
        <Create />
        <Footer />
      </div>
    </>
  );
};

export { Aside };
