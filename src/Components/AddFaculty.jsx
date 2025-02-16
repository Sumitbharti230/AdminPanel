import React, { useState } from "react";
import TopBar from "./TopBar";

const AddFaculty = () => {
  const [facultyName, setFacultyName] = useState("");
  const [facultyCode, setFacultyCode] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Faculty Name:", facultyName);
    console.log("Faculty Code:", facultyCode);
    // Add further logic (e.g., API call) here
  };

  return (
    

    <>

<div className="mb-5">
    <TopBar/>
</div>

    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-white shadow-md rounded">
      <div className="mb-4">
        <label htmlFor="facultyName" className="block text-gray-700 font-medium mb-2">
          Faculty Name
        </label>
        <input
          type="text"
          id="facultyName"
          name="facultyName"
          value={facultyName}
          onChange={(e) => setFacultyName(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
          placeholder="Enter Faculty Name"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="facultyCode" className="block text-gray-700 font-medium mb-2">
          Faculty Code
        </label>
        <input
          type="text"
          id="facultyCode"
          name="facultyCode"
          value={facultyCode}
          onChange={(e) => setFacultyCode(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
          placeholder="Enter Faculty Code"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-200"
      >
        Submit
      </button>
    </form>
    </>
  );
};

export default AddFaculty;
