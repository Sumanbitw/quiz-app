import { createContext, useContext, useReducer, useEffect } from "react"
import { Quiz, QuizCategory } from "../data/quiz.types"
import axios from "axios"
import { reducer } from "../../src/reducer/reducer"
import { initialState } from "../../src/reducer/reducer" 

type contextType = {
    state : InitialState,
    dispatch : (action : Action) => void,
} 
export type InitialState = {
    attemptedQuestion : Quiz[],
    currentQuiz : Quiz[],
    category : QuizCategory[],
    currentQuestionNumber : number,
    response : Array<string>,
    score : number,
    correctAttempt:number,
    inCorrectAttempt : number,
    isOptionClicked : boolean,
    user : Quiz[],
}

export type Action = 
    // | {
    //     type: "RESET";
    // }
    | { type : "SET__QUIZ"; payload : { quiz : Quiz[] }}
    | { type : "INCREASE__QUESTION__NUMBER" }
    | { type : "TOTAL__SCORE"; payload:number }
    | { type : "DECREMENT__SCORE"; payload : { score : number }}
    | { type : "INCREMENT__SCORE"; payload : { score : number }}
    | { type : "SELECT__ANSWER"; payload : { option : string, answer : string }}
    | { type : "INITIALISE__CURRENT__QUIZ"; payload : { quizId : string }}
    | { type : "ENABLE__CLICK" }
    | { type : "DISABLE__CLICK" }
    | { type : "SET__CATEGORY", payload : QuizCategory[] }

const QuizContext = createContext<contextType>( {} as contextType )

export const QuizProvider: React.FC = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(()=> {
        (async function getQuiz(){
            try{
                const response = await axios.get(`https://crickart-quiz.herokuapp.com/quiz`)
                console.log(response.data)
                dispatch({ type : "SET__QUIZ", payload : { quiz: response.data }})
            }catch(error){
                console.log(error)
            }  
        })()
    }, [dispatch])


    return (
        <QuizContext.Provider value={{ state, dispatch }}>
            {children}
        </QuizContext.Provider>
    )
}

export const UseQuiz = () => useContext(QuizContext)