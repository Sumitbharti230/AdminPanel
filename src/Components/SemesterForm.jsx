import React, { useState } from "react";

const SemesterForm = () => {
  const [formData, setFormData] = useState({
    semName: "",
    semCode: "",
    remarks: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("Semester added successfully!");

    // Reset form fields after submission
    setFormData({
      semName: "",
      semCode: "",
      remarks: "",
    });
  };

  return (
    <div className="container mx-auto px-4 mt-10">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <h2 className="text-2xl font-bold text-gray-800 text-center p-4">
          Study Semester Form
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4 p-6">
          {/* Semester Name */}
          <div>
            <label className="block text-gray-700 font-semibold" htmlFor="semName">
              Semester Name:
            </label>
            <input
              type="text"
              id="semName"
              name="semName"
              value={formData.semName}
              onChange={handleChange}
              required
              className="w-full mt-2 p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
              placeholder="Enter semester name"
            />
          </div>

          {/* Semester Code */}
          <div>
            <label className="block text-gray-700 font-semibold" htmlFor="semCode">
              Semester Code:
            </label>
            <input
              type="text"
              id="semCode"
              name="semCode"
              value={formData.semCode}
              onChange={handleChange}
              required
              className="w-full mt-2 p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
              placeholder="Enter semester code"
            />
          </div>

          {/* Remarks */}
          <div>
            <label className="block text-gray-700 font-semibold" htmlFor="remarks">
              Remarks:
            </label>
            <textarea
              id="remarks"
              name="remarks"
              value={formData.remarks}
              onChange={handleChange}
              required
              className="w-full mt-2 p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
              placeholder="Enter remarks"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SemesterForm;
