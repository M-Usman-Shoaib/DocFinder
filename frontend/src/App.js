import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import MainPage from '../src/Pages/MainPage'
import logo from './logo.svg';
import Login from "./Pages/Login";

function App() {
  return (
    <>
      <Router>

      <Routes>

        <Route exact path="/" element={<MainPage/>} />
        <Route path="/login" element={<Login/>} />
        {/*<Route path="/cocktail/:id" element={<SingleCocktail/>} /> */}
        {/*<Route path="*" element={<Error/>} /> */}

      </Routes>
    </Router>
    </>
  );
}

export default App;
