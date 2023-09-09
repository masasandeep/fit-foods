import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { mdiAccount, mdiLock, mdiEmail } from "@mdi/js";

function Signup() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleSignup = async () => {
    const response = await fetch(`/app/signup/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        email,
        first_name: firstName,
        last_name: lastName,
      }),
    });

    if (response.ok) {
      console.log("Successfully signed up");
      navigate("/signin");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-semibold mb-4">Sign Up</h1>
        <div className="mb-4">
          <div className="flex items-center border rounded-full py-2 px-4">
            <span className="mdi" path={mdiAccount}></span>
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="ml-2 outline-none flex-1"
            />
          </div>
        </div>
        <div className="mb-4">
          <div className="flex items-center border rounded-full py-2 px-4">
            <span className="mdi" path={mdiAccount}></span>
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="ml-2 outline-none flex-1"
            />
          </div>
        </div>
        <div className="mb-4">
          <div className="flex items-center border rounded-full py-2 px-4">
            <span className="mdi" path={mdiAccount}></span>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
        <div className="mb-4">
          <div className="flex items-center border rounded-full py-2 px-4">
            <span className="mdi" path={mdiEmail}></span>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="ml-2 outline-none flex-1"
            />
          </div>
        </div>
        <div>
          <button
            onClick={handleSignup}
            className="bg-blue-500 hover:bg-blue-600 text-white rounded-full py-2 px-4 w-full"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}

export default Signup;
