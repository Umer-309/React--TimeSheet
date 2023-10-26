import React from 'react'
import HTML from "./assets/html.png"

export default function Box(props) {
    console.log(props.time)
    return (
        <div className='box-container'>
            <div className="box--image">
                <img src={HTML} alt="" />
            </div>
            <div className="box-info">
                <div className="head">
                    <h1>HTML</h1>
                    <div className="button-group">
                        <button 
                        type='button' 
                        className='button button-primary'
                        onClick={props.startStop}
                        >Start</button>
                        <button 
                        type='button' 
                        className='button button-secondary'
                        onClick={props.reset}
                        >Stop</button>
                    </div>
                </div>
                <p>Time Today: {props.showTime}hrs</p>
                <h3>Total Time : 0000hrs</h3>
            </div>
        </div>
    )
}