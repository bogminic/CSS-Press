import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import GamePage from './pages/game-page/GamePage';

import './App.scss';

function App() {
  return (
    <Router>
      <div>
        <Header/> 
        <Switch>
          <Route path="/chapter/:chapterId/level/:levelId" children={<GamePage/>}/>
          <Route exact path="/"><Redirect to="/chapter/1/level/1" /></Route>
        </Switch>
        <Footer/>
      </div>
    </Router>
    
  );
}

export default App;
