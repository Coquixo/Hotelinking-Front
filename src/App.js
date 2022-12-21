import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Containers/Home/Home";
import Register from "./Components/Register/Register";
import Login from "./Components/Login/Login";
import OffertsView from "./Containers/OffertsView/OffetsView";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <h1>Offert Generator</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/offerts" element={<OffertsView />} />
          //mine offerts //get all offerts ( admin)
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
