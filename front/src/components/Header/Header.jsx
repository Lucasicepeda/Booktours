import React, { useEffect, useState } from 'react';
import './header.css';
import { Link } from "react-router-dom";
import { current } from '../../helpers/current.js';

function Header() {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const token = localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.reload();
  }; 

  const [avatar, setAvatar] = useState({ a: '', b: '' });
  
  useEffect(() => {
    const fetchData = async () => {
      const data = await current();
      const avatar = {
        a: data.data.name.charAt(0).toUpperCase(),
        b: data.data.lastName.charAt(0).toUpperCase(),
        role: data.data.role
      };
      setAvatar(avatar);
    };
    token && fetchData();
  }, [token]);

  return (
    <header>
      <div className='divNav'>
        <a href="/"> {/* Establece la URL de tu página principal */}
          <img src='./src/assets/logo.png' alt='logo' />
        </a>
        <span>Viví experiencias inolvidables</span>
      </div>

      {token && <div className='avatar'><Link to="/dataUser">{avatar.a} {avatar.b}</Link></div>}

      <div className={` divButtons ${menuVisible ? 'showMenu' : ''}`}>

        {!token && <button className='buttonOn' id="createAccountButton"><Link to="/Registro">Crear cuenta</Link></button>}
        
        {
          avatar.role === 'user' || !avatar.role ? "" :
          <button className='buttonOn green'><Link to="/administracion">Panel</Link></button>
        }

        <button id="loginButton" className={`divButtons ${token ? 'buttonOff' : 'buttonOn'}`}>
          {token ?
            (<Link onClick={handleLogout}>Cerrar Sesión</Link>) :
            (<Link to="/login">Iniciar Sesión</Link>)}
        </button>
      </div>

      <button className="menuButton" onClick={toggleMenu}>
        ☰
      </button>
    </header>
  );
};

export default Header;