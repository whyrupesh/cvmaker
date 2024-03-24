import React, { useState } from "react";

export default function EducationForm({
  inputvalue,
  setinputvalue,
  coursename,
  setcoursename,
  passingyear,
  setpassingyear,
}) {
  function handleSubmit(e) {
    e.preventDefault();

    return (
      <div className="education">
        <p>
          <strong>Education</strong>
        </p>
        <p className="college-name">{inputvalue}</p>
        <p className="place">{coursename}</p>
        <p className="year">{passingyear}</p>
      </div>
    );
  }
  return (
    <>
      <h2>Education</h2>
      <div id="education">
        <form action="">
          <table>
            <tbody>
              <tr>
                <td>
                  <label htmlFor="college-name">College Name:</label>
                </td>
                <td>
                  <input
                    value={inputvalue}
                    onChange={(e) => {
                      setinputvalue(e.target.value);
                    }}
                    type="text"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="course">Course:</label>
                </td>
                <td>
                  <input
                    value={coursename}
                    onChange={(e) => {
                      setcoursename(e.target.value);
                    }}
                    type="text"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="passing-year">Passing year:</label>
                </td>
                <td>
                  <input
                    value={passingyear}
                    onChange={(e) => {
                      setpassingyear(e.target.value);
                    }}
                    type="text"
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <button onClick={handleSubmit}>Submit</button>
        </form>
      </div>
    </>
  );
}
