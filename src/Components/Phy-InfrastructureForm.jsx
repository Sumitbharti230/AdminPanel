import React, { useState } from "react";

const InfrastructureForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    code: "",
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
      name: "",
      code: "",
      remarks: "",
    });
  };

  return (
    <div className="container mx-auto px-4 mt-10">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <h2 className="text-2xl font-bold text-gray-800 text-center p-4">
          Infrastructure Form
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4 p-6">
          {/* Name */}
          <div>
            <label className="block text-gray-700 font-semibold" htmlFor="name">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full mt-2 p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
              placeholder="Enter infrastructure name"
            />
          </div>

          {/* Code */}
          <div>
            <label className="block text-gray-700 font-semibold" htmlFor="code">
              Code:
            </label>
            <input
              type="text"
              id="code"
              name="code"
              value={formData.code}
              onChange={handleChange}
              required
              className="w-full mt-2 p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
              placeholder="Enter infrastructure code"
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

export default InfrastructureForm;
