import React from 'react'
import Month from './Month/Month'
import Year from './Year/Year'

function CalendarBody(props) {
    let display = renderBodyType(props);
    return (
        <>
            {display}
        </>
    );
}

export default CalendarBody;

function renderBodyType(props) {
    switch (props.bodyType) {
        case 'DAY':
            {
                return null;
            }
        case 'WEEK':
            {
                return null;
            }
        case 'MONTH':
            {
                return <Month />;
            }
        case 'YEAR':
            {
                return <Year />;
            }
        default:
            {
                return null;
            }
    }
}