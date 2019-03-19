import React from 'react'
import Styles from './CalendarHeader.module.css'

function CalendarHeader() {
    return (
        <div className={Styles.CalendarHeader}>
            <button className={Styles.Button}>
                DAY
            </button >
            <button className={Styles.Button}>
                WEEK
            </button >
            <button className={Styles.Button}>
                MONTH
            </button>
            <button className={Styles.Button}>
                YEAR
            </button>
        </div>
    );
}

export default CalendarHeader;