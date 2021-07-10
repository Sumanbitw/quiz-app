import React from 'react'
import { UseQuiz } from '../../context/quixContext'
import { Button } from '@material-ui/core'
import { useNavigate } from "react-router-dom"
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';
// import { QuestionType } from './QuizQuestionContainer'
import "./score.css"


function Score({question, isSelected } : any) {
    const navigate = useNavigate()
    const { state : {
        score, 
        correctAttempt, 
        inCorrectAttempt, 
        currentQuiz, 
        response, 
        category, 
        attemptedQuestion
    }} = UseQuiz()

    console.log(score)
    console.log(currentQuiz)
    console.log(attemptedQuestion)

    return (
        <div className="score">
            <div className="result">
            <h1>High Score : {score } / { category[0]?.quizDetails.totalPoints ? category[0]?.quizDetails.totalPoints : 0} </h1>
            <div>
                <h3>Correct Attempt : {correctAttempt}</h3>
                <h3>Incorrect Attempt : {inCorrectAttempt}</h3>
            </div>
    
                {currentQuiz.map((questionObj, index) => (
                    <>
                    <h5>Q.{index + 1} {questionObj.question}</h5>
                    {questionObj.incorrectOption.concat(questionObj.correctOption).sort(() => Math.random() - 0.5).map(answer => (
                        <div>
                            <Button style={{ color : answer === questionObj.correctOption ? "green" : answer === response[index] ? "red" : "black"}}>{answer}</Button>
                            {answer === response[index] && answer === questionObj.correctOption && (
                                <CheckIcon />
                            )}
                            {answer === response[index] && answer !== questionObj.correctOption && (
                                <ClearIcon/>
                            )}
                        </div>
                    ))}
                    <h4>{questionObj.explanation}</h4>
                    </>            
                ))}

                <Button
                variant='contained'
                onClick={() => {
                    navigate("/quiz")
                }}
                >
                Play Again
                </Button> 
            </div>

        </div>
    )
}

export default Score
