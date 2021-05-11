import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { signup } from "./actions/auth";
import Navbar from "./Navbar";
import axios from "axios";

const SignUp = ({ signup, isAuthenticated }) => {
  const [accountCreated, setAccountCreated] = useState(false);
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    re_password: "",
  });

  const { first_name, last_name, email, password, re_password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    if (password === re_password) {
      signup(first_name, last_name, email, password, re_password);
      setAccountCreated(true);
    }
  };

  if (isAuthenticated) {
    return <Redirect to="/games" />;
  }
  if (accountCreated) {
    return <Redirect to="/login" />;
  }

  return (
    <div className="sign-up-main mx-auto">
      <h2 className="text-center mb-5 sign-up-text">Sign Up</h2>
      <form onSubmit={(e) => onSubmit(e)}>
        <div class="mb-3 row">
          <div className="col-lg-5 col-md-12 mr-auto">
            <label class="form-label">First Name</label>
            <input
              type="text"
              class="form-control"
              placeholder="Enter First Name"
              name="first_name"
              value={first_name}
              onChange={(e) => onChange(e)}
              required
              autoComplete="off"
            />
          </div>
          <div className="col-lg-6 col-md-12 ml-auto">
            <label class="form-label">Last Name</label>
            <input
              type="text"
              class="form-control"
              placeholder="Enter Last Name"
              name="last_name"
              value={last_name}
              onChange={(e) => onChange(e)}
              required
              autoComplete="off"
            />
          </div>
        </div>
        <div class="mb-3">
          <label class="form-label">Email address</label>
          <input
            type="email"
            class="form-control"
            placeholder="Enter Email"
            name="email"
            value={email}
            onChange={(e) => onChange(e)}
            required
            autoComplete="off"
          />
        </div>
        <div class="mb-3">
          <label class="form-label">Password</label>
          <input
            type="password"
            class="form-control"
            placeholder="Enter Password"
            name="password"
            value={password}
            onChange={(e) => onChange(e)}
            required
            autoComplete="off"
          />
        </div>
        <div class="mb-3">
          <label class="form-label">Re-Enter Password</label>
          <input
            type="password"
            class="form-control"
            placeholder="Confirm Password"
            name="re_password"
            value={re_password}
            onChange={(e) => onChange(e)}
            required
            autoComplete="off"
          />
        </div>
        <Button
          className="mt-4"
          variant="contained"
          color="primary"
          type="submit"
        >
          SignUp
        </Button>
      </form>
      <p className="mt-3">
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { signup })(SignUp);
