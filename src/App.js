import React from "react";
import Contact from "./components/Contact";
import Explore from "./components/Explore";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Meals from "./components/meals/Meals";
// import Try from "./components/meals/Try";
// import Schedule from "./components/Schedule";
// import Book from "./components/Book";
function App() {
  return (
    <div>
      <NavBar/>
    
      <Home/>
      {/* <Schedule/> */}
      {/* <Book/> */}
      {/* <Try></Try> */}
      <Explore/>
      <Meals/>
      <Contact/>
    </div>
  );
}

export default App;