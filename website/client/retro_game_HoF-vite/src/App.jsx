import React from 'react';
import './App.css'
import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';
import { Games } from './components/main/Games';
import { SideBar } from './components/common/SideBar';
import { Search } from './components/main/search';

function App() {
  return (
    <div id='app'>
      <Header />
      <div id='content'>
        <div id='gameData'>
          <Search />
          <Games />
        </div>
        <SideBar />
      </div>
      <Footer />
    </div>
  )
}

export default App
