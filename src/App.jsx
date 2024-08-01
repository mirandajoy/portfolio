import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import LearningClubPage from "./pages/LearningClubPage/LearningClubPage";
import TheScorePage from "./pages/TheScorePage/TheScorePage";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/learning-club" element={<LearningClubPage />} />
          <Route path="/the-score" element={<TheScorePage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
