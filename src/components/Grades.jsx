import React from "react";

export default function Grades(props) {
  if (props.gradesExist) {
    const grades = [
      parseFloat(props.info.midterm.written),
      parseFloat(props.info.midterm.oral),
      parseFloat(props.info.final.written),
      parseFloat(props.info.final.oral),
      parseFloat(props.info.moodle),
      parseFloat(props.info.reading),
      parseFloat(props.info.conversation),
      ...props.info.projects.map(value => parseFloat(value)),
      parseFloat(props.info.projectExtra)
    ];
    const finalGrade = grades.reduce((accum, value) => accum + value);
    return (
      <div className="gradesContainer">
        <p>
          <strong>Alumno:</strong> {props.info.code} {props.info.name.first}{" "}
          {props.info.name.last[0]} {props.info.name.last[1]}
        </p>
        <table>
          <tbody>
            <tr>
              <th colSpan="2">Midterm</th>
              <th colSpan="2">Final</th>
              <th colSpan="3">Proyectos</th>
              <th colSpan="3">Otros</th>
            </tr>
            <tr>
              <th>Escrito</th>
              <th>Oral</th>
              <th>Escrito</th>
              <th>Oral</th>
              <th>Primero</th>
              <th>Segundo</th>
              <th>Tercero</th>
              <th>Plataforma</th>
              <th>Comprension Lectora</th>
              <th>Conversacion</th>
            </tr>
            <tr>
              <td>{props.info.midterm.written}</td>
              <td>{props.info.midterm.oral}</td>
              <td>{props.info.final.written}</td>
              <td>{props.info.final.oral}</td>
              {props.info.projects.map(project => (
                <td>{project}</td>
              ))}
              <td>{props.info.moodle}</td>
              <td>{props.info.reading}</td>
              <td>{props.info.conversation}</td>
            </tr>
            <tr>
              <th colSpan="5">Total:</th>
              <td colSpan="5">{Math.round(finalGrade)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  } else {
    return <div>Codigo inexistente</div>;
  }
}
