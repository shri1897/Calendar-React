import React, { Component } from 'react';
import './CalendarManager.module.css'
import CalendarHeader from './Header/CalendarHeader'
import CalendarBody from './Body/CalendarBody'

class CalendarManager extends Component {

    state = {
        bodyType: 'MONTH',
        date: new Date()
    }

    changeBodyType = (bodyType) => {
        this.setState({ bodyType });
    }

    setGloablDate = (date) => {
        this.setState({ date });
    }

    render() {
        return (
            <>
                <CalendarHeader changeBodyType={this.changeBodyType} />
                <CalendarBody bodyType={this.state.bodyType} setGlobalDate={this.setGloablDate} date={this.state.date} />
            </>
        );
    }
}

export default CalendarManager;