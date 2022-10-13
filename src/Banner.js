import React from 'react';
import './Banner.css';

function Banner() {
  return (
    <header
      className="banner"
      style={{
        backgroundSize: 'cover',
        backgroundImage: `url('https://i.pinimg.com/originals/2c/88/e3/2c88e3c60539a9a74b20d29150f07fb6.png')`,
        backgroundPosition: 'center center',
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">Movie Name</h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">This is a test description</h1>
      </div>

      <div className="banner--fadeBottom" />
    </header>
  );
}

export default Banner;
