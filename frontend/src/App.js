import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import MainPage from '../src/Pages/MainPage'
import logo from './logo.svg';
import Login from "./Pages/Login";
import Registration from "./Pages/Registration";
import PatientRegister from "./Pages/Patient/PatientRegister";
import DoctorRegister from "./Pages/Doctor/DoctorRegister";
import DoctorLogin from "./Pages/Doctor/DoctorLogin";
import PatientLogin from "./Pages/Patient/PatientLogin";

function App() {
  return (
    <>
      <Router>

      <Routes>

        <Route exact path="/" element={<MainPage/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/registration" element={<Registration/>} />
        <Route path="/patientRegister" element={<PatientRegister/>} />
        <Route path="/doctorRegister" element={<DoctorRegister/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/doctorLogin" element={<DoctorLogin/>} />
        <Route path="/patientLogin" element={<PatientLogin/>} />

        {/*<Route path="*" element={<Error/>} /> */}

      </Routes>
    </Router>
    </>
  );
}

export default App;
