import React from "react";

export default function Home(props){
    return (
        <div className="home-container">
            <h1 className="home-title">Quizzical</h1>
            <p className="home-sub">Il quiz più divertente di sempre</p>
            <button className="home-start" onClick={props.startGame}>Start Quiz</button>
        </div>
    )
}