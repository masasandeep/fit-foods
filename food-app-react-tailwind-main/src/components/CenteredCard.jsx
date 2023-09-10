import React, { useState } from "react";

const UserProfileCard = () => {
  const [userId, setUserId] = useState();
  const [password, setPassword] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [editMode, setEditMode] = useState(false);
  const [email, setEmail] = useState();

  const handleSaveChanges = () => {
    // Logic to save changes to the user's profile
    setEditMode(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-black to-gray-800">
    <div className="max-w-md w-full mx-4">
      <div className="bg-white shadow-lg rounded-lg p-6">
          <div className="p-2">
            {editMode ? (
              <div className="mb-2">
                <label htmlFor="userId">User ID:</label>
                <input
                  type="text"
                  id="userId"
                  placeholder="enter user id"
                  value={userId}
                  onChange={(e) => setUserId(e.target.value)}
                  className="w-full text-gray-700 border rounded px-2 py-1 focus:outline-none focus:border-indigo-500"
                />
              </div>
            ) : (
              <div>User ID: {userId ? userId : "Enter User ID"}</div>
            )}
            {editMode ? (
              <div className="mb-2">
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  id="password"
                  placeholder="enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full text-gray-700 border rounded px-2 py-1 focus:outline-none focus:border-indigo-500"
                />
              </div>
            ) : (
              <div>Password: {password ? password : "Enter Password"}</div>
            )}
            {editMode ? (
              <div className="mb-2">
                <label htmlFor="firstName">First Name:</label>
                <input
                  type="text"
                  id="firstName"
                  value={firstName}
                  placeholder="enter first name"
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full text-gray-700 border rounded px-2 py-1 focus:outline-none focus:border-indigo-500"
                />
              </div>
            ) : (
              <div>First Name: {firstName ? firstName : "Enter First Name"}</div>
            )}
            {editMode ? (
              <div className="mb-2">
                
                <label htmlFor="lastName">Last Name:</label>
                <input
                  type="text"
                  id="lastName"
                  placeholder="enter last name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-full text-gray-700 border rounded px-2 py-1 focus:outline-none focus:border-indigo-500"
                />
              </div>
            ) : (
              <div>Last Name: {lastName ? lastName : "Enter Last Name"}</div>
            )}
            {editMode ? (
              <div className="mb-2">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  placeholder="enter email"
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full text-gray-700 border rounded px-2 py-1 focus:outline-none focus:border-indigo-500"
                />
              </div>
            ) : (
              <div>Email: {email ? email : "Enter email address"}</div>
            )}
            {/* {editMode ? (
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
            )} */}

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
