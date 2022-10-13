import React from 'react';
import './LoginScreen.css';

function LoginScreen() {
  return (
    <div className="login-screen">
      <div className="login-screen__background">
        <img
          className="login-screen__logo"
          src="https://images.ctfassets.net/4cd45et68cgf/7LrExJ6PAj6MSIPkDyCO86/542b1dfabbf3959908f69be546879952/Netflix-Brand-Logo.png?w=684&h=456"
          alt=""
        />
        <button className="login-screen__button">Sign In</button>

        <div className='login-screen__gradient' />
      </div>

      <div className="login-screen__body">
        <>
        <h1>Unlimited movies, TV programmes and more.</h1>
        <h2>Watch anywhere. Cancel at any time.</h2>
        <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
        </>
      </div>
    </div>
  );
}

export default LoginScreen;
