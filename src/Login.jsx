import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "./actions/auth";
import axios from "axios";
import Navbar from "./Navbar";

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  if (isAuthenticated) {
    return <Redirect to="/games" />;
  }

  return (
    <div className="login-main mx-auto">
      <h2 className="text-center mb-5 login-text">Login</h2>
      <form onSubmit={(e) => onSubmit(e)}>
        <div class="mb-3">
          <label class="form-label">Email</label>
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
            minLength="8"
            required
          />
        </div>
        {/* <Link className="login-button" to='/games'> */}
        <Button
          className="mt-4"
          type="submit"
          variant="contained"
          color="primary"
        >
          Login
        </Button>
        {/* </Link> */}
      </form>
      <p className="mt-3">
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </p>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
