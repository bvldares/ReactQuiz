import React from "react";


export default function Question(props){

const shuffleArr = props.answers.sort(() => Math.random() - 0.5)


const answerDomEL = shuffleArr.map(answer=>{
        return (
            <div>
                <input
                type="radio"
                className="answer"
                id={answer.answer}
                value={answer.answer}
                name = {props.id}
                onChange={props.handleChange}
                />
                <label htmlFor={answer.answer}>{answer.answer}</label>
                <hr />
            </div> )
    })


return(
    <div className="question-container">
        <p className="question-title">{props.title}</p>
        <div className="answers-container">
            {answerDomEL}
        </div>
    </div>
)

}