import React from 'react';
import '../styles/layouts-styles/Intro.sass';

const Intro = () => {
    return (
        <div className="video-bg">
            <iframe title="promotion video" width="560" height="315" src="https://www.youtube.com/embed/0BVDjj8ixSU?modestbranding=1&autoplay=1&controls=0&loop=1&playlist=0BVDjj8ixSU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    );
}
 
export default Intro;