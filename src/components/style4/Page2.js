import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe, faL } from '@fortawesome/free-solid-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { ProfileVec } from "../../../public/img/profile_vec.jpeg"
import './style.css'
import MailButton from './mailButton'

export default function Page2({ style, indexCarousel, setIndexCarousel }) {
    const [poem, setPoem] = useState(true);
    const [pageLoad, setPageLoad] = useState(false);
    const title = "دعوت نامه رسمی"
    const entitled = "بیست وسومین نمایشگاه بین المللی لوازم خانگی"
    const description_header = "مفتخر هستیم در ";
    const description = " در سیزدهمین نمایشگاه بین المللی ایران پلاست که از تاریخ 31 شهریور الی 3 مهرماه سال 1402 در مح دائمی نمایشگاه بین المللی تهران برگزار می شود"
    const description_footer = "پذیرای حضور گرم شما باشیم"
    const province = "تهران"
    const city = "تهران"
    const fair = "بوستان گفت و گو"
    const saloon = "سالن اول"
    const booth = "غرفه چهار"
    const invitation_date = "۱۴۰۱/۰۴/۲۰"
    const CEO_name = "علی رحمان سلیمانی زاده"
    const CEO_position = "مدیر عامل"
    const company_name = "شرکت کاسپین نمایندگی بوش ایران"
    return (
        <div className={`secondSlide ${style}-secondSlide`}>
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
                <span className={`invitation-date ${style}-invitation-date`}>تاریخ دعوت : {invitation_date}</span>
                <header>
                    <h3 className={`${style}-h3`}>{title}</h3>
                    <p onClick={() => setIndexCarousel(3)} className={`${style}-p`}>{entitled}</p>
                </header>

                <main>
                    {poem ?
                        <div className={`${style}-poem poem`}>
                            <p>
                                مژده ای دل که مسیحا نفسی می آید که از انفاس خوشش بوی کسی می آید
                            </p>
                        </div>
                        : null}
                    <div className={`${style}-description description`}>
                        <p>
                            {description_header}
                            {description}
                            {description_footer}
                        </p>
                    </div>
                    {/* <div className='textSecond-2'>
                        <p>
                            محل برگزاری نمایشگاه : {province}{city}{fair}{saloon}{booth}
                        </p>
                    </div> */}
                    <div className={`align-items-center d-flex justify-content-center py-1 ${style}-profile-section`}>
                        <div className='m-2'>
                            <p className='m-0'>{CEO_name}</p>
                            <p className='m-0'>{CEO_position}</p>
                            <p className='m-0'>{company_name}</p>
                        </div>
                        <img src={ProfileVec} alt='' className='profile-vec m-2' />
                    </div>
                </main>


                <div className='footer'>
                    <button onClick={() => setIndexCarousel(2)}>
                        <MailButton />

                    </button>
                    <div className='m-auto p-4'>
                        <button className="button-51" onClick={() => setIndexCarousel(2)} >نقشه, موقعیت و مسیریابی غرفه ما</button>
                    </div>
                </div>

            </div>
        </div>
    )
}
