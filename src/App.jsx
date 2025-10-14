import { BrowserRouter, Route, Routes } from "react-router-dom";

import Footer from "./components/Footer";
import GamePage from "./pages/GamePage";
import HomePage from "./pages/HomePage";
import LearningClubPage from "./pages/LearningClubPage";
import TheScorePage from "./pages/TheScorePage";

import "./App.scss";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/learning-club" element={<LearningClubPage />} />
          <Route path="/the-score" element={<TheScorePage />} />
          <Route path="/mountains-and-rivers" element={<GamePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
