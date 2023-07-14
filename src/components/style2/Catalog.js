import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import PageOne from './pageOne';

const Catalog = () => {

    return (
        <Carousel>
            <PageOne />
            <PageOne />
        </Carousel>
    );
};

export default Catalog;
