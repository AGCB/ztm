import "./App.css";
import HomePage from "./pages/homepage/homepage.component.jsx";
import WomensPage from "./pages/womenspage/womenspage.component.jsx";
import MensPage from "./pages/menspage/menspage.component.jsx";
import WheelsPage from "./pages/wheelspage/wheelspage.component.jsx";
import AboutPage from "./pages/aboutpage/aboutpage.component.jsx";
import { Route, Routes, useNavigate } from "react-router-dom";

function App() {
  let navigate = useNavigate();
  return (
    <div className="App">
      <header className="App-header">
        <h1 onClick={() => navigate("/")}>ZTM</h1>
      </header>
      <Routes>
        <Route exact path={"/"} element={<HomePage />} />
        <Route path={"/about/:userId"} element={<AboutPage />} />
        <Route path={"/womens"} element={<WomensPage />} />
        <Route path={"/mens"} element={<MensPage />} />
        <Route path={"/wheels"} element={<WheelsPage />} />
        <Route path={"/about"} element={<AboutPage />} />
      </Routes>
    </div>
  );
}

export default App;
