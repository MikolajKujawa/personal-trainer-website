import React from 'react';
import '../styles/components-styles/Media.sass';

import facebook from '../images/facebook.png';
import instagram from '../images/instagram.png';
import youtube from '../images/youtube.png';

const Media = () => {
    return ( 
        <div className="mediabox">
            <a href="https://www.facebook.com/gold.fit.factory.julia/" target="blank"><img src={facebook} alt="facebook"/></a>
            <a href="https://www.instagram.com/gold_fit_factory_julia/" target="blank"><img src={instagram} alt="instagram"/></a>
            <a href="https://youtu.be/0BVDjj8ixSU" target="blank"><img src={youtube} alt="youtube"/></a>
        </div>
     );
}
 
export default Media;