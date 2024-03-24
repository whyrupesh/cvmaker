import { useEffect, useRef, useState } from "react";
import React from "react";
import Pdf from "./Pdf";
import "./index.css";
import EducationForm from "./components/educationform";
import GeneralForm from "./components/generalForm";

function App() {
  const [inputvalue, setinputvalue] = useState("");
  const [coursename, setcoursename] = useState("");
  const [passingyear, setpassingyear] = useState("");

  const [name, setname] = useState("");
  const [emailid, setemailid] = useState("");
  const [github, setgithub] = useState("");
  const [phone, setphone] = useState("");

  const pdfProps = {
    inputvalue,
    setinputvalue,
    coursename,
    setcoursename,
    passingyear,
    setpassingyear,
    name,
    setname,
    emailid,
    setemailid,
    github,
    setgithub,
    phone,
    setphone,
  };
  return (
    <>
      <div className="main-container">
        <div className="input-container">
          <GeneralForm
            name={name}
            setname={setname}
            emailid={emailid}
            github={github}
            phone={phone}
            setemailid={setemailid}
            setgithub={setgithub}
            setphone={setphone}
          />
          <EducationForm
            inputvalue={inputvalue}
            setinputvalue={setinputvalue}
            coursename={coursename}
            setcoursename={setcoursename}
            passingyear={passingyear}
            setpassingyear={setpassingyear}
          />

          <h2>Projects</h2>
          <div id="Projects">
            <form action="">
              <table>
                <tbody>
                  <tr>
                    <td>
                      <label htmlFor="">Project Name:</label>
                    </td>
                    <td>
                      <input type="text" />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label htmlFor="">Description:</label>
                    </td>
                    <td>
                      <input type="text" />
                    </td>
                  </tr>
                </tbody>
              </table>
              <button>Add Projects</button>
            </form>
          </div>

          <h2>Skills</h2>
          <div id="Projects">
            <form action="">
              <table>
                <tbody>
                  <tr>
                    <td>
                      <label htmlFor="">Languages:</label>
                    </td>
                    <td>
                      <input type="text" />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label htmlFor="">FrameWorks:</label>
                    </td>
                    <td>
                      <input type="text" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </form>
          </div>
        </div>
        <Pdf {...pdfProps} />
      </div>
    </>
  );
}

export default App;
