import React, { useRef, useState } from 'react';
import '../styles/message.scss';

const Message = () => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const togglePlay = () => {
        const video = videoRef.current;
        if (!video) return;

        if (video.paused || video.ended) {
            video.play();
            setIsPlaying(true);
        } else {
            video.pause();
            setIsPlaying(false);
        }
    };

    return (
        <div className="message-video-section">
            <video
                ref={videoRef}
                className="message-controlled-video"
                src="/poshita_pics/vanessa_message.mp4"
                controls
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
            />
        </div>
    );
};

export default Message;
