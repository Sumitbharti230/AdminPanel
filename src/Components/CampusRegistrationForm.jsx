import { useState } from "react";

const CampusRegistrationForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        address: "",
        latitude: "",
        longitude: "",
        affiliatingUniversity: "",
        levelOfStudy: "",
        facultyDetails: "",
        contact: "",
        campusChief: "",
        campusChiefEmail: "",
        itEmisDetails: "",
        academicLevel: "",
        academicFaculty: "",
        programOffering: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data Submitted:", formData);
    };

    return (
        <div className="w-[90%] mx-auto p-8 bg-gray-200 shadow-2xl rounded-lg">
            <h2 className="text-3xl font-bold text-black text-center mb-6">
                Campus Registration Form
            </h2>
            <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
                {/* Two Column Fields */}
                <div>
                    <label className="block text-gray-700 font-medium">Campus Name</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter Campus Name"
                        onChange={handleChange}
                        className="w-full p-3 border bg-gray-100 rounded-lg shadow-sm focus:ring-2   focus:ring-blue-500"
                    />
                </div>
                <div>
                    <label className="block text-gray-700 font-medium">Address</label>
                    <input
                        type="text"
                        name="address"
                        placeholder="Enter Address"
                        onChange={handleChange}
                        className="w-full p-3 border bg-gray-100 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div>
                    <label className="block text-gray-700 font-medium">Latitude</label>
                    <input
                        type="text"
                        name="latitude"
                        placeholder="Enter Latitude"
                        onChange={handleChange}
                        className="w-full p-3 border bg-gray-100 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div>
                    <label className="block text-gray-700 font-medium">Longitude</label>
                    <input
                        type="text"
                        name="longitude"
                        placeholder="Enter Longitude"
                        onChange={handleChange}
                        className="w-full p-3 border bg-gray-100 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div>
                    <label className="block text-gray-700 font-medium">Affiliating University</label>
                    <input
                        type="text"
                        name="affiliatingUniversity"
                        placeholder="Enter University Name"
                        onChange={handleChange}
                        className="w-full p-3 border bg-gray-100 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div>
                    <label className="block text-gray-700 font-medium">Level of Study</label>
                    <input
                        type="text"
                        name="levelOfStudy"
                        placeholder="Enter Level of Study"
                        onChange={handleChange}
                        className="w-full p-3 border bg-gray-100 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div>
                    <label className="block text-gray-700 font-medium">Contact</label>
                    <input
                        type="text"
                        name="contact"
                        placeholder="Enter Contact (Phone, Email)"
                        onChange={handleChange}
                        className="w-full p-3 border bg-gray-100 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div>
                    <label className="block text-gray-700 font-medium">Campus Chief</label>
                    <input
                        type="text"
                        name="campusChief"
                        placeholder="Enter Campus Chief Name"
                        onChange={handleChange}
                        className="w-full p-3 border bg-gray-100 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div>
                    <label className="block text-gray-700 font-medium">Campus Chief Email</label>
                    <input
                        type="email"
                        name="campusChiefEmail"
                        placeholder="Enter Campus Chief Email"
                        onChange={handleChange}
                        className="w-full p-3 border bg-gray-100 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="col-span-2">
                    <label className="block text-gray-700 font-medium">Faculty and Program Details</label>
                    <textarea
                        name="facultyDetails"
                        placeholder="Enter Faculty and Program Details"
                        onChange={handleChange}
                        className="w-full p-3 border bg-gray-100 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
                    ></textarea>
                </div>
                <div className="col-span-2">
                    <label className="block text-gray-700 font-medium">Campus IT/EMIS Focal Person Details</label>
                    <textarea
                        name="itEmisDetails"
                        placeholder="Enter IT/EMIS Focal Person Details"
                        onChange={handleChange}
                        className="w-full p-3 border bg-gray-100 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
                    ></textarea>
                </div>
                <h3 className="col-span-2 text-2xl font-semibold text-gray-700 mt-4">
                    Academic Program Offering
                </h3>
                <div>
                    <label className="block text-gray-700 font-medium">Academic Level</label>
                    <input
                        type="text"
                        name="academicLevel"
                        placeholder="Enter Academic Level"
                        onChange={handleChange}
                        className="w-full p-3 border bg-gray-100 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div>
                    <label className="block text-gray-700 font-medium">Faculty</label>
                    <input
                        type="text"
                        name="academicFaculty"
                        placeholder="Enter Faculty"
                        onChange={handleChange}
                        className="w-full p-3 border bg-gray-100 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="col-span-2">
                    <label className="block text-gray-700 font-medium">Program Offering</label>
                    <input
                        type="text"
                        name="programOffering"
                        placeholder="Enter Program Offering"
                        onChange={handleChange}
                        className="w-full p-3 border bg-gray-100 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <button
                    type="submit"
                    className="col-span-2 w-60 bg-blue-800 text-white p-3 rounded-lg text-lg font-semibold shadow-md hover:bg-blue-700 transition"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default CampusRegistrationForm;
