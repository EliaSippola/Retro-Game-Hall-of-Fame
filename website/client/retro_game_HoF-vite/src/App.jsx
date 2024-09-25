import React from 'react';
import './App.css'
import Main from './components/main/Main';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import GameSite from './components/gamesite/GameSite';

function App() {

  return (
    <div id='app'>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Main />} 
          />
          <Route
            path='/game/:id'
            element={<GameSite />}
          />
          <Route 
            path="*"
            element={<Navigate to="/" />}
          />
        </Routes>
      </Router>
    </div>
  )
}

export default App