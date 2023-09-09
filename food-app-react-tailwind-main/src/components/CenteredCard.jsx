import React, { useState } from "react";

const UserProfileCard = () => {
  const [userId, setUserId] = useState("user123");
  const [password, setPassword] = useState("password123");
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Doe");
  const [email, setEmail] = useState("john@example.com");
  const [address, setAddress] = useState("Chatakpur-3, Dhangadhi Kailali");
  const [newImage, setNewImage] = useState("");
  const [editMode, setEditMode] = useState(false);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setNewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveChanges = () => {
    // Logic to save changes to the user's profile
    setEditMode(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-black to-gray-800">
    <div className="max-w-md w-full mx-4">
      <div className="bg-white shadow-lg rounded-lg p-6">
        <div className="photo-wrapper mb-4 text-center">
            {/* <img
              className="w-40 h-40 rounded-full mx-auto"
              src={
                newImage ||
                "https://www.gravatar.com/avatar/2acfb745ecf9d4dccb3364752d17f65f?s=260&d=mp"
              }
              alt="John Doe"
            /> */}
            {editMode && (
              <input
                type="file"
                accept=".jpg"
                onChange={handleImageUpload}
                className="mt-2 block w-full focus:outline-none"
              />
            )}
          </div>
          <div className="p-2">
            {editMode ? (
              <div className="mb-2">
                <label htmlFor="userId">User ID:</label>
                <input
                  type="text"
                  id="userId"
                  value={userId}
                  onChange={(e) => setUserId(e.target.value)}
                  className="w-full text-gray-700 border rounded px-2 py-1 focus:outline-none focus:border-indigo-500"
                />
              </div>
            ) : (
              <div>User ID: {userId}</div>
            )}
            {editMode ? (
              <div className="mb-2">
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full text-gray-700 border rounded px-2 py-1 focus:outline-none focus:border-indigo-500"
                />
              </div>
            ) : (
              <div>Password: {password}</div>
            )}
            {editMode ? (
              <div className="mb-2">
                <label htmlFor="firstName">First Name:</label>
                <input
                  type="text"
                  id="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full text-gray-700 border rounded px-2 py-1 focus:outline-none focus:border-indigo-500"
                />
              </div>
            ) : (
              <div>First Name: {firstName}</div>
            )}
            {editMode ? (
              <div className="mb-2">
                <label htmlFor="lastName">Last Name:</label>
                <input
                  type="text"
                  id="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-full text-gray-700 border rounded px-2 py-1 focus:outline-none focus:border-indigo-500"
                />
              </div>
            ) : (
              <div>Last Name: {lastName}</div>
            )}
            {editMode ? (
              <div className="mb-2">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full text-gray-700 border rounded px-2 py-1 focus:outline-none focus:border-indigo-500"
                />
              </div>
            ) : (
              <div>Email: {email}</div>
            )}
            {editMode ? (
              <div className="mb-2">
                <label htmlFor="address">Address:</label>
                <input
                  type="text"
                  id="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full text-gray-700 border rounded px-2 py-1 focus:outline-none focus:border-indigo-500"
                />
              </div>
            ) : (
              <div>Address: {address}</div>
            )}

            <div className="text-center my-3">
              {editMode ? (
                <button
                  onClick={handleSaveChanges}
                  className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 focus:outline-none"
                >
                  Save Changes
                </button>
              ) : (
                <a
                  onClick={() => setEditMode(true)}
                  className="text-sm text-indigo-500 italic hover:underline hover:text-indigo-600 cursor-pointer"
                >
                  Edit Profile
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfileCard;
