import React from "react";
import Book from "./components/Book";
import Contact from "./components/Contact";
import Explore from "./components/Explore";
import Home from "./components/Home";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Home/>
      <Book/>
      <Explore/>
      <Contact/>
    </div>
  );
}

export default App;
