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
        <h1>AVISO: Las calificaciones ya estan listas. Pueden checarlas con su codigo en la siguiente direccion:</h1>
        Calificaciones aqui: <a href="https://filex-grades.herokuapp.com/"> https://filex-grades.herokuapp.com/</a>
    </div>
  );
}

export default App;
