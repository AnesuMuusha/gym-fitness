import React from "react";
import Book from "./components/Book";
import Contact from "./components/Contact";
import Explore from "./components/Explore";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
function App() {
  return (
    <div>
      <NavBar/>
      <Home/>
      <Book/>
      <Explore/>
      <Contact/>
    </div>
  );
}

export default App;