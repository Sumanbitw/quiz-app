import React from 'react'
// import { QuestionType } from './QuizQuestionContainer'
import { Button } from "@material-ui/core"
import { useParams } from "react-router-dom"
import { QuizAnswers } from '../../data/quiz.types'
import { UseQuiz } from '../../context/quixContext'
import { QuestionType } from './QuizQuestionContainer'
import { quizzes } from '../../data/database'
import { makeStyles } from "@material-ui/core/styles";

const userStyles = makeStyles({
    btn__right : {
        // backgroundColor : "green",
        color:"green"
    },

    btn__wrong : {
        // backgroundColor: "red",
        color:"red"
    },

    btn__original : {
        color:"black"
    }

})

function AnswerContainer({ questions } : QuestionType ) {

    const { id } = useParams()
    const selectedQuiz = quizzes.find(quiz => quiz.id === Number(id))
   
    const { state : { currentQuestion, attemptedQuestion },dispatch } = UseQuiz()
    

    const classes =  userStyles()
    
    function handleAnswer(answer : QuizAnswers ) {
        if(answer.isRight) {
            dispatch({ type : "INCREMENT__SCORE", payload : selectedQuiz?.questions[currentQuestion].correctAnswer })
        } else {
            dispatch({ type : "DECREMENT__SCORE", payload : attemptedQuestion?.questions[currentQuestion].wrongAnswer })
        }
    }
    return (
        <div>
            {questions?.answers.map(answer => (
                <Button 
                    type="submit" 
                    variant='outlined'
                    style={{width:"70%", padding:"1rem", margin:"1rem"}}
                    onClick={() => handleAnswer(answer)}
                    className={ answer.isRight ? classes.btn__right : classes.btn__wrong }
                >
                    {answer.answer}
                </Button>
            ))}
        </div>
    )
}

export default AnswerContainer
