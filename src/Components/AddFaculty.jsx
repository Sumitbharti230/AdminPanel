import React, { useState } from "react";
import TopBar from "./TopBar";

const base_Url = import.meta.env.VITE_BASE_URL; // Ensure this is set in your .env file

const AddFaculty = () => {
  const [facultyName, setFacultyName] = useState("");
  const [facultyCode, setFacultyCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      // Prepare the data to be sent
      const payload = { facultyName, facultyCode };

      // Send POST request to create a new faculty
      const response = await fetch(`${base_Url}/faculty/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      // Check if the request was successful
      if (!response.ok) {
        throw new Error("Failed to create faculty");
      }

      // Optionally, parse the JSON response
      const result = await response.json();
      console.log("Faculty created:", result);

      // Set success message and clear form fields
      setSuccess("Faculty created successfully!");
      setFacultyName("");
      setFacultyCode("");
    } catch (err) {
      console.error("Error creating faculty:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="mb-5">
        <TopBar />
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
        {error && <p className="text-red-500 mb-4">{error}</p>}
        {success && <p className="text-green-500 mb-4">{success}</p>}
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-200"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </>
  );
};

export default AddFaculty;
