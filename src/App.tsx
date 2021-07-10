import React from 'react';
import Login from "./pages/Login"
import Signup from './pages/Signup';
import Home from './components/Home/Home';
import Score from './components/Quiz/Score';
import Navbar from './components/Navbar/Navbar';
import QuizTypes from './components/Quiz/QuizTypes';
import QuizQuestion from './components/Quiz/QuizQuestion';
import { BrowserRouter,Routes,Route } from "react-router-dom"
import './App.css';


function App() {

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
