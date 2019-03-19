import React from 'react'
import Styles from './CalendarHeader.module.css'

function CalendarHeader(props) {
    return (
        <div className={Styles.calendarHeader}>
            <button className={Styles.button} onClick={() => props.changeBodyType('DAY')}>
                DAY
            </button >
            <button className={Styles.button} onClick={() => props.changeBodyType('WEEK')}>
                WEEK
            </button >
            <button className={Styles.button} onClick={() => props.changeBodyType('MONTH')}>
                MONTH
            </button>
            <button className={Styles.button} onClick={() => props.changeBodyType('YEAR')}>
                YEAR
            </button>
        </div>
    );
}

export default CalendarHeader;