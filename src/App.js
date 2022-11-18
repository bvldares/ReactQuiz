import Questions from "./components/Question"
import { nanoid } from 'nanoid'
import Home from "./components/Home"
import React from "react"
import "./App.css"

export default function App(){
  //STATE INIZIALITATION

  const [newGame, setNewGame] = React.useState(false)
  const [questions, setQuestions] = React.useState([])

  //state toggle function for start game
  const startGame = () =>setNewGame(prevState=>!prevState)
  



  React.useEffect(()=>{  //START USE EFFECT
    fetch("https://opentdb.com/api.php?amount=5&type=multiple")
    .then(res=>res.json())
    .then(data =>{
      const dataArray = data.results
      const questionsObj = []
      dataArray.map(question =>{
        questionsObj.push({
          quest: question.question,
          correctAnswer : question.correct_answer,
          answers : [
            {answer: question.correct_answer, isSelected: false},
            {answer: question.incorrect_answers[0], isSelected: false},
            {answer: question.incorrect_answers[1], isSelected: false},
            {answer: question.incorrect_answers[2], isSelected: false} ],
          isHeld : false,
          selectedAnswer: "",
          id: nanoid()
        }) })
      
      return setQuestions(questionsObj)
    })

  },[]) //End useEffect S

  function handleChange(e){

  }

  //Question component creation for each element inside the array 
  const questionComponent = questions.map(question=>{
    return ( 
        <Questions 
        title = {question.quest}
        answers = {question.answers}
        key = {question.id}
        isHeld = {question.isHeld}
        id = {question.id}
        handleChange = {handleChange}
    /> )
  })
  
 

  return(
    <main>
      { !newGame ? <Home startGame={startGame}/>: 
      <div className="trivia-wrapper">
        {questionComponent}
        <button className="check-answers">Check answers</button>
      </div>}
    </main>

  )
}