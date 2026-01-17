import React, { useState } from "react";
import axios from "axios";

function Signup() {
  const [userEmail, setuserEmail] = useState("react.mayurpawar@gmail.com");
  const [userPassword, setUserPassword] = useState("Mayur@4912");
  const [userName, setUserName] = useState("Mayur");
  const handleSignUp = async () => {
    try {
      const signUpUser = await axios.post("http://localhost:9999/signup", {
        name: userName,
        email: userEmail,
        password :userPassword
      });
    } catch (error) {
      console.log("Error:", error);
    }
  };
  return (
    <div style={{ justifyContent: "center", display: "flex" }}>
      <div className="card w-96 bg-base-300 card-md shadow-sm">
        <div className="card-body">
          <h2
            className="card-title"
            style={{ justifyContent: "center", margin: "0px" }}
          >
            SignUp
          </h2>

          <legend className="fieldset-legend">Name: </legend>
          <input
            type="text"
            className="input"
            style={{ width: "fit-content" }}
            onChange={(e) => setUserName(e.target.value)}
            value={userName}
          />

          <legend className="fieldset-legend">Email: </legend>
          <input
            type="text"
            className="input"
            style={{ width: "fit-content" }}
            onChange={(e) => setuserEmail(e.target.value)}
            value={userEmail}
          />

          <legend className="fieldset-legend">Password:</legend>

          <input
            type="password"
            className="input"
            required
            minLength="8"
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            style={{ width: "fit-content" }}
            onChange={(e) => setUserPassword(e.target.value)}
            value={userPassword}
          />
          <div
            className=" card-actions"
            style={{ justifyContent: "center", marginTop: "5px" }}
          >
            <button className="btn btn-primary" onClick={handleSignUp}>
              SignUp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
