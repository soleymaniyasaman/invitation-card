import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe, faL } from '@fortawesome/free-solid-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import './style.css'

export default function Page2() {
    const [poem, setPoem] = useState(true);
    const [pageLoad, setPageLoad] = useState(false);
    const description_header = "مفتخر هستیم در ";
    const description = " در سیزدهمین نمایشگاه بین المللی ایران پلاست که از تاریخ 31 شهریور الی 3 مهرماه سال 1402 در مح دائمی نمایشگاه بین المللی تهران برگزار می شود"
    const description_footer = "پذیرای حضور گرم شما باشیم"
    const province = "تهران"
    const city = "تهران"
    const fair = "بوستان گفت و گو"
    const saloon = "سالن اول"
    const booth = "غرفه چهار"
    return (
        <div className="posterSecondPage">
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
                    {poem ?
                        <div className='poem'>
                            <p>
                                مژده ای دل که مسیحا نفسی می آید که از انفاس خوشش بوی کسی می آید
                            </p>
                        </div>
                        : null}
                    <div className="textSecond-1">
                        <p>
                            {description_header}
                            {description}
                            {description_footer}
                        </p>
                    </div>
                    <div className='textSecond-2'>
                        <p>
                            محل برگزاری نمایشگاه : {province}{city}{fair}{saloon}{booth}
                        </p>
                    </div>
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
