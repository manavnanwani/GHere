import React, { Fragment, useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import { Link, NavLink, Redirect } from "react-router-dom";
import { logout } from "./actions/auth";
import { connect } from "react-redux";

const Navbar = ({ logout, isAuthenticated }) => {
  const [redirect, setRedirect] = useState(false);

  const logout_user = () => {
    logout();
    setRedirect(true);
  };

  const guestLinks = () => (
    <Fragment>
      <li className="nav-item">
        <NavLink
          activeClassName="active-link"
          className="nav-link text-uppercase"
          to="/about"
        >
          About
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          activeClassName="active-link"
          className="nav-link text-uppercase"
          to="/contact"
        >
          Contact
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          activeClassName="active-link"
          className="nav-link text-uppercase"
          to="/signup"
        >
          Sign Up
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          activeClassName="active-link"
          className="nav-link text-uppercase"
          to="/login"
        >
          Login
        </NavLink>
      </li>
    </Fragment>
  );

  const authLinks = () => (
    <Fragment>
      <li className="nav-item">
        <NavLink
          activeClassName="active-link"
          className="nav-link text-uppercase"
          to="/contact"
        >
          Contact
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          activeClassName="active-link"
          className="nav-link text-uppercase"
          to="/games"
        >
          Games
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          activeClassName="active-link"
          className="nav-link text-uppercase"
          to="/home"
          onClick={logout_user}
        >
          Logout
        </NavLink>
      </li>
    </Fragment>
  );

  return (
    <nav className="navbar navbar-expand-lg bg-transparent pt-3">
      <div className="container-fluid col-md-10 mx-auto">
        <NavLink className="GH-nav" exact to="/">
          <img
            src="https://assets.coingecko.com/coins/images/738/large/eos-eos-logo.png?1547034481"
            alt=""
            className="navbar-img"
          />
          Gamble<span className="secondary">Here</span>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
            {isAuthenticated ? authLinks() : guestLinks()}
          </ul>
        </div>
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { logout })(Navbar);
