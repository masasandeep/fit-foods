import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { mdiEmail, mdiLock } from "@mdi/js";

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
      localStorage.setItem("username", data.username);
      localStorage.setItem("token", data.access);
      navigate("/");
      // Redirect or do something after successful login
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        <div className="mb-4">
          <div className="flex items-center border rounded-full py-2 px-4">
            <span className="mdi" path={mdiEmail}></span>
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="ml-2 outline-none flex-1"
            />
          </div>
        </div>
        <div className="mb-4">
          <div className="flex items-center border rounded-full py-2 px-4">
            <span className="mdi" path={mdiLock}></span>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="ml-2 outline-none flex-1"
            />
          </div>
        </div>
        <div>
          <button
            onClick={handleLogin}
            className="bg-blue-500 hover:bg-blue-600 text-white rounded-full py-2 px-4 w-full"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
