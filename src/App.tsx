import {
  Route,
  Routes,
  Navigate,
  HashRouter,
} from "react-router-dom";

import { TutorialMachineContext } from "./machines/TutorialMachineContext";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import GamePage from "./pages/game-page/GamePage";
import NotfoundPage from "./pages/notfound-page/NotfoundPage";
import Dashboard from "./pages/dashboard/Dashboard";
import Menu from "./components/menu/Menu";

import "./App.scss";

function App() {

  return (
    <TutorialMachineContext.Provider>
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
        </main>
        <Footer />
      </HashRouter>
    </TutorialMachineContext.Provider>
  );
}

export default App;
