import { useRef } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import React from "react";
import "./Pdf.css";
import Education from "./components/education";
import { useEffect } from "react";
import General from "./components/general";

export default function Pdf(props) {
  const {
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
  } = props;

  const educationProps = {
    inputvalue,
    setinputvalue,
    coursename,
    setcoursename,
    passingyear,
    setpassingyear,
  };

  const pdfRef = useRef();

  const downloadPDF = () => {
    const input = pdfRef.current;
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4", true);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const imgX = (pdfWidth - imgWidth * ratio) / 2;
      const imgY = 10;
      pdf.addImage(
        imgData,
        "PNG",
        imgX,
        imgY,
        imgWidth * ratio,
        imgHeight * ratio
      );
      pdf.save("invoice.pdf");
    });
  };

  return (
    <>
      <div className="page">
        <div className="container" ref={pdfRef}>
          {/* <div className="name">
            <h3>Rupesh Kumar Singh</h3>
          </div>
          <div className="contact">
            <p>
              <i>srupeshkumarsingh</i> | <i>7633856391</i> |{" "}
              <i>github.com/whyrupesh</i>
            </p>
          </div> */}
          <General
            name={name}
            setname={setname}
            emailid={emailid}
            setemailid={setemailid}
            github={github}
            setgithub={setgithub}
            phone={phone}
            setphone={setphone}
          />

          <Education {...educationProps} />
          <br />
          <div className="work-experience">
            <p>
              <strong>Work Experience</strong>
            </p>
            <p>No work experience as of now</p>
          </div>
          <br />
          <div className="projects">
            <p>
              <strong>Projects</strong>
            </p>
            <p>Tic-Tac-Toe</p>
          </div>
          <br />
          <div className="technical-skills">
            <p>
              <strong>Technical Skills</strong>
            </p>
            <p>HTML, CSS, JavaScript, React, Node.js</p>
          </div>
          <br />
        </div>
      </div>
      <div className="button-div">
        <button className="btn-primary" onClick={downloadPDF}>
          Download Resume
        </button>
      </div>
    </>
  );
}
