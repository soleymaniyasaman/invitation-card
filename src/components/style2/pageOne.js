import React, { useEffect, useRef, useState } from 'react'
import './Catalog.css';

export default function PageOne() {
    const catalogRef = useRef(null);
    const [imagesLoaded, setImagesLoaded] = useState(false);

    useEffect(() => {
        const catalogElement = catalogRef.current;
        const images = catalogElement.querySelectorAll('.catalog-image');

        const handleTransitionEnd = () => {
            setImagesLoaded(true);
        };

        images.forEach((image) => {
            image.addEventListener('transitionend', handleTransitionEnd);
            const styles = ['image-enter-one', 'image-enter-two', 'image-enter-three', 'image-enter-four'];
            const randomIndex = Math.floor(Math.random() * styles.length);
            const randomStyle = styles[randomIndex];

            image.classList.add('image-enter', randomStyle);

        });

        return () => {
            images.forEach((image) => {
                image.removeEventListener('transitionend', handleTransitionEnd);
            });
        };
    }, []);

    return (
        <div className="catalog-container" ref={catalogRef}>
            {/* <div className="catalog-container"> */}
            <div className="image-container">
                <div className="diamond-frame">
                    <img
                        src="./img/LG-first.jpeg"
                        alt="Image1"
                        className={`w-2/4 catalog-image ${imagesLoaded ? 'image-enter-done' : ''}`}
                    />
                </div>
            </div>
            <div className="image-container">
                <div className="diamond-frame">
                    <img
                        src="./img/LG-second.jpeg"
                        alt="Image2"
                        className={`w-2/4 catalog-image ${imagesLoaded ? 'image-enter-done' : ''}`}
                    />
                </div>
            </div >
            <div className="image-container">
                <div className="diamond-frame">
                    <img
                        src="./img/LG-third.jpeg"
                        alt="Image3"
                        className={`w-2/4 catalog-image ${imagesLoaded ? 'image-enter-done' : ''}`}
                    />
                </div>
            </div >

        </div >
        // </div>
    )
}
