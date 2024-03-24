import React from "react";
import { useState } from "react";

export default function GeneralForm({
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
      <h2>General Information</h2>
      <form action="">
        <table>
          <tbody>
            <tr>
              <td>
                <label htmlFor="name">Name:</label>
              </td>
              <td>
                <input
                  value={name}
                  onChange={(e) => {
                    setname(e.target.value);
                  }}
                  type="text"
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="email">Email id:</label>
              </td>
              <td>
                <input
                  value={emailid}
                  onChange={(e) => {
                    setemailid(e.target.value);
                  }}
                  type="text"
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="github">Github:</label>
              </td>
              <td>
                <input
                  value={github}
                  onChange={(e) => {
                    setgithub(e.target.value);
                  }}
                  type="text"
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="phonenumber">Phone number:</label>
              </td>
              <td>
                <input
                  value={phone}
                  onChange={(e) => {
                    setphone(e.target.value);
                  }}
                  type="text"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </>
  );
}
