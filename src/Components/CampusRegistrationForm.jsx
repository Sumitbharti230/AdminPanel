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
        <div className="w-[90%] mx-auto p-8 bg-gray-100 shadow-2xl rounded-lg  ">
            <h2 className="text-3xl font-bold text-black text-center mb-6">
                Campus Registration Form
            </h2>
            <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4 ">
                {/* Two Column Fields */}
                <input
                    type="text"
                    name="name"
                    placeholder="Campus Name"
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
                />

                <input
                    type="text"
                    name="latitude"
                    placeholder="Latitude"
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="text"
                    name="longitude"
                    placeholder="Longitude"
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
                />

                <input
                    type="text"
                    name="affiliatingUniversity"
                    placeholder="Affiliating University"
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="text"
                    name="levelOfStudy"
                    placeholder="Level of Study"
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
                />

                <input
                    type="text"
                    name="contact"
                    placeholder="Contact (Phone, Email)"
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="text"
                    name="campusChief"
                    placeholder="Campus Chief Name"
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
                />

                <input
                    type="email"
                    name="campusChiefEmail"
                    placeholder="Campus Chief Email"
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
                />

                {/* Full-width textarea fields */}
                <textarea
                    name="facultyDetails"
                    placeholder="Faculty and Program Details"
                    onChange={handleChange}
                    className="col-span-2 w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
                ></textarea>

                <textarea
                    name="itEmisDetails"
                    placeholder="Campus IT/EMIS Focal Person Details"
                    onChange={handleChange}
                    className="col-span-2 w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
                ></textarea>

                {/* Academic Section */}
                <h3 className="col-span-2 text-2xl font-semibold text-black-600 mt-4">
                    Academic Program Offering
                </h3>

                <input
                    type="text"
                    name="academicLevel"
                    placeholder="Academic Level"
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="text"
                    name="academicFaculty"
                    placeholder="Faculty"
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="text"
                    name="programOffering"
                    placeholder="Program Offering"
                    onChange={handleChange}
                    className="col-span-2 w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
                />

                {/* Submit Button - Full Width */}
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
