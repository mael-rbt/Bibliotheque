import { useContext } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LibrairieContext } from "./provider";
import './App.css';
import Ajout from "./components/Ajout";
import Home from "./components/Home";
import Nav from "./components/Nav";

function App() {
  return (
    <>
        <BrowserRouter>
        <Nav />
          <Routes>
            <Route path="/ajout" element={<Ajout />}/>
            <Route path="/" element={<Home />}/>
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App;
