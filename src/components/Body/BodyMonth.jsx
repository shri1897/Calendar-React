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
            <div class="grid-container">
                {/* <div class="grid-item">1</div>
                <div class="grid-item">2</div>
                <div class="grid-item">3</div>
                <div class="grid-item">4</div>
                <div class="grid-item">5</div>
                <div class="grid-item">6</div>
                <div class="grid-item">7</div>
                <div class="grid-item">8</div>
                <div class="grid-item">9</div>
                <div class="grid-item">1</div>
                <div class="grid-item">2</div>
                <div class="grid-item">3</div> */}
                {boxes}
            </div>
        );
    }
}

export default BodyMonth;