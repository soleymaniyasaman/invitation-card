import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import './style.css'

export default function Page1({ indexCarousel, setIndexCarousel, style }) {

    const handleChangeSlide = (e) => {
        setIndexCarousel(3)
    }
    return (
        <div className={`surface ${style}-surface`}>
            {
                style ? style === "fancy" ?
                    <svg className='fancy-wave-top' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#4FD1C5" fillOpacity="1" d="M0,32L40,48C80,64,160,96,240,144C320,192,400,256,480,250.7C560,245,640,171,720,133.3C800,96,880,96,960,122.7C1040,149,1120,203,1200,224C1280,245,1360,235,1400,229.3L1440,224L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg>
                    :
                    null
                    :
                    null
            }
            <div className="lens-flare"></div>
            <div className="stripes">
                <div className="stripe-block str1">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className="stripe-block str2">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className="stripe-block str3">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            <div className="info">
                <main>
                    <div className={`w-100 d-flex ${style}-surface-wrapper`}>
                        {style === 'rhombus' ?
                            <>
                                <div className={`image-shape ${style} ${style}-first-pseudo`}>
                                    <div className={`${style}-pseudo-background`}>
                                    </div>
                                </div>
                                <div className={`image-shape ${style} ${style}-first-layer-pseudo`}>
                                    <div className={`${style}-layer-pseudo-background`}>
                                    </div>
                                </div>
                                <div className={`image-shape ${style} ${style}-first-small-layer-pseudo`}>
                                    <div className={`${style}-small-pseudo-background`}>
                                    </div>
                                </div>
                                <div className={`image-shape ${style} ${style}-first-smaller-layer-pseudo`}>
                                    <div className={`${style}-layer-pseudo-background`}>
                                    </div>
                                </div>
                                <div className={`image-shape ${style} ${style}-first-small-pseudo`}>
                                    <div className={`${style}-pseudo-background`}>
                                    </div>
                                </div>

                            </> : null}
                        <div className={`image-shape ${style} ${style}-first`}>
                            <div className={`image-shape-background ${style}-background`}>
                                <img src="/invitation-card/img/LG-second.jpeg" alt='' />
                            </div>
                        </div>
                        <div className={`image-shape ${style} ${style}-second `}>
                            <div className={`image-shape-background ${style}-background`}>
                                <img src="/invitation-card/img/LG-second.jpeg" alt='' />
                            </div>
                        </div>
                        <div className={`image-shape ${style} ${style}-third`}>
                            <div className={`image-shape-background ${style}-background`}>
                                <img src="/invitation-card/img/LG-second.jpeg" alt='' />
                            </div>
                        </div>
                        <div className={`image-shape ${style} ${style}-forth`}>
                            <div className={`image-shape-background ${style}-background`}>
                                <img src="/invitation-card/img/LG-second.jpeg" alt='' />
                            </div>
                        </div>
                    </div>
                    <svg id="text-main" className={`${style}-text-main jello-horizontal`} viewBox="0 0 450 100">
                        <rect mask="url(#knockout-text-main)" />

                        <mask id="knockout-text-main">
                            <rect />
                            <text x="50%" y="80" textAnchor="middle">Busch</text>
                        </mask>
                    </svg>

                    <svg id="text-" className={`${style}-banner-main`} viewBox="0 0 900 100">
                        <rect mask="url(#knockout-text)" />

                        <mask id="knockout-text">
                            <rect />
                            <text x="50%" y="80" textAnchor="middle">اختراع شده برای زندگی بهتر</text>
                        </mask>
                    </svg>
                </main>

                <section id="talent">
                    <ul className="dj-list">
                        <li>
                            <a href="https://www.instagram.com/yourcompany">
                                <FontAwesomeIcon color='#c4e5f6' icon={faInstagram} />
                            </a>
                        </li>
                        <li style={{ color: "rgba(0,255,203,.64)" }}>//</li>
                        <li>
                            <a href="https://www.yourcompany.com">
                                <FontAwesomeIcon color='#c4e5f6' icon={faGlobe} />
                            </a>
                        </li>
                    </ul>
                </section>

                <footer>
                    <button className='about-us' onClick={handleChangeSlide}>
                        <img alt='' src="/invitation-card/img/logo.jpeg" className='logo' />
                        درباره ما
                    </button>
                </footer>
            </div >
        </div >
    )
}
