import React from 'react'
import Month from './Month/Month'


function CalendarBody(props) {
    let display = null;
    if (props.bodyType === 'MONTH') {
        display = <Month />;
    }
    return (
        <>
            {display}
        </>
    );
}

export default CalendarBody;