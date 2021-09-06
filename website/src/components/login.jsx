import React from 'react';

const Login = () => {
    return (
        <div className="login">
    
        <div className="login-signup l-attop" id="login">
          <div className="login-signup-title">
            LOG IN
          </div>
          <div className="login-signup-content">
            <div className="input-name">
              <h2>Username</h2>
            </div>
            <input type="text" name="username" className="field-input" />
            <div className="input-name input-margin">
              <h2>Password</h2>
            </div>
            <input type="text" name="password" className="field-input" />
            <div className="input-r">
              <div className="check-input">
                <input type="checkbox" id="remember-me-2" name="rememberme"  className="checkme" />
                <label className="remmeberme-blue" htmlFor="remember-me-2" />
              </div>
              <div className="rememberme"><label htmlFor="remember-me-2">Remember Me</label></div>
            </div>
            <button className="submit-btn">
              Enter
            </button>
            <div className="forgot-pass">
              <a href="#">Forgot Password?</a>
            </div>
          </div>
        </div>
        <div className="login-signup s-atbottom" id="signup">
          <div className="login-signup-title">
            SIGN UP
          </div>
          <div className="login-signup-content">
            <div className="input-name">
              <h2>Username</h2>
            </div>
            <input type="text" name="username"  className="field-input" />
            <div className="input-name input-margin">
              <h2>E-Mail</h2>
            </div>
            <input type="text" name="email"  className="field-input" />
            <div className="input-name input-margin">
              <h2>Password</h2>
            </div>
            <input type="text" name="password"  className="field-input" />
            <button className="submit-btn">
              Enter
            </button>
          </div>
        </div>
      </div>

        );
  

 
    }
    export default Login;