import React from 'react';
import './Body/Year/Year.module.css'


class Year extends React.Component {


    render() {
        let Container = [];
        for (let i = 0; i < 12; i++) {
            return (<div>{i}</div>)

        }
        return (
            <>
                <div className="grid-container">
                    {/* <div>1</div>
                    <div>2</div>
                    <div>3</div>
                    <div>4</div>
                    <div>5</div>
                    <div>6</div>
                    <div>7</div>
                    <div>8</div>
                    <div>9</div>
                    <div>10</div>
                    <div>11</div>
                    <div>12</div> */}
                    {Container}
                </div>

            </>

        );
    }
}

export default Year;