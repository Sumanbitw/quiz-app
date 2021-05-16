import React, { useState } from 'react'
import "./home.css"
import { Typography } from '@material-ui/core'
import '@fontsource/roboto'
import { UseQuiz } from '../../context/quixContext';
import { quizData } from "../../data/quiz"

function Home() {
    const [ currentQuestion, setCurrentQuestion ] = useState<number>(0)
    const [ score, setScore ] = useState<number>(0)
    const [ clicked, setClicked ] = useState<boolean>(false)
    const value = UseQuiz()
    console.log(quizData)
    function handleClick(answer: any) {
        if(answer.isRight === true && currentQuestion <  quizData.questions.length - 1){
            console.log("correct")
            setScore(prevScore => prevScore + 1)
            setCurrentQuestion(prevQuestion => prevQuestion + 1)
        } else {
            console.log("incorrect")
            setScore(prevScore => prevScore - 1)
        }
        setClicked(true)
    }

    function handleNextQuestion(){
        setClicked(false)
        if(currentQuestion < quizData.questions.length - 1)
    {
        setCurrentQuestion(prevQuestion => prevQuestion + 1)
    }
    }
    return (
        <div className="home">
            <div className="home__container">
            <div>
            <Typography variant='h3' color="textSecondary">Sports Quiz 🤯</Typography>
            <p>Status : {value?.status}</p>
            <p>Score : {score}</p>
            <div className="home__wrapper">
                <h4>{quizData.quizType}</h4>
               <div className="home__question">Q. {quizData.questions[currentQuestion].question} ?</div>
               </div>
               <div className="home__answers">{quizData.questions[currentQuestion].answers.map(answer => (
                   <li className="answer__list">
                       <button style={{ backgroundColor : clicked && answer.isRight === true ? "green" : "white" }} className="button" onClick={() => handleClick(answer)} disabled={clicked}>{answer.answer}</button>
                   </li>
               ))}
               </div>
               <button className="btn__next" onClick={handleNextQuestion} disabled={!clicked}>Next</button>
            </div>
            </div>
        </div>
    )
}

export default Home
