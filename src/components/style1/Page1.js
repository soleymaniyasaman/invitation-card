import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import './Brochure/Brochure.css'

const Page1 = () => {
    return (
        <div className="page1">
            <h1 className="slogan">شعار شرکت ما</h1>
            <div className="image-container">
                <img className="product-image" src="./img/LG-first.jpeg" alt="محصول ۱" />
                <img className="product-image" src="./img/LG-first.jpeg" alt="محصول ۲" />
                <img className="product-image" src="./img/LG-first.jpeg" alt="محصول ۳" />
            </div>
            <div className="social-icons">
                <a href="https://www.instagram.com/yourcompany">
                    <FontAwesomeIcon icon={faInstagram} />

                </a>
                <a href="https://www.yourcompany.com">
                    <FontAwesomeIcon icon={faGlobe} />
                </a>
            </div>
        </div>
    );
};

export default Page1;
