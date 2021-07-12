import React, { useEffect } from 'react';
import Login from "./pages/Login"
import axios from "axios"
import Signup from './pages/Signup';
import Home from './components/Home/Home';
import Score from './components/Quiz/Score';
import Navbar from './components/Navbar/Navbar';
import QuizTypes from './components/Quiz/QuizTypes';
import QuizQuestion from './components/Quiz/QuizQuestion';
import { BrowserRouter,Routes,Route } from "react-router-dom"
import './App.css';
import { UseQuiz } from './context/quixContext';


function App() {
  const { dispatch } = UseQuiz()
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
    <>
      <Navbar/>
      <div style={{paddingTop:"3rem"}}>
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/quiz" element={<QuizTypes/>}/>
              <Route path="/quiz/:id" element={<QuizQuestion/>}/>
              <Route path="/score" element={<Score/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/signup" element={<Signup/>}/>
            </Routes>
        </BrowserRouter>
        </div>
    </>
  );
}
export default App;
