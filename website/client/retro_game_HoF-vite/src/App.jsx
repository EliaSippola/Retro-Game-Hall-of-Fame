import React from 'react';
import './App.css'
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Games } from './components/Games';
import { SideBar } from './components/SideBar';

function App() {
  return (
    <div id='app'>
      <Header />
      <div id='content'>
        <Games />
        <SideBar />
      </div>
      <Footer />
    </div>
  )
}

export default App
