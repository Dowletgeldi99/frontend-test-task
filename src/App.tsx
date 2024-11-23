import React from 'react'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import Onboarding from "./Components/Onboarding";
import Dashboard from "./Components/Dashboard";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
