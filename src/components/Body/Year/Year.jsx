import React from 'react';
import Styles from './Year.module.css'
import Month from '../Month/Month'


class Year extends React.Component {

    render() {
        let container = [];

        for (let i = 0; i < 12; i++) {
            container.push(
                <div key={i} className={Styles.monthContainer}>
                    <Month setDate={new Date(2019, i, new Date().getDate())} displayPicker={false} />
                </div>
            );
        }

        return (
            <>
                <div className={Styles.gridContainer}>
                    {container}

                </div>

            </>

        );
    }
}

export default Year;