import React from 'react';

import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import GamePage from './pages/game-page/GamePage';

import './App.scss';

function App() {
  return (
    <div>
      <Header/>
      <GamePage/>
      <Footer/>
    </div>
  );
}

export default App;
