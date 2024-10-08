import React, { useState } from 'react';
import './LoginScreen.css';
import SignupScreen from './SignupScreen';

function LoginScreen() {
  const [signIn, setSignIn] = useState(false);

  return (
    <div className="login-screen">
      <div className="login-screen__background">
        <img
          className="login-screen__logo"
          src="https://images.ctfassets.net/4cd45et68cgf/7LrExJ6PAj6MSIPkDyCO86/542b1dfabbf3959908f69be546879952/Netflix-Brand-Logo.png?w=684&h=456"
          alt=""
        />
        <button
          onClick={() => setSignIn(true)}
          className="login-screen__button"
        >
          Sign In
        </button>

        <div className="login-screen__gradient" />
      </div>

      <div className="login-screen__body">
        {signIn ? (
          <SignupScreen />
        ) : (
          <>
            <h1>Unlimited movies, TV programmes and more.</h1>
            <h2>Watch anywhere. Cancel at any time.</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>
            <div className="login-screen__input">
              <form>
                <input type="email" placeholder="Email Address" />
                <button
                  onClick={() => setSignIn(true)}
                  className="login-screen__get-started"
                >
                  GET STARTED
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default LoginScreen;
