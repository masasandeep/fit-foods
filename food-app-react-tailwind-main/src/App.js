import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./components/HomeScreen";
import HealthIssues from "./components/HealthIssues";
import Document from "./components/Document";
import Allergies from "./components/Allergies";
import UserProfile from "./components/UserProfile";
import Blogs from "./components/Blogs";
import SignIn from "./components/SignIn"
import SignUp from "./components/Signup"
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/"  element={<HomeScreen />} />
          <Route path="/login"  element={<SignIn />} />
          <Route path="/signup"  element={<SignUp />} />
          <Route path="/healthissues" element={<HealthIssues />} />
          <Route path="/userprofile" element={<UserProfile />} />
          <Route path="/allergies" element={<Allergies/>} />
          <Route path="/document" element={<Document />} />
          <Route path="/blogs" element={<Blogs />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
