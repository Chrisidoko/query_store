import React from "react";
import Home from "./pages/Home";
import "./global_styles/main.scss";
import Navbar from "./components/NavBar/Navbar";
import CardPost from "./components/CardPost/CardPost";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      {/**my Navbar component. ps: independent of the pages  */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<CardPost />} />
      </Routes>
    </>
  );
}

export default App;
