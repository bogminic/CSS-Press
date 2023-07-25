import React from "react";
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

function App() {
  const [state, send] = useMachine(tutorialMachine);

  return (
    <HashRouter>
      <Header />
      <div className="main-wrapper">
        <Routes>
          <Route
            path="/"
            element={<Dashboard />}
          ></Route>
          <Route
            path="/chapter/:chapterId/level/:levelId"
            element={
              <>
                <Menu state={state} send={send} />
                <GamePage state={state} send={send} />
              </>
            }
          />
          <Route
            path="/not-found"
            element={
              <>
                <Menu state={state} send={send}/>
                <NotfoundPage />
              </>
            }
          />
          <Route path="*" element={<Navigate replace to="/not-found" />} />
        </Routes>
      </div>
      <Footer />
    </HashRouter>
  );
}

export default App;
