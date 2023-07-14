import React, { useEffect, useMemo, useState } from 'react';
import './style.css'
import { Datepicker } from '@ijavad805/react-datepicker';
import DatePicker from "react-datepicker";
// import TimePicker from "@ashwinthomas/react-time-picker-dropdown";

const SurveyForm = () => {
    const [isAttending, setIsAttending] = useState(false);
    const [time, setTime] = useState('');
    const [day, setDay] = useState('');
    const [startDate, setStartDate] = useState(new Date());
    const [isSubscribed, setIsSubscribed] = useState(false);

    const flapText = document.querySelector('#flap');

    const handleAttendingChange = (e) => {
        setIsAttending(e.target.value === 'yes' ? true : false);
        setIsSubscribed(false);
        flapText.children[0].textContent = e.target.value === "no" ? "خیر" : "بله"
    };
    // const handleTimeChange = (e) => {
    //     console.log("kkjnk");
    //     setTime(e);
    // };

    const handleDayChange = (e) => {
        setDay(e);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // انجام عملیات مربوط به ثبت نظرسنجی

        // پاک کردن مقادیر فرم
        setIsAttending(false);
        setTime('');
        setDay('');
    };
    const handleChange = event => {
        if (event.target.checked) {
            console.log('✅ Checkbox is checked');
        } else {
            console.log('⛔️ Checkbox is NOT checked');
        }
        setIsSubscribed(current => !current);
    };


    return (
        <div >
            <form onSubmit={handleSubmit}>
                <span className='invitation-span'>
                    پاسخ شما به دعوت ما
                </span>
                <div className='form-container'>
                    <div className='toggle'>
                        <input type="radio" id="choice1" name="attending" value="yes" onChange={handleAttendingChange} />
                        <label htmlFor="choice1">
                            بله
                        </label>
                        <input type="radio" id="choice2" name="attending" value="no" onChange={handleAttendingChange} />
                        <label htmlFor="choice2">
                            خیر
                        </label>
                        <div id="flap"><span className="content">خیر</span></div>
                    </div>
                </div>
                {isAttending && (
                    <label>
                        آیا میخواهید روز و ساعت حضورتان را مشخص کنید؟
                        <input
                            type="checkbox"
                            value={isSubscribed}
                            onChange={handleChange}
                            id="subscribe"
                            name="subscribe"
                            className='ml-1'
                        />
                    </label>

                )}
                {isAttending && isSubscribed && (
                    <div>
                        <label>
                            تاریخ حضور
                            <br />
                            <Datepicker
                                lang={'fa'}
                                input={<input className='date-picker my-1' placeholder="انتخاب روز" />}
                                onChange={(val) => {
                                    handleDayChange(val.format())
                                    console.log(val.format());
                                }}
                            />
                        </label>
                        <br />
                        <label>
                            ساعت حضور در غرفه
                            <br />
                            <DatePicker
                                selected={startDate}
                                onChange={(date) => setStartDate(date)}
                                customInput={<input className='time-picker my-1' />}
                                showTimeSelect
                                showTimeSelectOnly
                                timeIntervals={60}
                                timeCaption="Time"
                                dateFormat="h:mm aa"
                            />
                        </label>
                    </div>
                )}
                <button type="submit" className='bg-white font-semibold my-2 py-1 rounded-pill w-2/4 shadow-md'>ثبت</button>
            </form>

        </div>
    );
};

export default SurveyForm;
