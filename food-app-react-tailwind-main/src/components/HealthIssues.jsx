import React, { useState,useEffect } from "react";
import Navbar from "./Navbar";
import {useNavigate} from "react-router-dom";
function HealthIssues() {
  return (
    <div>
      <Navbar />
      <ParentComponent />
    </div>
  );
}
export default HealthIssues;

function ParentComponent() {
  const [healthIssues, setHealthIssues] = useState([]);
  const [tagSuggestions, setTagSuggestions] = useState([]);
  useEffect(()=>{
    fun()
  },[])
  let fun = async ()=>{
    let response = await fetch(`http://127.0.0.1:8000/app/health/`)
    let data = await response.json()
    setTagSuggestions([...tagSuggestions,...data])
   
  }
  //console.log(tagSuggestions)

  const addHealthIssue = (newHealthIssue) => {
    setHealthIssues([...healthIssues,newHealthIssue]);
    console.log(healthIssues)
  };
  localStorage.setItem('health',JSON.stringify(healthIssues))
  console.log(localStorage.getItem('health'))
  const removeHealthIssue = (index) => {
    const updatedHealthIssues = healthIssues.filter((_, i) => i !== index);
    setHealthIssues(updatedHealthIssues);
  };
 
  return (
    <div className="container mx-auto p-4 text-white min-h-screen bg-gradient-to-r from-black to-gray-800">
      <h1 className="text-4xl mb-4">Select Health Issues</h1>
  
      <HealthIssueInput
        addHealthIssue={addHealthIssue}
        tagSuggestions={tagSuggestions}
      />
     <div className="flex flex-wrap mt-4">
  {healthIssues.map((healthIssue, index) => (
    <div
      key={index}
      className="bg-gray-200 text-black p-2 rounded-lg m-2 flex items-center"
    >
      <span className="mr-2">{healthIssue}</span>
      <button
        onClick={() => removeHealthIssue(index)}
        className="p-2 text-red-500 focus:outline-none"
      >
        ❌
      </button>
    </div>
  ))}
</div>

    </div>
  );
}

function HealthIssueInput({ addHealthIssue, tagSuggestions }) {
  const [inputValue, setInputValue] = useState("");
  const [matchingTags, setMatchingTags] = useState([]);

  const handleInputChange = (value) => {
    setInputValue(value);
    // Filter tag suggestions based on input value
    const filteredTags = tagSuggestions.filter((tag) =>
      tag.name.toLowerCase().includes(value.toLowerCase())
    );
    setMatchingTags(filteredTags);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== "") {
      addHealthIssue(inputValue);
      setInputValue("");
      setMatchingTags([]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    addHealthIssue(suggestion);
    setInputValue("");
    setMatchingTags([]);
  };
  
  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Add a Health Issue"
        value={inputValue}
        onChange={(e) => handleInputChange(e.target.value)}
        className="border rounded-lg px-3 py-2 w-full outline-none focus:border-blue-500 bg-gray-900 text-white"
      />
      {matchingTags.length > 0 && (
        <ul className="border border-gray-300 rounded-lg mt-2">
          {matchingTags.map((tag, index) => (
            <li
              key={index}
              onClick={() => handleSuggestionClick(tag.name)}
              className="cursor-pointer hover:bg-slate-500 hover:rounded-lg px-3 py-2 bg-gray-800"
            >
            <p>{tag.name}</p>
              
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}


