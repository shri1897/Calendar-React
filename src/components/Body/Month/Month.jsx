import React from 'react'
import Styles from './Month.module.css'
import Month from '../../../helper/Month'

class BodyMonth extends React.Component {
    state = {
        date: new Date(),
        displayPicker: false
    }

    componentDidMount() {
        this.setState({ date: this.props.date, displayPicker: this.props.displayPicker });
    }

    componentDidUpdate() {
        if (this.state.date.getFullYear() !== this.props.date.getFullYear()) {
            this.setState({ date: this.props.date, displayPicker: this.props.displayPicker });
        }
    }

    changeMonth(actionType) {
        switch (actionType) {
            case 'PREVIOUS':
                {
                    let date = new Date(this.state.date);
                    date.setMonth(this.state.date.getMonth() - 1);
                    this.props.setGlobalDate(date);
                    this.setState({ date });
                    break;
                }
            case 'NOW':
                {
                    this.props.setGlobalDate(new Date());
                    this.setState({ date: new Date() });
                    break;
                }
            case 'NEXT':
                {
                    let date = new Date(this.state.date);
                    date.setMonth(this.state.date.getMonth() + 1);
                    this.props.setGlobalDate(date);
                    this.setState({ date });
                    break;
                }
            default:
                {
                    throw new Error('Invalid Action Type');
                }
        }
    }

    render() {
        let boxes = [];
        let numberOfDays = Month.getNumberOfDays(this.state.date);
        let firstDayOfMonth = Month.getfirstDayOfMonth(this.state.date);
        for (let row = 0, j = 1; row < 6; row += 1) {
            if (j > numberOfDays) {
                break;
            }
            for (let column = 0; column < 7; column += 1) {
                let box = <div className={Styles.gridItemEmpty} key={`${row}${column}`}></div>;
                if ((row !== 0 || column >= firstDayOfMonth) && j <= numberOfDays) {
                    if (Month.isCurrentDate(this.state.date, j)) {
                        box = <div className={Styles.gridItemCurrentDate} key={`${row}${column}`}>{j++}</div>
                    } else {
                        box = <div className={Styles.gridItem} key={`${row}${column}`}>{j++}</div>
                    }
                }
                boxes.push(box);
            }
        }

        return (
            <>
                <div className={Styles.monthDetailContainer}>
                    <div className={Styles.displayMonth}>
                        {this.state.displayPicker ?
                            `${Month.toString(this.state.date)} ${this.state.date.getFullYear()}`
                            : `${Month.toString(this.state.date)}`}
                    </div>
                    {this.state.displayPicker ? <div className={Styles.monthSelector}>
                        <button className={Styles.button} onClick={() => this.changeMonth('PREVIOUS')}>{'<'}</button>
                        <button className={Styles.button} onClick={() => this.changeMonth('NOW')}>{'NOW'}</button>
                        <button className={Styles.button} onClick={() => this.changeMonth('NEXT')}>{'>'}</button>
                    </div> : null}
                </div>
                <div className={Styles.gridContainer}>
                    <div className={Styles.dayGridColumn} key={'SUN'}>{'SUN'}</div>
                    <div className={Styles.dayGridColumn} key={'MON'}>{'MON'}</div>
                    <div className={Styles.dayGridColumn} key={'TUE'}>{'TUE'}</div>
                    <div className={Styles.dayGridColumn} key={'WED'}>{'WED'}</div>
                    <div className={Styles.dayGridColumn} key={'THU'}>{'THU'}</div>
                    <div className={Styles.dayGridColumn} key={'FRI'}>{'FRI'}</div>
                    <div className={Styles.dayGridColumn} key={'SAT'}>{'SAT'}</div>
                    {boxes}
                </div>
            </>
        );
    }
}

export default BodyMonth;