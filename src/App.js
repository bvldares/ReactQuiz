import Questions from "./components/Question"
import { nanoid } from 'nanoid'
import Home from "./components/Home"
import React from "react"
import "./App.css"
import blue from "./images/blobone.png"
import yellow from "./images/yellow.png"
export default function App(){
  //STATE INIZIALITATION

  const [newGame, setNewGame] = React.useState(false)
  const [questions, setQuestions] = React.useState([])
  const [questionAnswered, setQuestionAnswered] = React.useState(0)
  const [checker, setChecker] = React.useState(false)

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
            {answer: question.incorrect_answers[2], isSelected: false} 
          ].sort(()=> Math.random() -0.5),
          selectedAnswer: "",
          id: nanoid()
        }) 
    })
      
      return setQuestions(questionsObj)
    })

  },[]) //End useEffect S

  

  function setAnswer(event){
    setQuestions(prevState => prevState.map(domanda=>{
      if(domanda.id === event.target.name){
        setQuestionAnswered(prevState=> prevState +1)
       return {
        ...domanda, 
        selectedAnswer: event.target.value,
        answers : domanda.answers.map(answer=>{
         return answer.answer === event.target.value ? 
        {answer:answer.answer,
          isSelected :true}: 
         {answer :answer.answer,
          isSelected :false}  
        })
      }
      }else{
        return domanda
      }  
    }))
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
        setAnswer = {setAnswer}
        correctAnswer = {question.correctAnswer}
        selectedAnswer = {question.selectedAnswer}
        checker = {checker}
    /> )
  })



  function elaborateQuestions(){
    setChecker(true)
    let counter = 5
    questions.map(risposta =>{
      if(risposta.selectedAnswer !== risposta.correctAnswer){
        counter -= 1
      }    
    })
    return setQuestionAnswered(counter)

    
    
  }
  
  function gameOver(){window.location.reload()}

  return(
    <main>
      <img src={yellow} alt="blue blob" className="yellow-blob"/>
      { !newGame ? <Home startGame={startGame}/>: 
      <div className="trivia-wrapper" onSubmit={elaborateQuestions}>
        {questionComponent}
          <div className="result-container">
            {checker && <p className="result">Correct answers: {questionAnswered}/5</p>}
            <button className="check-answers" onClick={checker? gameOver: elaborateQuestions}>{checker? "New Game" : "Check Answers"}</button>
          </div>
      </div>}
      <img src={blue} alt="blue blob" className="blue-blob"/>
    </main>

  )
}