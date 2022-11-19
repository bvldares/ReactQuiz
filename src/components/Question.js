import React from "react";
import checked from "../images/correct.png"
import wrong from "../images/cross.png"

export default function Question(props){

    function decodeHtml(html) {
        var txt = document.createElement('textarea');
        txt.innerHTML = html;
        return txt.value;
    }

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


                <label 
                htmlFor={props.checker ? "" : answer.answer}
                style={props.checker? 
                       {backgroundColor: answer.isSelected ? answer.answer === props.correctAnswer? "#94D7A2": "#F8BCBC" :
                        !answer.isSelected && answer.answer === props.correctAnswer? "#94D7A2" : "rgba(0,0,0,0)" }
                        :{backgroundColor: answer.isSelected ? "#D6DBF5": "rgba(0,0,0,0)"} }
                >{answer.answer}</label>
            </div> )
    })




return(
    <div className="question-container">
        <p className="question-title">{decodeHtml(props.title)}</p>
        <div className="answers-container">
            {answerDomEL}
            <img className="answer-img" style={{display: props.checker? "block": "none"}} src={props.correctAnswer === props.selectedAnswer? checked:wrong} />
        </div>
        

        <hr />
    </div>
)

}