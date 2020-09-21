import React from "react";
import { Link } from "react-router-dom";
import Logo from '../../logodark.png'

const Header = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <Link class="navbar-brand" to="/account/dashboard">
          <img src={Logo} alt="" className="logo"/>
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav mr-auto"></ul>
          <span class="nav navbar-nav navbar-right">
            <Link class="nav-item nav-link" to="/account/dashboard">
              Dashboard
            </Link>
            <Link class="nav-item nav-link" to="/account/user">
              Account
            </Link>
            <Link class="nav-item nav-link" to="/login">
              Sign Out
            </Link>
          </span>
        </div>
      </nav>
    </>
  );
};

export { Header };
