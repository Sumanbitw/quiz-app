import React, { useEffect } from 'react'
import "./quiz.css" 
import axios from "axios"
import { UseQuiz } from '../../context/quixContext';
import QuizTypeCategory from '../../pages/QuizTypeCategory';
import { QuizCategory } from '../../data/quiz.types';



function QuizTypes() {
    const { state : { category }, dispatch } = UseQuiz()
    
 
    useEffect(() => {
        (async function getCategory() {
            try{
                const response = await axios.get(`https://crickart-quiz.herokuapp.com/category`)
                dispatch({ type : "SET__CATEGORY", payload : response?.data })
            }catch(error){
                console.log(error)
            }
        })()
    }, [dispatch])

    return (
        <div className="quiz" >
            {category?.map((categoryItem : QuizCategory)  => (
                <ul>
                    <QuizTypeCategory categoryItem={categoryItem}/>
                </ul>
            ))}
            
        </div>
    )
}

export default QuizTypes
