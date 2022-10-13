import React, { useEffect, useState } from 'react';
import './Nav.css';

function Nav() {
  const [show, setShow] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', transitionNavBar);
    return () => window.removeEventListener('scroll', transitionNavBar);
  }, []);

  return (
    <div className={`nav ${show && 'nav__black'}`}>
      <div className="nav__contents">
        <img
          className="nav__logo"
          src="https://images.ctfassets.net/4cd45et68cgf/7LrExJ6PAj6MSIPkDyCO86/542b1dfabbf3959908f69be546879952/Netflix-Brand-Logo.png?w=684&h=456"
          alt=""
        />
        <img
          className="nav__avatar"
          src="https://i.pinimg.com/originals/8d/ff/49/8dff49985d0d8afa53751d9ba8907aed.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default Nav;
