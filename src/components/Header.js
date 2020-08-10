import React from 'react';
import logo from '../images/logo/logo_header.svg';

function Header(props) {
    return (
        <header className="header">
            <img className="header__logo" src={logo} alt="Логотип" />
        </header>
    )
}

export default Header;