import { createContext, useContext, useReducer, useState } from "react"
import { Quiz } from "../data/quiz.types"
import { quizData } from "../../src/data/quiz"

type statusState = "starting" | "finished"

type contextType = {
    quiz : Quiz[],
    setQuiz : (quiz : Quiz[]) => void,
    status : statusState,
    setStatus : (status : statusState) => void
} 
const QuizContext = createContext<contextType | null>(null)
export const QuizProvider: React.FC = ({ children }) => {
    const [quiz, setQuiz] = useState<Quiz[]>([])
    const [ status, setStatus] = useState<statusState>("starting")
    // const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <QuizContext.Provider value={{quiz,setQuiz,status, setStatus}}>
            {children}
        </QuizContext.Provider>
    )
}

export const UseQuiz = () => useContext(QuizContext)