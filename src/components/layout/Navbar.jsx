import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Back } from "react-bootstrap-icons";
import { logout } from "../../actions/auth";
import Logo from "../../logo.png";

const Navbar = ({ auth: { isAuthenticated }, logout }) => {
  const authLinks = (
    <ul class="nav justify-content-center">
      <li class="nav-item">
        <Link class="nav-link text-white" to="/clients">
          Clients
        </Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link text-white" to="/Receipts">
          Receipts
        </Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link text-white" to="/invoices">
          Invoices
        </Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link text-white" to="/quotes">
          Quotes
        </Link>
      </li>
      <li className="nav-item">
        <a onClick={logout} href="#!" className="nav-link text-white">
          <Back />
          <span className="hide-sm">Logout</span>
        </a>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul class="nav justify-content-center">
      <li class="nav-item">
        <Link class="nav-link text-white" to="/donate">
          Buy me a coffee 🍵
        </Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link text-white" to="/register">
          Register
        </Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link text-white" to="/login">
          Login
        </Link>
      </li>
    </ul>
  );

  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <Link class="navbar-brand" to="/">
          <img src={Logo} alt="" className="logo" />
        </Link>
      </div>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        {isAuthenticated ? authLinks : guestLinks}
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
