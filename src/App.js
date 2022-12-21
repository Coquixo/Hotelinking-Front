import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Containers/Home/Home";
import Register from "./Components/Register/Register";
import Login from "./Components/Login/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <h1>Offert Generator</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
