import React, { useState } from "react";
import CodeForm from "./components/CodeForm";
import Grades from "./components/Grades";
import { useToggle } from "./hooks";
import "./App.css";
const grades = require("./grades.json");

function App() {
  let [showGrades, toggleShowGrades] = useToggle(false);
  let [currentStudent, changeCurrentStudent] = useState({});
  let studentExists = currentStudent !== undefined;
  function handleCode(code) {
    changeCurrentStudent(grades.find(item => item.code === code));
    toggleShowGrades();
  }
  return (
    <div className="App">
        <h1>AVISO: Por razones de fuerza mayor, las calificaciones aún no están disponibles. Favor de revisar más tarde</h1>
    </div>
  );
}

export default App;
