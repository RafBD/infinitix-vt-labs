import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { LogOutButton } from '../Logout/Logout';
import BarSide from '../Sidebar/BarSide';

import './Topbar.css';

const Topbar = () => {
  const { user } = useAuth0();

  return (
    <div className="topbar">
      <BarSide />
      <LogOutButton/>
      <span className='saludo'>Hola, {user.name}</span>
      <img src={user.picture} alt={user.name} />
    </div>
  );
};

export default Topbar;