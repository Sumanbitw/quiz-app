import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
  <div className="App">
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
