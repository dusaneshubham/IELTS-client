import React from "react";

import { Link, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Post from "./Components/Post";
import NavbarAnkit from "./Layout/Navbar";
import Contact from "./Components/Contact"
function App() {
  return (
    <>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/post" element={<Post/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </>
  );
}

export default App;
