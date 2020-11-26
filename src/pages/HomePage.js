import React from 'react';
import {NavLink} from 'react-router-dom';

import '../styles/pages-styles/HomePage.css'
import frontImage from '../images/Front-image.png';

const HomePage = () => {
    return ( 
        <div className='FrontPanel'>
            <h4>Trenerka personalna</h4>
            <h1>Julia Gamelska</h1>
            <span>Zwycięzcy robią to, czego przegranym się nie chciało!</span>
            <button>
                <NavLink to='/omnie'>Więcej</NavLink>    
            </button>
            <img src={frontImage} alt="Frontimage"/>
        </div>
    );
}
 
export default HomePage;