import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';

export default function Sample() {
    const [indexCarousel, setIndexCarousel] = useState(0);
    const [startAnimation, setStartAnimation] = useState(false);
    const [style, setStyle] = useState(["fancy", "rhombus", "bevel"]);
    const handleSelect = (selectedIndex, e) => {
        setIndexCarousel(selectedIndex);
        setStartAnimation(true)
        console.log(indexCarousel);
    };

    return (
        <Carousel activeIndex={indexCarousel} onSelect={handleSelect} interval={null}>
            <Carousel.Item>
                <Page1
                    indexCarousel={indexCarousel}
                    setIndexCarousel={setIndexCarousel}
                    style={style[0]} />
            </Carousel.Item>
            <Carousel.Item>
                <Page2
                    indexCarousel={indexCarousel}
                    setIndexCarousel={setIndexCarousel}
                    startAnimation={startAnimation}
                    setStartAnimation={setStartAnimation}
                    style={style[0]} />
            </Carousel.Item>
            <Carousel.Item>
                <Page3 style={style[0]} />
            </Carousel.Item>
            <Carousel.Item>
                <Page4 style={style[0]} />
            </Carousel.Item>
        </Carousel>
    );
}

