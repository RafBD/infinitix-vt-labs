import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import SidebarLat from '../Sidebar/BarSide'
import { LogOutButton } from '../Logout/Logout';
import { SettingsButton } from '../SettingButton/SettingsButton';
import { Badge } from 'primereact/badge';
import './Topbar.css';

const Topbar = () => {
  const { user } = useAuth0();
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
      <div className="topbar">
        <SidebarLat/>
        <img src={user.picture} alt={user.name} onClick={toggleDropdown} className='user-img'/>
        {showDropdown && (
          <div className="dropdown-container">
            <div className="dropdown-content">
              <img src={user.picture} alt={user.name} onClick={toggleDropdown} className='imagen_usuario'/>
              <p>Hola, {user.name}</p>
              <hr className="mb-3 mx-3 border-top-1 border-none surface-border" />
              <div className="icons-container">
              <i className="pi pi-bell p-overlay-badge" style={{ fontSize: '1.5rem' }}>
                <Badge value="2"></Badge>
              </i>
              <i className="pi pi-calendar p-overlay-badge" style={{ fontSize: '1.5rem' }}>
                  <Badge value="5+" severity="danger"></Badge>
              </i>
              <i className="pi pi-envelope p-overlay-badge" style={{ fontSize: '1.5rem' }}>
                  <Badge severity="danger"></Badge>
              </i>

              </div>
              <div className='flex flex-col gap-2'>
                <LogOutButton/>
                <SettingsButton/>
              </div>
              <div className="mt-3 flex gap-2 text-[0.8rem] text-dark-tremor-background-subtle">
                <a href="https://www.google.com">
                  Política de Privacidad
                </a>
                <p>
                  |
                </p>
                <a href='https://www.google.com'>
                  Términos del Servicio
                </a>
              </div>
              
              {/* Agrega más información aquí */}
            </div>
          </div>
        )}
      </div>
  );
};

export default Topbar;