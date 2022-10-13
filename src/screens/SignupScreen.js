import React from 'react';
import './SignupScreen.css';

function SignupScreen() {
  return (
    <div className="signup-screen">
      <form>
        <h1>Sign In</h1>
        <input placeholder="Email" type="email" />
        <input placeholder="Password" type="password" />
        <button type="submit">Sign In</button>
        <h4>
          <span className="signup-screen__gray">New to Netflix? </span>
          <span className="signup-screen__link">Sign up now.</span>
        </h4>
      </form>
    </div>
  );
}

export default SignupScreen;
