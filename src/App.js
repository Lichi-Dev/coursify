import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    window.history.scrollRestoration = "manual";
  }, []);
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
