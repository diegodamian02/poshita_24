import React, { useState } from "react";
import { motion } from 'framer-motion';
import EggAnimation from "./components/egg_animation";
import Navbar from "./components/navbar";
import Gallery from "./components/gallery";
import Message from "./components/message";
import './styles/index.scss';

function App() {
    const [cracked, setCracked] = useState(false);
    const [showGallery, setShowGallery] = useState(false);
    const [showMessage, setShowMessage] = useState(false);

    return (
        <div>
            {!cracked ? (
                <EggAnimation onCrackComplete={() => setCracked(true)} />
            ) : (
                <>
                    <Navbar
                        onGoHome={() => {
                            setShowGallery(false);
                            setShowMessage(false);
                        }}
                        onShowGallery={() => {
                            setShowGallery(true);
                            setShowMessage(false);
                        }}
                        onShowMessage={() => {
                            setShowMessage(true);
                            setShowGallery(false);
                        }}
                    />

                    {!showGallery && !showMessage && (
                        <div className="message-wrapper">
                            <motion.div
                                className="center-message"
                                initial={{ y: 0, opacity: 0 }}
                                animate={{ y: -80, opacity: 1 }}
                                transition={{ duration: 2, ease: 'easeOut', delay: 0.5 }}
                            >
                                <h1>🎉 Happy Birthday Vanessa! 🎉</h1>
                                <h2>You're the hottest 24 year old!</h2>
                            </motion.div>

                            <button className="side-button left" onClick={() => setShowGallery(true)}>📸 Gallery</button>
                            <button className="side-button right" onClick={() => setShowMessage(true)}>💌 Message</button>
                        </div>
                    )}

                    {showGallery && <Gallery />}
                    {showMessage && <Message />}
                </>
            )}
        </div>
    );
}

export default App;
