import React, { useState } from "react";
import EducationForm from "./educationform";

export default function Education(props) {
  return (
    <>
      <div className="education">
        <p>
          <strong>Education</strong>
        </p>
        <p className="college-name">{props.inputvalue}</p>
        <p className="place">{props.coursename}</p>
        <p className="year">{props.passingyear}</p>
      </div>
    </>
  );
}
