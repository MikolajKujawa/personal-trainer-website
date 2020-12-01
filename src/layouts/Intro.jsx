import React from 'react';
import '../styles/layouts-styles/Intro.sass';

const Intro = () => {
    return (
        <div className="video-bg">
            <iframe title="promotion video" width="560" height="315" src="https://www.youtube.com/embed/0BVDjj8ixSU" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
    );
}
 
export default Intro;