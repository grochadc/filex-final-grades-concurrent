import React, { useState } from "react";
function CodeForm(props) {
  let [code, changeCode] = useState("");
  return (
    <div className="codeForm">
      <label>Codigo:</label>{" "}
      <input type="text" onChange={({ target }) => changeCode(target.value)} />{" "}
      <button onClick={() => props.handleCode(code)}>Buscar</button>
    </div>
  );
}

export default CodeForm;
