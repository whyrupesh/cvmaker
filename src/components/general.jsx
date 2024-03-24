import React from "react";
import { useState } from "react";

export default function General({
  name,
  setname,
  emailid,
  setemailid,
  github,
  setgithub,
  phone,
  setphone,
}) {
  return (
    <>
      <div className="name">
        <h3>{name}</h3>
      </div>
      <div className="contact">
        <p>
          <i>{emailid}</i> | <i>{phone}</i> | <i>{github}</i>
        </p>
      </div>
    </>
  );
}
