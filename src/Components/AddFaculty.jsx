import React, { useState } from "react";
import TopBar from "../Components/TopBar";

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
      <div className="mb-3">
        <TopBar />
      </div>

      <div className="flex  justify-center  bg-gray-50 p-3">
        <div className="w-full max-w-3xl bg-white p-8 shadow-lg rounded-lg border border-gray-300 mt-5">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
            Faculty Form
          </h2>

          {error && (
            <div className="mb-4 p-3 text-red-800 font-semibold bg-red-200 rounded">
              {error}
            </div>
          )}
          {success && (
            <div className="mb-4 p-3 text-green-800 font-semibold bg-green-200 rounded">
              {success}
            </div>
          )}

          <form onSubmit={submitForm} className="space-y-6">
            {/* Faculty Name */}
            <div>
              <label className="block text-gray-700 font-semibold mb-1">
                Faculty Name:
              </label>
              <input
                type="text"
                id="facultyName"
                value={facultyName}
                onChange={(e) => setFacultyName(e.target.value)}
                className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
                placeholder="Enter Faculty Name"
                required
              />
            </div>

            {/* Faculty Code */}
            <div>
              <label className="block text-gray-700 font-semibold mb-1">
                Faculty Code:
              </label>
              <input
                type="text"
                id="facultyCode"
                value={facultyCode}
                onChange={(e) => setFacultyCode(e.target.value)}
                className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
                placeholder="Enter Faculty Code"
                required
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
            <button
              type="submit"
              className=" bg-blue-600 p-3 text-white rounded-lg hover:bg-blue-700 transition duration-300 text-lg font-semibold"
            >
              Add Faculty
            </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddFaculty;
