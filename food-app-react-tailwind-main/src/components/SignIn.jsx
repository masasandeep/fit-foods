import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const response = await fetch(`http://127.0.0.1:8000/app/login/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      const data = await response.json();
      localStorage.setItem("token", data.access);
      localStorage.setItem("username",data.username);
      console.log('huy',jwt_decode(data.access));
      console.log('dell',data.username);
      console.log(localStorage.getItem('username'));
      navigate("/");
      // Redirect or do something after successful login
    } else {
      alert("invalid credentials");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default SignIn;
