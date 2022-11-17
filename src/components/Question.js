import React from "react";


export default function Question(props){

const styles = {backgroundColor: props.isHeld? "#D6DBF5": "none"}
const id = props.id
const firstQ = props.firstAnswer
const secondQ = props.secondAnswer
const thirdQ = props.thirdAnswer
const fourthQ = props.fourthAnswer




return(
    <div className="question-container">
        <p className="question-title">{props.title}</p>
        <div className="answers-container">
            <input type="radio"  id={firstQ} className="answer" name={id} style={styles} value={firstQ} onChange={props.handleChange}/>
            <label htmlFor={firstQ}>{firstQ}</label>
            <input type="radio"  id={secondQ} className="answer" name={id} style={styles} value={secondQ} onChange={props.handleChange}/>
            <label htmlFor={secondQ}>{secondQ}</label>
            <input type="radio"  id={thirdQ} className="answer" name={id} style={styles} value={thirdQ} onChange={props.handleChange}/>
            <label htmlFor={thirdQ}>{thirdQ}</label>
            <input type="radio" id={fourthQ} className="answer" name={id} style={styles} value={fourthQ} onChange={props.handleChange}/>
            <label htmlFor={fourthQ}>{fourthQ}</label>
        </div>
        <hr/>
    </div>
)
}