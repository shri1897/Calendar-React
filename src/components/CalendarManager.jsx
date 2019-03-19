import React from 'react';
import Styles from './CalendarManager.module.css'
import CalendarHeader from './Header/CalendarHeader'
import CalendarBody from './Body/CalendarBody'

function CalendarManager() {
    return (
        <>
            <CalendarHeader />
            <CalendarBody />
        </>
    );
}

export default CalendarManager;