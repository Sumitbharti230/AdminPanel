import React, { useState } from "react";
import TopBar from "../Components/TopBar";

const LevelForm = () => {
  const [formData, setFormData] = useState({
    labelName: "",
    levelCode: "",
    remarks: "",
  });

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    try {
      console.log("Form Data Submitted:", formData);
      setSuccess("Level added successfully!");
      setFormData({ labelName: "", levelCode: "", remarks: "" });
    } catch (err) {
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <>
      <div className="mb-3">
        <TopBar />
      </div>

      <div className="flex items-center justify-center p-3 bg-gray-50 ">
        <div className="w-full max-w-4xl bg-white p-10 shadow-lg rounded-lg border border-gray-300">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
            Level Form
          </h2>

          {/* Error / Success Messages */}
          {error && (
            <div className="mb-4 p-3 text-red-800 font-semibold bg-red-200 rounded text-center">
              {error}
            </div>
          )}
          {success && (
            <div className="mb-4 p-3 text-green-800 font-semibold bg-green-200 rounded text-center">
              {success}
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Label Name */}
            <div className="flex flex-col">
              <label className="text-gray-700 font-semibold mb-1">
                Label Name:
              </label>
              <input
                type="text"
                id="labelName"
                name="labelName"
                value={formData.labelName}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
                placeholder="Enter Label Name"
                required
              />
            </div>

            {/* Level Code */}
            <div className="flex flex-col">
              <label className="text-gray-700 font-semibold mb-1">
                Level Code:
              </label>
              <input
                type="text"
                id="levelCode"
                name="levelCode"
                value={formData.levelCode}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
                placeholder="Enter Level Code"
                required
              />
            </div>

            {/* Remarks */}
            <div className="flex flex-col">
              <label className="text-gray-700 font-semibold mb-1">Remarks:</label>
              <textarea
                id="remarks"
                name="remarks"
                value={formData.remarks}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition resize-none"
                placeholder="Enter Remarks"
                rows="4"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="w-full sm:w-auto bg-blue-600 px-6 py-3 text-white rounded-lg hover:bg-blue-700 transition duration-300 text-lg font-semibold"
              >
                Add Level
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LevelForm;
