import React, { useState } from 'react'
import { QuizType } from '../../data/quiz.types'
import { Button } from '@material-ui/core'
import { UseQuiz } from '../../context/quixContext'
import { useNavigate } from 'react-router-dom';
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import { useParams } from "react-router-dom"
import { QuizAnswers } from '../../data/quiz.types'
import { quizzes } from '../../data/database'
import { makeStyles } from "@material-ui/core/styles";


export type QuestionType = {
    questions ?: QuizType,
}

const userStyles = makeStyles({
    btn__right : {
        color:"green"
    },

    btn__wrong : {
        color:"red"
    },

    btn__original : {
        color:"black"
    }

})
function QuizQuestionContainer({ questions } : QuestionType ) {
    const { state : { currentQuestion, attemptedQuestion }, dispatch } = UseQuiz()
    const [ isSelected, setIsSelected ] =  useState(false)
    const { id } = useParams()
    const selectedQuiz = quizzes.find(quiz => quiz.id === Number(id))
    const classes =  userStyles()
    let navigate = useNavigate();


    function handleClick() {
        if(currentQuestion + 1 !== attemptedQuestion?.quizDetails.totalQuestions) {
            dispatch({ type : "INCREASE__QUESTION__NUMBER"})
        } else {
            navigate("/score")
        }
        if(attemptedQuestion && currentQuestion > attemptedQuestion.quizDetails.totalQuestions){
            navigate("/score")  
        }
        setIsSelected(false)
        // setIsCompleted(false)
    }
    function handleAnswer(answer : QuizAnswers ) {
        if(answer.isRight) {
            dispatch({ type : "INCREMENT__SCORE", payload : selectedQuiz?.questions[currentQuestion].correctAnswer })
        } else {
            dispatch({ type : "DECREMENT__SCORE", payload : attemptedQuestion?.questions[currentQuestion].wrongAnswer })
        }
        setIsSelected(true)
    }

    return (
        <div >
            <div style={{margin:"2rem"}}>
              <h4> Q. {currentQuestion + 1} {questions?.question} </h4>
              <CountdownCircleTimer
                key={currentQuestion + 1}
                isPlaying
                duration={10}
                size={70}
                strokeWidth={4}
                colors={[
                ['#004777', 0.33],
                ['#F7B801', 0.33],
                ['#A30000', 0.33],
                ]}
                onComplete={()=> {
                    handleClick();
                    return[true,0]
                }}
            >
                {({remainingTime}) => remainingTime}
                </CountdownCircleTimer>
            </div>
            <div>
            {questions?.answers.map(answer => (
                <Button 
                    type="submit" 
                    variant='outlined'
                    style={{width:"70%", padding:"0.75rem", margin:"0.5rem"}}
                    onClick={() => handleAnswer(answer)}
                    className={
                        isSelected 
                        ? answer.isRight 
                        ? classes.btn__right 
                        : classes.btn__wrong 
                        : classes.btn__original 
                    }
                >
                    {answer.answer}
                </Button>
            )
            )}
            </div>
            
            <Button 
                variant='outlined' 
                type='submit'
                onClick={handleClick}
            >
                Next
            </Button>
        </div>
    )
}

export default QuizQuestionContainer
