import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Confetti from './confetti';
import '../styles/egg_animation.scss';

const egg = ['/egg/egg0.png', '/egg/egg1.png', '/egg/egg2.png', '/egg/egg3.png'];
const colors = ['#F1D46D', '#A8AB55', '#FCDF94', '#204C56', '#54858F'];

const EggAnimation = ({ onCrackComplete }) => {
    const [stage, setStage] = useState(0);
    const [backgroundColor, setBackgroundColor] = useState(colors[1]);
    const [showConfetti, setShowConfetti] = useState(false);
    const [showChicken, setShowChicken] = useState(false);
    const [showMessage, setShowMessage] = useState(false);
    const [fadeOut, setFadeOut] = useState(false);

    const handleClick = () => {
        const newColor = colors[Math.floor(Math.random() * colors.length)];
        setBackgroundColor(newColor);

        setTimeout(() => {
            if (stage < egg.length - 1) {
                setStage(stage + 1);
            }

            if (stage === egg.length - 1) {
                setShowConfetti(true);
                setShowChicken(true);

                // Step 1: Wait for chicken animation
                setTimeout(() => {
                    setShowMessage(true);

                    // Step 2: Wait for message to show, then start fade out
                    setTimeout(() => {
                        setFadeOut(true);

                        // Step 3: After fade, trigger screen transition
                        setTimeout(() => {
                            onCrackComplete();
                        }, 1000); // duration of fade
                    }, 5000); // message visible time
                }, 2000); // chicken animation duration
            }
        }, 50);
    };

    return (
        <motion.div
            className='egg-container'
            style={{ backgroundColor }}
            onClick={handleClick}
            initial={{ opacity: 1 }}
            animate={{ opacity: fadeOut ? 0 : 1 }}
            transition={{ duration: 1 }}
        >
            {showConfetti && <Confetti />}

            {!showChicken ? (
                <motion.img
                    src={egg[stage]}
                    alt='Egg cracking'
                    className='egg'
                    animate={stage < 3 ? { rotate: [0, -10, 10, 0] } : {}}
                    transition={{ duration: 0.5 }}
                />
            ) : (
                <motion.img
                    src='/egg/poshito.png'
                    alt='Chicken popping out'
                    className='chicken'
                    initial={{ scale: 0 }}
                    animate={{ scale: 2 }}
                    transition={{ duration: 2, ease: 'easeOut' }}
                />
            )}

            {showMessage && (
                <motion.div
                    className='message'
                    initial={{ y: 0, opacity: 0 }}
                    animate={{ y: -200, opacity: 1 }}
                    transition={{ duration: 2, ease: 'easeInOut' }}
                >
                    <h1>🎉 Happy Birthday Vanessa! 🎉</h1>
                    <h2>You're the hottest 24 year old!</h2>
                </motion.div>
            )}
        </motion.div>
    );
};

export default EggAnimation;
