import React from 'react'
import Month from './Month/Month'
import Year from './Year/Year'
import Styles from './CalendarBody.module.css'
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
                return (
                    <div className={Styles.monthContainer}>
                        <Month date={props.date} setGlobalDate={props.setGlobalDate} displayPicker={true} />
                    </div>
                );
            }
        case 'YEAR':
            {
                return <Year date={props.date} setGlobalDate={props.setGlobalDate} />;
            }
        default:
            {
                return null;
            }
    }
}