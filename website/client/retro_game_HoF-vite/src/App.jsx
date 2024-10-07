import React, { useState } from 'react';
import './App.css'
import Main from './components/main/Main';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import GameSite from './components/gamesite/GameSite';
import LoginSite from './components/login/LoginSite';
import Intra from './components/intra/Intra';
import Unauthorized from './components/statuses/Unauthorized';
import Usersite from './components/user/Usersite';

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
            path='/login'
            element={<LoginSite />}
          />
          <Route
            path='/account'
            element={<Usersite />}
          />
          <Route
            path='/intra'
            element={<Intra />}
          />
          <Route
            path='/unauthorized'
            element={<Unauthorized />}
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