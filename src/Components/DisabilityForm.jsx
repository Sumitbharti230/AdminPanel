import React, { useState } from "react";

const DisabilityForm = () => {
  const [formData, setFormData] = useState({
    disabilityTypeName: "",
    remarks: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("Form submitted successfully!");

    // Reset the form after submission
    setFormData({
      disabilityTypeName: "",
      remarks: "",
    });
  };

  return (
    <div className="max-w-lg mx-auto mt-10 bg-white p-6 shadow-md rounded-lg">
      <h2 className="text-2xl font-bold text-gray-800 text-center mb-5">Disability Type Form</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Disability Type Name */}
        <div>
          <label className="block text-gray-700 font-semibold">Disability Type Name:</label>
          <input
            type="text"
            name="disabilityTypeName"
            value={formData.disabilityTypeName}
            onChange={handleChange}
            required
            className="w-full mt-2 p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
            placeholder="Enter disability type name"
          />
        </div>

        {/* Remarks */}
        <div>
          <label className="block text-gray-700 font-semibold">Remarks:</label>
          <textarea
            name="remarks"
            value={formData.remarks}
            onChange={handleChange}
            required
            className="w-full mt-2 p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
            placeholder="Enter remarks"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default DisabilityForm;
