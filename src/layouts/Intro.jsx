import React from 'react';
import '../styles/layouts-styles/Intro.sass';

const Intro = () => {
    return (
        <div className="video-bg">
            <iframe 
            title="Promotion video" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            src="https://www.youtube.com/embed/0BVDjj8ixSU" 
            controls="0" 
            frameborder="0" 
            allowfullscreen="1">
                Promotion video
            </iframe>
        </div>
    );
}
 
export default Intro;