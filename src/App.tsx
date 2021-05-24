import React from 'react';
import Home from './components/Home/Home';
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Navbar from './components/Navbar/Navbar';
import QuizTypes from './components/Quiz/QuizTypes';
import QuizQuestion from './components/Quiz/QuizQuestion';
import Score from './components/Quiz/Score';
import './App.css';

function App() {

  return (
    <>
      <Navbar/>
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/quiz" element={<QuizTypes/>}/>
              <Route path="/quiz/:id" element={<QuizQuestion/>}/>
              <Route path="/score" element={<Score/>}/>
            </Routes>
        </BrowserRouter>
    </>
  );
}
export default App;
