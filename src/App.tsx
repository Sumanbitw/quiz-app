import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Navbar from './components/Navbar/Navbar';
import QuizTypes from './components/Quiz/QuizTypes';
import QuizQuestion from './components/Quiz/QuizQuestion';
import Score from './components/Quiz/Score';

function App() {
  return (
  <div className="App">
    <Navbar/>
    <BrowserRouter>
    <div style={{marginTop:"5rem", zIndex:700}}>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/quiz" element={<QuizTypes/>}/>
    <Route path="/quiz/:id" element={<QuizQuestion/>}/>
    <Route path="/score" element={<Score/>}/>
    </Routes>
    </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
