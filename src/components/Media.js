import React from 'react';
import '../styles/Media.css';

import facebook from '../images/facebook.png';
import instagram from '../images/instagram.png';
import youtube from '../images/youtube.png';

const Media = () => {
    return ( 
        <div className="mediabox">
            <a href="https://www.facebook.com/gold.fit.factory.julia/" target="blank"><img src={facebook} alt="facebook"/></a>
            <a href="https://www.instagram.com/gold_fit_factory_julia/" target="blank"><img src={instagram} alt="instagram"/></a>
            <a href="https://youtube.com" target="blank"><img src={youtube} alt="youtube"/></a>
        </div>
     );
}
 
export default Media;