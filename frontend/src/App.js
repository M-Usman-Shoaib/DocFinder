import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import MainPage from '../src/Pages/MainPage'
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
      <Router>

      <Routes>

        <Route exact path="/" element={<MainPage/>} />
        {/*<Route path="/about" element={<About/>} /> */}
        {/*<Route path="/cocktail/:id" element={<SingleCocktail/>} /> */}
        {/*<Route path="*" element={<Error/>} /> */}

      </Routes>
    </Router>
    </>
  );
}

export default App;
