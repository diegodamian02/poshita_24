import React, { useState } from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import '../styles/gallery.scss';

const imagePaths = [
    '/poshita_pics/v1.jpg',
    '/poshita_pics/v2.jpg',
    '/poshita_pics/v3.jpg',
    '/poshita_pics/v4.jpg',
    '/poshita_pics/v5.jpg',
    '/poshita_pics/v&d1.jpg',
    '/poshita_pics/v&d2.jpg',
    '/poshita_pics/v&d3.JPG',
    '/poshita_pics/d1.jpg',
    '/poshita_pics/v&d4.jpg',
    '/poshita_pics/d2.jpeg',
    '/poshita_pics/d3.jpeg',
    '/poshita_pics/d4.jpeg',
    '/poshita_pics/d5.jpeg',
    '/poshita_pics/v&d5.jpeg',
    '/poshita_pics/v&d6.jpeg',
    '/poshita_pics/v&d7.jpeg',
    '/poshita_pics/v&d8.jpeg',
    '/poshita_pics/v&d9.jpeg',
    '/poshita_pics/v6.jpeg',
    '/poshita_pics/v7.jpeg',
    '/poshita_pics/v8.jpeg',
    '/poshita_pics/v9.jpeg',
];

const galleryItems = imagePaths.map((src) => ({
    original: src,
    thumbnail: src,
}));

const Gallery = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [startIndex, setStartIndex] = useState(0);

    const openGallery = (index) => {
        setStartIndex(index);
        setIsOpen(true);
    };

    return (
        <div className="gallery-container">
            <h1>📸 Our Memories</h1>

            {!isOpen ? (
                <div className="thumbnail-grid">
                    {imagePaths.map((src, idx) => (
                        <img
                            key={idx}
                            src={src}
                            alt={`memory-${idx}`}
                            onClick={() => openGallery(idx)}
                            className="thumbnail"
                        />
                    ))}
                </div>
            ) : (
                <div className="fullscreen-gallery">
                    <ImageGallery
                        items={galleryItems}
                        startIndex={startIndex}
                        showFullscreenButton={true}
                        showPlayButton={false}
                        onSlide={(index) => setStartIndex(index)}
                        onScreenChange={(full) => !full && setIsOpen(false)}
                    />
                    <button className="close-btn" onClick={() => setIsOpen(false)}>✖ Close</button>
                </div>
            )}
        </div>
    );
};

export default Gallery;
