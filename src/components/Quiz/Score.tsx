import React from 'react'
import { UseQuiz } from '../../context/quixContext'
import { Button } from '@material-ui/core'
import { useNavigate } from "react-router-dom"
// import { QuestionType } from './QuizQuestionContainer'


function Score({question, isSelected } : any) {
    const navigate = useNavigate()
    const { state : {score}} = UseQuiz()
    console.log({question})
    return (
        <div style={{marginTop:"6rem"}}>
            <h1>Score : {score}</h1>
            <div>
                {/* {question.map((questionItem : any) => (
                    <li>{questionItem}</li>
                 ))} */}
            </div>
            <Button
                variant='contained'
                onClick={() => {
                    navigate("/quiz")
                }}
            >
                Play Again
            </Button>
        </div>
    )
}

export default Score
