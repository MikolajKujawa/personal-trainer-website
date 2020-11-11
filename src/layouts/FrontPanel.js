import React from 'react';
import '../styles/FrontPanel.css'
import img from '../images/front-picture.png'

const FrontPanel = () => {
    return ( 
        <div className='FrontPanel'>
            <h4>Trenerka personalna</h4>
            <h1>Julia Gamelska</h1>
            <span>Zwycięzcy robią to, czego przegranym się nie chciało!</span>
            <button>Więcej</button>
            <img src={img} alt='FrontPicture'/>
        </div>
    );
}
 
export default FrontPanel;