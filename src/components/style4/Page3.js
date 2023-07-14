import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe, faL } from '@fortawesome/free-solid-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import './style.css'
import MailButton from './mailButton'
import SurveyForm from './surveyForm'
import Map from './map'

export default function Page3({ style, indexCarousel, setIndexCarousel }) {
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
                <main>
                    <div className={`${style}-exhibition-info exhibition-info mx-2 mt-2 p-2`}>
                        <p>عنوان نمایشگاه : {entitled}</p>
                        <p>
                            محل برگزاری نمایشگاه : {province} {city} {fair} {saloon} {booth}
                        </p>
                        <p>
                            تاریخ برگزاری نمایشگاه
                        </p>

                        <section id="date">
                            <div className="circle-item">۱۴۰۲</div>
                            <div className="circle-item"><p>تیر</p></div>
                            <div className="circle-item">۲۲</div>
                        </section>


                    </div>
                    <div className='d-flex w-100 my-3 px-2'>
                        <div className={`align-items-center d-flex justify-content-center py-1 w-50 mx-auto rounded-pill ${style}-invitation-section`}>
                            <SurveyForm />
                        </div>
                        <div className={`align-items-end d-flex flex-column px-4 w-50 mx-1 ${style}-user-request-section`}>
                            <label htmlFor='user-request' className='user-request-label'>شما میتوانید درخواست خود به ما بگویید</label>
                            <textarea id='user-request' className='border shadow-md w-100 pt-3 pe-2 text-dark rounded-pill' rows={3} dir='rtl' placeholder='ارسال کاتالوگ و اطلاعات, استعلام از شرکت و ...' />
                        </div>
                    </div>
                </main>


                <div className='footer'>
                    <div className={`shadow-md ${style}-map-wrapper`}>
                        <Map />
                    </div>
                </div>

            </div>
        </div>
    )
}
