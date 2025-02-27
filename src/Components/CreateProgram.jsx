import React, { useState } from "react";
import TopBar from "./TopBar";

const ProgramForm = () => {
    const [formData, setFormData] = useState({
        programName: "",
        programCode: "",
        remarks: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data Submitted:", formData);
        alert("Form submitted successfully!");

        // Clear the form after submission
        setFormData({
            programName: "",
            programCode: "",
            remarks: "",
        });
    };

    return (

        <>

            <div>
                <TopBar />
            </div>

            <div className="max-w-lg mx-auto mt-10 bg-white p-6 shadow-md rounded-lg">
                <h2 className="text-2xl font-bold text-gray-800 text-center mb-5">Program Form</h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Program Name */}
                    <div>
                        <label className="block text-gray-700 font-semibold">Program Name:</label>
                        <input
                            type="text"
                            name="programName"
                            value={formData.programName}
                            onChange={handleChange}
                            required
                            className="w-full mt-2 p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter program name"
                        />
                    </div>

                    {/* Program Code */}
                    <div>
                        <label className="block text-gray-700 font-semibold">Program Code:</label>
                        <input
                            type="text"
                            name="programCode"
                            value={formData.programCode}
                            onChange={handleChange}
                            required
                            className="w-full mt-2 p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter program code"
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
        </>
    );
};

export default ProgramForm;
