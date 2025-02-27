import React, { useState } from "react";
import TopBar from "./TopBar";

const LevelForm = () => {
  const [formData, setFormData] = useState({
    labelName: "",
    levelCode: "",
    remarks: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("Form submitted successfully!");
  };

  return (
<>

<div className="">
    <TopBar />
  
</div>
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">
          Level Form
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col">
            <label htmlFor="labelName" className="text-gray-600 mb-2">
              Label Name:
            </label>
            <input
              type="text"
              id="labelName"
              name="labelName"
              value={formData.labelName}
              onChange={handleChange}
              required
              className="border-2 border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="levelCode" className="text-gray-600 mb-2">
              Level Code:
            </label>
            <input
              type="text"
              id="levelCode"
              name="levelCode"
              value={formData.levelCode}
              onChange={handleChange}
              required
              className="border-2 border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="remarks" className="text-gray-600 mb-2">
              Remarks:
            </label>
            <textarea
              id="remarks"
              name="remarks"
              value={formData.remarks}
              onChange={handleChange}
              required
              className="border-2 border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              rows="4"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
    </>
  );
};

export default LevelForm;
