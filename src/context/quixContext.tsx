import { createContext, useContext, useReducer } from "react"
import { Quiz } from "../data/quiz.types"
// import { quizData } from "../data/quiz1"
import { reducer } from "../../src/reducer/reducer"
import { initialState } from "../../src/reducer/reducer" 

type contextType = {
    state : InitialState,
    dispatch : (action : Action) => void,
} 
export type InitialState = {
    currentQuizQuestion : Quiz, 
    attemptedQuestion : Quiz | null,
    currentQuestion : number,
    score: number,
}

export type Action = 
    | {
        type: "RESET";
    }
    | {
        type : "SET__QUIZ";
        payload : { quiz : Quiz }
    }
    | {
        type : "INCREASE__QUESTION__NUMBER"
    }
    | {
        type : "TOTAL__SCORE"
    }
    | {
        type : "INCREMENT__SCORE";
        payload ?: number
    }
    | {
        type : "DECREMENT__SCORE";
        payload ?: number
    }

const QuizContext = createContext<contextType>( {} as contextType )

export const QuizProvider: React.FC = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <QuizContext.Provider value={{ state, dispatch }}>
            {children}
        </QuizContext.Provider>
    )
}

export const UseQuiz = () => useContext(QuizContext)