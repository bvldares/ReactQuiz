import React from "react";
import checked from "../images/correct.png"
import wrong from "../images/cross.png"

export default function Question(props){



const answerDomEL = props.answers.map(answer=>{
        return (
            <div>
                <input
                type="radio"
                className="answer"
                id={answer.answer}
                value={answer.answer}
                name = {props.id}
                onChange={props.setAnswer}       
                />
                <label htmlFor={answer.answer} 
                style={{
                    backgroundColor: answer.isSelected ? "#D6DBF5": "rgba(0,0,0,0)",
                }}
                >{answer.answer}</label>
            </div> )
    })




return(
    <div className="question-container">
        <p className="question-title">{props.title}</p>
        <div className="answers-container">
            {answerDomEL}
            <img className="answer-img" style={{display: props.checker? "block": "none"}} src={props.correctAnswer === props.selectedAnswer? checked:wrong} />
        </div>
        

        <hr />
    </div>
)

}