import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";

import ScreenTodo from "./components/ScreenTodo";
import ScreenAbout from "./components/ScreenAbout";




const App: React.FC = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<ScreenTodo />} />
        <Route path="/about" element={<ScreenAbout />} />
      </Routes>
    </Router>
  );
};
export default App;
