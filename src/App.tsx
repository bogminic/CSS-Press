import React, { useEffect } from "react";
import {
  Route,
  Routes,
  Navigate,
  HashRouter,
} from "react-router-dom";

import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import GamePage from "./pages/game-page/GamePage";
import NotfoundPage from "./pages/notfound-page/NotfoundPage";

import "./App.scss";
import Menu from "./components/menu/Menu";
import Dashboard from "./pages/dashboard/Dashboard";
import { useMachine } from "@xstate/react";
import { tutorialMachine } from "./machines/tutorialMachine";
import { localStorageNames } from "./utils/constants";

function App() {

  const persistedState = JSON.parse(localStorage.getItem(localStorageNames.tutorialState) || '""') || tutorialMachine.initialState;
  const [currentTutorialState, send] = useMachine(tutorialMachine, {
    state: persistedState
  });

  useEffect(() => {
      localStorage.setItem(localStorageNames.tutorialState, JSON.stringify(currentTutorialState));
  }, [currentTutorialState]);

  return (
    <HashRouter>
      <Header />
      <main className="main-wrapper">
        <Routes>
          <Route
            path="/"
            element={<Dashboard />}
          ></Route>
          <Route
            path="/chapter/:chapterNumberParam/level/:levelNumberParam"
            element={
              <>
                <Menu currentTutorialState={currentTutorialState} send={send} />
                <GamePage currentTutorialState={currentTutorialState} send={send} />
              </>
            }
          />
          <Route
            path="/not-found"
            element={
              <>
                <Menu currentTutorialState={currentTutorialState} send={send} />
                <NotfoundPage />
              </>
            }
          />
          <Route path="*" element={<Navigate replace to="/not-found" />} />
        </Routes>
      </main>
      <Footer />
    </HashRouter>
  );
}

export default App;
