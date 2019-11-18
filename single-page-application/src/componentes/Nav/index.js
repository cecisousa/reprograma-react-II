import React from 'react';
import Menu from './Menu'
import Logo from '../../imagens/RocketChat.png';
import './styles.css';

function Nav() {
    return (
        <nav className="navbar">
            <img
                src={Logo}
                alt="Logotipo do site Rocketchat"
                className="navbar-logo"
            />
            <Menu/>
        </nav>
    )
}

export default Nav;