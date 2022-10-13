import React from 'react';
import './ProfileScreen.css';
import Nav from '../Nav';
import { selectUser } from '../features/userSlice';
import { useSelector } from 'react-redux';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';

function ProfileScreen() {
  const user = useSelector(selectUser);

  return (
    <div className="profile-screen">
      <Nav />
      <div className="profile-screen__body">
        <h1>Edit Profile</h1>
        <div className="profile-screen__info">
          <img
            src="https://i.pinimg.com/originals/8d/ff/49/8dff49985d0d8afa53751d9ba8907aed.png"
            alt=""
          />
          <div className="profile-screen__details">
            <h2>{user.email}</h2>
            <div className="profile-screen__plans">
              <button
                onClick={() => signOut(auth)}
                className="profile-screen__signout"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
