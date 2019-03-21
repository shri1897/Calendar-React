import React from 'react';
import Styles from './Year.module.css'
import Month from '../Month/Month'


class Year extends React.Component {

    state = {
        date: new Date()
    }

    componentDidMount() {
        this.setState({ date: this.props.date });
    }


    changeYear(actionType) {
        switch (actionType) {
            case 'PREVIOUS':
                {
                    let date = new Date(this.state.date);
                    date.setFullYear(this.state.date.getFullYear() - 1);
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
                    date.setFullYear(this.state.date.getFullYear() + 1);
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
        let container = [];
        for (let i = 0; i < 12; i++) {
            container.push(
                <div key={i} className={Styles.monthContainer}>
                    <Month date={new Date(this.state.date.getFullYear(), i, 1)} displayPicker={false} />
                </div>
            );
        }

        return (
            <>
                <div className={Styles.yearDetailContainer}>
                    <div className={Styles.displayYear}>
                        {`${this.state.date.getFullYear()}`}
                    </div>
                    <div className={Styles.yearSelector}>
                        <button className={Styles.button} onClick={() => this.changeYear('PREVIOUS')}>{'<'}</button>
                        <button className={Styles.button} onClick={() => this.changeYear('NOW')}>{'NOW'}</button>
                        <button className={Styles.button} onClick={() => this.changeYear('NEXT')}>{'>'}</button>
                    </div>
                </div>
                <div className={Styles.gridContainer}>
                    {container}
                </div>
            </>

        );
    }
}

export default Year;