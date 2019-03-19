import React, { Component } from 'react';
import './CalendarManager.module.css'
import CalendarHeader from './Header/CalendarHeader'
import CalendarBody from './Body/CalendarBody'

class CalendarManager extends Component {

    state = {
        bodyType: null
    }

    changeBodyType = (bodyType) => {
        this.setState({ bodyType });
    }

    render() {
        return (
            <>
                <CalendarHeader changeBodyType={this.changeBodyType} />
                <CalendarBody bodyType={this.state.bodyType} />
            </>
        );
    }
}

export default CalendarManager;