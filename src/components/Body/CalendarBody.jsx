import React from 'react'
import BodyMonth from './BodyMonth'


function CalendarBody(props) {
    let display = null;
    if (props.bodyType === 'MONTH') {
        display = <BodyMonth />;
    }
    return (
        <>
            {display}
        </>
    );
}

export default CalendarBody;