import React, { useState } from "react";
import axios from "axios";

function Login() {
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:9999/login", {
        email: emailId,
        pass: password,
      });
    } catch (error) {
      console.log(error);
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
            Login
          </h2>

          <legend className="fieldset-legend">Email: </legend>
          <input
            type="text"
            className="input"
            style={{ width: "fit-content" }}
            onClick={(e) => setEmailId(e.target.value)}
          />

          <legend className="fieldset-legend">Password:</legend>

          <input
            type="password"
            className="input"
            required
            minLength="8"
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            style={{ width: "fit-content" }}
            onClick={(e) => setPassword(e.target.value)}
          />
          <div
            className=" card-actions"
            style={{ justifyContent: "center", marginTop: "5px" }}
          >
            <button className="btn btn-primary" onClick={handleLogin}>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
