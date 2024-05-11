import React, { useState } from 'react';
import './Login.css'

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const handleSignUpClick = () => {
    setIsSignUp(true);
  };

  const handleSignInClick = () => {
    setIsSignUp(false);
  };

  return (
    <div className={`container ${isSignUp ? 'right-panel-active' : ''}`} id="container-login">
      <div>
        <div className="form-container sign-up-container">
          <form action="#">
            <h1>New User</h1>
            <input type="email" placeholder="Email" id="email" />
            <span id="error-email"></span>
            <input type="password" placeholder="Password" id="password" />
            <input type="password" placeholder="Cofirm-Password" id="confirm-password" />
            <span id="error-password"></span>
            <button id="register">Register User</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form action="#">
            <h1>Sign In</h1>
            <input type="email" placeholder="Email" id="login-email" />
            <span id="login-error-email"></span>
            <input type="password" placeholder="Password" id="login-password" />
            <span id="login-error-password"></span>
            <button id="sign-in">Sign in</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>To keep connected with us please login with your personal info</p>
              <button className="ghost" onClick={handleSignInClick}>Sign In</button> 
            </div>
            <div className="overlay-panel overlay-right">
              <h1>New User!</h1>
              <p>Start your journey with us</p>
              <button className="ghost" onClick={handleSignUpClick}>Register Now </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
