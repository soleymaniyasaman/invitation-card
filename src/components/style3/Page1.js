import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import './style.css'

export default function Page1() {
    return (
        <div className="poster">
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

                <header>
                    <h3>دعوت نامه رسمی</h3>
                    <p>نمایشگاه بین المللی</p>
                </header>

                <main>
                    <svg id="text-1" viewBox="0 0 450 100">
                        <rect mask="url(#knockout-text-1)" />

                        <mask id="knockout-text-1">
                            <rect />
                            <text x="50%" y="80" textAnchor="middle">Busch</text>
                        </mask>
                    </svg>

                    <svg id="text-2" viewBox="0 0 900 100">
                        <rect mask="url(#knockout-text-2)" />

                        <mask id="knockout-text-2">
                            <rect />
                            <text x="50%" y="80" textAnchor="middle">اختراع شده برای زندگی بهتر</text>
                        </mask>
                    </svg>
                </main>

                <section id="date">
                    <div className="circle-item">۱۴۰۲</div>
                    <div className="circle-item"><p>تیر</p></div>
                    <div className="circle-item">۲۲</div>
                </section>

                <section id="talent">
                    <div className="dj-title">Featuring</div>
                    <ul className="dj-list">
                        <li>
                            <a href="https://www.instagram.com/yourcompany">
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                        </li>
                        <li>//</li>
                        <li>
                            <a href="https://www.yourcompany.com">
                                <FontAwesomeIcon icon={faGlobe} />
                            </a>
                        </li>
                        {/* <li>//</li>
                        <li>D-Jhey</li> */}
                    </ul>
                </section>

                <footer>
                    {/* <div className="tickets">
                        $25 Pre Sale Tickets / 18+ Ages / $30 at Door
                    </div> */}
                    <div className="venue">
                        <h3>غرفه شماره ۱۴</h3>
                        <p>خیابان مدرس, نمایشگاه بین المللی</p>
                        <p><small>www.clubsicontis.com</small></p>
                    </div>
                </footer>

            </div>
        </div>
    )
}
