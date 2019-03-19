import React from 'react'
import './BodyMonth.css'

var box = [];
class BodyMonth extends React.Component {


    render() {
        for (let i = 1; i <= 42; i++) {
            box.push(i);
        }

        let boxes = box.map((item, index) => {
            return (<div className="grid-item" key={[index]}>{item}</div>)

        });

        return (
            <div className="grid-container">
                {boxes}
            </div>
        );
    }
}

export default BodyMonth;