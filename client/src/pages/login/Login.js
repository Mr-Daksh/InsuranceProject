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
          <form className='form' action="#">
            <h1 className='h1'>Request Demo</h1>
            <input className='input' type="email" placeholder="Full Name" id="email" />
            <span className='span' id="error-email"></span>
            <input className='input' type="password" placeholder="Number" id="password" />
            <span className='span' id="error-password"></span>
            <button className='button' id="register">Request Demo</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form className='form' action="#">
            <h1 className='h1'>Sign In</h1>
            <input className='input' type="email" placeholder="Email" id="login-email" />
            <span className='span' id="login-error-email"></span>
            <input className='input' type="password" placeholder="Password" id="login-password" />
            <span className='span' id="login-error-password"></span>
            <button className='button' id="sign-in">Sign in</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1 className='h1'>Welcome Back!</h1>
              <p className='p'>To keep connected with us please login with your personal info</p>
              <button className="ghost button" onClick={handleSignInClick}>Sign In</button> 
            </div>
            <div className="overlay-panel overlay-right">
              <h1 className='h1'>Hello!</h1>
              <p className='p'>Start your journey with us</p>
              <button className="ghost button" onClick={handleSignUpClick}>Request Demo</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
