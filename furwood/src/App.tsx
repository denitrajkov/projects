import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { CardsCont } from "./components/CardsCont";
import { CardDetail } from "./components/CardDetail";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ErrorPage } from "./components/ErrorPage";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<CardsCont />} />
          <Route path="/details/:id" element={<CardDetail />} />
          <Route path="/error" element={<ErrorPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
