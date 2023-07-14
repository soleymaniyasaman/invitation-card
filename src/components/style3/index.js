import React, { useState } from 'react'
import { Carousel } from 'react-responsive-carousel'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import './style.css'
import Page1 from './Page1'
import Page2 from './Page2'

export default function ExmOne() {
    const customRenderItem = (item, props) => console.log("hello", item);
    return (
        <Carousel showThumbs={false} renderItem={customRenderItem}>
            <Page1 />
            <Page2 />
        </Carousel>
    )
}
