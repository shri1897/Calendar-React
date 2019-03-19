import React from 'react'
import './BodyMonth.css'

class BodyMonth extends React.Component {
    render() {
        var box = [];
        for (let i = 1; i <= 49; i++) {
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