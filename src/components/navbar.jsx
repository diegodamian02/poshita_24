import React from 'react';
import '../styles/navbar.scss';

const Navbar = ({ onGoHome, onShowGallery, onShowMessage }) => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">Poshita 24 BDAY (she rocks)</div>
            <div className="navbar-links">
                <button onClick={onGoHome}>Home</button>
                <button onClick={onShowGallery}>Gallery</button>
                <button onClick={onShowMessage}>Message</button>
            </div>
        </nav>
    );
};

export default Navbar;
