import { BrowserRouter, Route, Routes } from "react-router-dom";

import Footer from "./components/Footer/Footer";
import GamePage from "./pages/GamePage/GamePage";
import HomePage from "./pages/HomePage/HomePage";
import LearningClubPage from "./pages/LearningClubPage/LearningClubPage";
import TheScorePage from "./pages/TheScorePage/TheScorePage";

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
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
