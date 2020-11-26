import React from 'react';
import '../styles/layouts-styles/Header.css'

import logo from '../images/logo-removebg-preview.png'
import Navigation from '../components/Navigation'

const Header = () => {
    return ( 
        <div className='header'>
            <img src={logo} alt='logo' />
            <Navigation/>
        </div>            
     );
}
 
export default Header;