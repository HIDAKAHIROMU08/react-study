import React from "react";
import ReactDOM, { render } from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Test } from "./components/pages/Test";
//import User from "./components/pages/Columns";
import { UserData } from "./components/pages/UserData";
import { CreateUserData } from "./components/pages/CreateUserData";

const rootElement = document.getElementById("root");
render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserData />} />
        <Route path="/CreateUserData" element={<CreateUserData />}/>
        <Route path="test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
