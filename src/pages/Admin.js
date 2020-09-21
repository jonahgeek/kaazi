import React from "react";
import { Route, Switch } from "react-router-dom";
import routes from "../routes";
import { Header } from "../components";

const Admin = () => {
  return (
    <>
      <div className="container">
        <Header />
        <Switch>
          {routes.map((prop, key) => {
            console.log(prop.layout + prop.path);
            return (
              <Route
                path={prop.layout + prop.path}
                component={prop.page}
                key={key}
              />
            );
          })}
        </Switch>
      </div>
    </>
  );
};

export { Admin };
