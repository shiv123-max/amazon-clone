import React from "react";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./SignIn.css";
import { auth } from "./firebase";

const SignIn = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(email,password)
    .then(auth => {
      history.push('/')
    })
    .catch(err => (err.message))
  };

  const register = (e) => {
    e.preventDefault();
    auth.createUserWithEmailAndPassword(email, password)
    .then((auth) => {
      //successfully created a new user with email and password
      if (auth) {
        history.push('/');
      }
    })
    .catch(err => alert(err.message))

  };

  return (
    <div className="signin">
      <Link to="/">
        <img
          className="signin__logo"
          src="http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG"
          alt="logo"
        />
      </Link>

      <div className="signin__container">
        <h1>Sign-In</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            onClick={signIn}
            className="signin__loginButton"
          >
            Sign In
          </button>
        </form>

        <p>
          By continuing, you agree to Amazon's Conditions of Use and Privacy
          Notice.
        </p>
        <button
          type="submit"
          onClick={register}
          className="signin__registerButton"
        >
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
};

export default SignIn;
