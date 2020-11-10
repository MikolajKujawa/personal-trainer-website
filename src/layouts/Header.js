import React from 'react';
import '../styles/Header.css'

import logo from '../images/logo-removebg-preview.png'
import Navigation from '../components/Navigation'

const Header = () => {
    return ( 
        <div class='header'>
            <img src={logo} alt='logo' />
            <Navigation/>
        </div>            
     );
}
 
export default Header;