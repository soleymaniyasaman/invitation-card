import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import Page1 from '../Page1';
import Page2 from '../Page2';
import Page3 from '../Page3';
import './Brochure.css';

const Brochure = () => {
    return (
        <div>
            <Carousel>
                <Page1 />
                <Page2 />
                <Page3 />
            </Carousel>
        </div>
    );
};

export default Brochure;