import React from 'react'
import Styles from './Month.module.css'
import Month from '../../../helper/Month'

class BodyMonth extends React.Component {
    state = {
        date: new Date()
    }

    changeMonth(actionType) {
        switch (actionType) {
            case 'PREVIOUS':
                {
                    let date = new Date(this.state.date);
                    date.setMonth(this.state.date.getMonth() - 1);
                    this.setState({ date });

                    break;
                }
            case 'TODAY':
                {
                    this.setState({ date: new Date() });
                    break;
                }
            case 'NEXT':
                {
                    let date = new Date(this.state.date);
                    date.setMonth(this.state.date.getMonth() + 1);
                    this.setState({ date });

                    break;
                }
            default:
                {

                    break;
                }
        }
    }
    render() {
        let box = [];
        for (let i = 1; i <= 49; i++) {
            box.push(i);
        }

        let boxes = box.map((item, index) => {
            return (<div className={Styles.gridItem} key={[index]}>{item}</div>)

        });

        return (
            <>
                <div className={Styles.monthDetailContainer}>
                    <div className={Styles.displayMonth}>
                        <h1>
                            {`${Month.toString(this.state.date)} ${this.state.date.getFullYear()}`}
                        </h1>
                    </div>
                    <div className={Styles.monthSelector}>
                        <button className={Styles.button} onClick={() => this.changeMonth('PREVIOUS')}>{'<'}</button>
                        <button className={Styles.button} onClick={() => this.changeMonth('TODAY')}>{'Today'}</button>
                        <button className={Styles.button} onClick={() => this.changeMonth('NEXT')}>{'>'}</button>
                    </div>
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