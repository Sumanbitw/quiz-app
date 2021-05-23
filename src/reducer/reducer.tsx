import { Action, InitialState } from "../../src/context/quixContext"
import { quizOne } from "../data/quiz1"


export const initialState : InitialState = {
    attemptedQuestion : null,
    currentQuizQuestion : quizOne,
    currentQuestion : 0,
    score:0,
  
}

// user : {
//     score : 0,
//     questions : [
//         {
//             ...state,
//             userSelected : 0,
//         }
//     ] 
//  }
export const reducer = (state : InitialState ,action : Action) : typeof initialState => {
    switch(action.type) {
        case "SET__QUIZ" : 
        return {
            ...state,
            attemptedQuestion : {
               ...action.payload.quiz
            },
            score:0,
        }

        case "INCREASE__QUESTION__NUMBER" : 
        return {
            ...state,
            currentQuestion : state.currentQuestion + 1
        }

        case "INCREMENT__SCORE" :
            const increment = action.payload ? action.payload : 0 
            return {
                ...state,
                score : state.score + increment
            }

        case "DECREMENT__SCORE" :
            const decrement = action.payload ? action.payload : 0
            return {
                ...state,
                score : state.score - decrement
            }
        case "TOTAL__SCORE" : 
        return {
            ...state
        }
        case "RESET":
            return {
                ...initialState
            }
        default :
        return state
    }
}