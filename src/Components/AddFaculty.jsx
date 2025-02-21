import React, { useState } from "react";
import TopBar from "./TopBar";

const base_Url = import.meta.env.VITE_BASE_URL; // Ensure this is set in your .env file

const AddFaculty = () => {
  const [facultyName, setFacultyName] = useState("");
  const [facultyCode, setFacultyCode] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const submitForm = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    try {
      const payload = { facultyName, facultyCode };

      const response = await fetch(`${base_Url}/faculty/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to create faculty");
      }

      setSuccess("Faculty added successfully!");
      setFacultyName("");
      setFacultyCode("");
    } catch (err) {
      console.error("Error creating faculty:", err);
      setError(err.message);
    }
  };

  return (
    <>
      <div className="mb-5">
        <TopBar />
      </div>

      <form
        onSubmit={submitForm}
        className="max-w-md mx-auto p-5 bg-gray-100  shadow-xl rounded-sm border-slate-200 border flex flex-wrap flex-col"
      >
        <h1 className="text-2xl items-center flex justify-center mb-5 font-bold">Faculty Form</h1>


        {error && (
          <div className="mb-4 p-3 text-red-800 font-bold bg-red-200 rounded">
            {error}
          </div>
        )}
        {success && (
          <div className="mb-6 p-3 text-green-800 font-bold bg-green-200 rounded">
            {success}
          </div>
        )}



        <div className="mb-4">
          <label
            htmlFor="facultyName"
            className="block text-gray-700 font-medium mb-2"
          >
            Faculty Name
          </label>
          <input
            type="text"
            id="facultyName"
            value={facultyName}
            onChange={(e) => setFacultyName(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Enter Faculty Name"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="facultyCode"
            className="block text-gray-700 font-medium mb-2"
          >
            Faculty Code
          </label>
          <input
            type="text"
            id="facultyCode"
            value={facultyCode}
            onChange={(e) => setFacultyCode(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Enter Faculty Code"
            required
          />
        </div>

        <button
          type="submit"
          title="submit"
          className="w-full py-2 px-4 bg-blue-600 text-white font-bold rounded hover:bg-blue-700 transition duration-200"
        >
          Add Faculty
        </button>
      </form>
    </>
  );
};

export default AddFaculty;
