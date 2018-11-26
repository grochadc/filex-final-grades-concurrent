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
      <header>
        <h1>Calificaciones FILEX</h1>
        <h2>Teacher Gonzalo Rocha</h2>
      </header>
      <div className="content">
        {!showGrades ? (
          <CodeForm handleCode={handleCode} />
        ) : (
          <div>
            <Grades gradesExist={studentExists} info={currentStudent} />
            <button onClick={toggleShowGrades}>Atrás</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
