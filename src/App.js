import React from "react";
import "./App.css";
import Form from "./components/Form";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Feedback from "./components/Feedback";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Form />}></Route>
        <Route path="/feedback" element={<Feedback />}></Route>
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
