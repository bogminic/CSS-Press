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

function App() {
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
                <Menu />
                <GamePage />
              </>
            }
          />
          <Route
            path="/not-found"
            element={
              <>
                <Menu />
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
