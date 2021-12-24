import "./App.css";
import HomePage from "./pages/homepage/homepage.component.jsx";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>ZTM</h1>
      </header>
      <Routes>
        <Route exact path={"/"} element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
