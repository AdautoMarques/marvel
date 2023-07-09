import React from "react";
import { Main } from "./Components/Main";
import './Components/styles.css';
import { Routes, Route } from "react-router-dom";
import { Marvel } from "./Components/Marvel";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="/:id" element={<Marvel />} />
      </Routes>
      
    </>
  )
}
export default App