import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import GamePage from './pages/game-page/GamePage';

import './App.scss';

function App() {
  return (
    <Router>
      <div>
        <Header/> 
        <Routes>
          <Route path="/" element={<Navigate to="/chapter/1/level/1" />}></Route>
          <Route path="/chapter/:chapterId/level/:levelId" element={<GamePage/>}/>
        </Routes>
        <Footer/>
      </div>
    </Router>
    
  );
}

export default App;
