import React, { useState } from 'react'
import { useParams } from "react-router-dom"
import { useEffect } from 'react'
import { quizzes } from '../../data/database'
import { Quiz } from '../../data/quiz.types'
import QuizInstruction from './QuizInstruction'
import QuizQuestionContainer from './QuizQuestionContainer'
import { UseQuiz } from '../../context/quixContext'

export type QuizQuestionType = {
    setShowQuestions : (flag : boolean) => void
}

function QuizQuestion() {
    const { state, dispatch } = UseQuiz() 
    const [ quiz, setQuiz ] = useState<Quiz>()
    const [ showQuestions, setShowQuestions ] = useState(false)
    const { id } = useParams()

    console.log({quiz})

    useEffect(()=> {
        const quizCategory = quizzes.find((quiz : Quiz) => quiz.id === Number(id))
        if(quizCategory){
            dispatch({ type : "SET__QUIZ", payload : { quiz : quizCategory}})
            setQuiz(quizCategory)
        }
    }, [dispatch, id])

 console.log({quiz})
    return (
        <div style={{zIndex:800}}
        // style={{marginTop:"6rem"}}
        >
            {!showQuestions ? 
            ( <QuizInstruction setShowQuestions={setShowQuestions}/> 
                ) : (
                    < QuizQuestionContainer questions={quiz?.questions[state.currentQuestion]} />
                )}
        </div>
    )
}

export default QuizQuestion
