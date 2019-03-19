import React from 'react';
import Styles from './Year.module.css'




class Year extends React.Component {


    render() {
        let container = [];

        for (let i = 0; i < 12; i++) {
            container.push(<div key={i}> {i}</div>);
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