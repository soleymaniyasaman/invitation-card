import React from 'react'

export default function MailButton() {
    return (
        <div className="letter-image" >
            <div className="animated-mail" >
                <div className="back-fold" ></div >
                <div className="letter" >
                    <div className="letter-border" ></div >
                    <div className="letter-title" ></div >
                    <div className="letter-context" >
                    </div >
                    <span className='text-bg-danger p-1 ms-5 font-semibold'>پاسخ شما به دعوت</span>
                    <div className="letter-stamp" >
                        <div className="letter-stamp-inner" ></div >
                    </div >
                </div >
                <div className="top-fold" ></div >
                <div className="body" ></div >
                <div className="left-fold" ></div >
            </div >
            {/* <div className="shadow"></div> */}
        </div >
    )
}
