import React from 'react';

const VideoPlayback = () => {
    return (
        <video className="video" width="100%" height="100%" autoPlay muted loop>
            <source src="http://asu-tech.norvision.com/videos/ASU-Innovation-Sizzle.mp4" type="video/mp4"/>
        </video>
    )
}

export default VideoPlayback