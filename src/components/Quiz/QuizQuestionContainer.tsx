// import React, { useState } from 'react'
//  import { QuestionType, Quiz } from '../../data/quiz.types'
// import { Button } from '@material-ui/core'
// import { UseQuiz } from '../../context/quixContext'
// import { useNavigate } from 'react-router-dom';
// import { CountdownCircleTimer } from 'react-countdown-circle-timer'
// import { useParams } from "react-router-dom"
// import {  QuestionType, QuizAnswers } from '../../data/quiz.types'
// import { quizzes } from '../../data/database'
// import { makeStyles } from "@material-ui/core/styles";
// import "./quizQuestion.css"
// import { QuizQuestionsType } from './QuizQuestion';
// import { QuizQuestionsType } from './QuizQuestion';


// export type QuizQuestionsType = {
//     currentQuestions : QuestionType,
// }

// const userStyles = makeStyles({
//     btn__primary : {
//         backgroundColor:"green"
//     },

//     btn__secondary : {
//         color:"red"
//     },
//     button : {
//         color : "white",
//         padding : "0.5rem 2rem",
//         margin: "2rem",
//         backgroundColor : "#2e7d32",
//         border : "1px solid #2e7d32",
//     },

// })
// function QuizQuestionContainer({ currentQuestions } : QuizQuestionsType) {
//     const { state : { currentQuestionNumber, isOptionClicked, currentQuiz }, dispatch } = UseQuiz()
//     const [ selectedAnswerId, setSelectedAnswerId ] = useState("")
//     const { id } = useParams()
//     const classes =  userStyles()
//     const navigate = useNavigate();
//     console.log({currentQuestions})
    
//     const currentQuizQuestions = currentQuiz?.questions[currentQuestionNumber] as QuestionType


//     function handleClick() {
//         if(currentQuestionNumber + 1 !== currentQuiz?.quizDetails.totalQuestions) {
//             dispatch({ type : "INCREASE__QUESTION__NUMBER" })
//         } else {
//             navigate("/score")
//         }
//         if(currentQuiz && currentQuestionNumber > currentQuiz?.quizDetails.totalQuestions){
//             navigate("/score")  
//         }
        
//         if(answer.isRight) {
//             dispatch({ type : "CORRECT__ATTEMPT", payload : 10 })
//         } else {
//             dispatch({ type : "INCORRECT__ATTEMPT", payload : -2 })
//         }
//     }
    
//     function updatedScore(answer : QuizAnswers) {
//         answer.isRight 
//         ? dispatch({ type : "INCREMENT__SCORE", payload : { score : currentQuestions?.correctAnswer }})
//         : dispatch({ type : "DECREMENT__SCORE", payload : { score : currentQuestions?.negativePoints }})

//         currentQuestionNumber + 1 !== currentQuestions.question.length
//         ? dispatch({ type : "INCREASE__QUESTION__NUMBER"})
//         : navigate("/score")

//     }
//     const handleAnswer = ( answer : QuizAnswers ) => {
//         setSelectedAnswerId(() => answer.id )
//         dispatch({ 
//             type : "SELECT__ANSWER", payload : {answerId : answer.id, questionId : currentQuestions?.id}
//         })
//         dispatch({type:"DISABLE__CLICK"})
//         setTimeout(() => {
//             updatedScore(answer)
//             dispatch({ type:"ENABLE__CLICK" })
//         }, 150)

//         updatedScore(answer)
//      }

//     return (
//         <> 
//         {currentQuestions && (
//         <div className="question__container"> 
// 		<div className="timer">
//             <CountdownCircleTimer
//                 key={currentQuestionNumber + 1}
//                 isPlaying
//                 duration={1000}
//                 size={50}
//                 strokeWidth={0}
//                 colors={[
//                 ['white', 0.33],
//                 ['white', 0.33],
//                 ['white', 0.33],
//                 ]}
//                 onComplete={()=> {
//                     handleClick();
//                     return[true,0]
//                 }}
//             >
//                 {({remainingTime}) => remainingTime}
//                 </CountdownCircleTimer>
// 			</div>
//             <div>
//               <h4> Q. {currentQuestionNumber + 1} {currentQuestions?.question} </h4>
//             </div>
//             <div>
//             {currentQuizQuestions && currentQuizQuestions.answers.map((answer) => (
//                 <Button 
//                     type="submit"
//                     disabled={!isOptionClicked} 
//                     variant='outlined'
//                     style={{width:"85%", margin:"0.5rem"}}
//                     onClick={() => handleAnswer(answer)}
//                     className={`${ answer.isRight && !isOptionClicked && classes.btn__primary} 
//                     ${answer.id === selectedAnswerId && !answer.isRight && !isOptionClicked && classes.btn__secondary}`}
//                 >
//                     {answer.answer}
//                 </Button>
//             )
//             )}
//             </div>
          
//             <Button 
//                 variant='contained' 
//                 type='submit'
//                 onClick={handleClick}
//             >
//                 Next
//             </Button>
//         </div>
//         )
//         }
//         </>
//     )
// }

// export default QuizQuestionContainer

import React from 'react'

function QuizQuestionContainer() {
    return (
        <div>
            
        </div>
    )
}

export default QuizQuestionContainer
