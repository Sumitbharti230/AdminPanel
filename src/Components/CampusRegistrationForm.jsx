import React, { useState } from "react";

const CampusRegistrationModule = () => {
    const [activeTab, setActiveTab] = useState("campusInfo");

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-6">Campus Registration Module</h2>

            {/* Tabs Navigation */}
            <div className="flex gap-4 border-b mb-6">
                <button
                    onClick={() => setActiveTab("campusInfo")}
                    className={`pb-2 px-4 transition ${activeTab === "campusInfo"
                            ? "border-b-2 border-blue-600 text-blue-600 font-semibold"
                            : "text-gray-500 hover:text-blue-600"
                        }`}
                >
                    Information about Campus
                </button>
                <button
                    onClick={() => setActiveTab("academicProgram")}
                    className={`pb-2 px-4 transition ${activeTab === "academicProgram"
                            ? "border-b-2 border-blue-600 text-blue-600 font-semibold"
                            : "text-gray-500 hover:text-blue-600"
                        }`}
                >
                    Academic Program Offering Records
                </button>
            </div>

            {/* Tab Content */}
            <div className="bg-white rounded-lg shadow p-6">
                {activeTab === "campusInfo" && (
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <label htmlFor="campusName" className="block font-semibold">Campus Name</label>
                            <input
                                id="campusName"
                                placeholder="Campus Name"
                                className="border p-2 w-full rounded-md"
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="space-y-2">
                                <label htmlFor="province" className="block font-semibold">Province</label>
                                <input
                                    id="province"
                                    placeholder="Province"
                                    className="border p-2 w-full rounded-md"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="district" className="block font-semibold">District</label>
                                <input
                                    id="district"
                                    placeholder="District"
                                    className="border p-2 w-full rounded-md"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="localLevel" className="block font-semibold">Local Level</label>
                                <input
                                    id="localLevel"
                                    placeholder="Local Level"
                                    className="border p-2 w-full rounded-md"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label htmlFor="latitude" className="block font-semibold">Latitude</label>
                                <input
                                    id="latitude"
                                    placeholder="Latitude"
                                    type="number"
                                    step="any"
                                    className="border p-2 w-full rounded-md"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="longitude" className="block font-semibold">Longitude</label>
                                <input
                                    id="longitude"
                                    placeholder="Longitude"
                                    type="number"
                                    step="any"
                                    className="border p-2 w-full rounded-md"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="affiliatingUniversity" className="block font-semibold">Affiliating University</label>
                            <input
                                id="affiliatingUniversity"
                                placeholder="Affiliating University"
                                className="border p-2 w-full rounded-md"
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="levelOfStudy" className="block font-semibold">Level of Study</label>
                            <input
                                id="levelOfStudy"
                                placeholder="Level of Study"
                                className="border p-2 w-full rounded-md"
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="faculty" className="block font-semibold">Faculty and Program Details</label>
                            <input
                                id="faculty"
                                placeholder="Faculty and Program Details"
                                className="border p-2 w-full rounded-md"
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label htmlFor="landline" className="block font-semibold">Landline Phone</label>
                                <input
                                    id="landline"
                                    placeholder="Landline Phone"
                                    type="tel"
                                    className="border p-2 w-full rounded-md"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="mobile" className="block font-semibold">Mobile Number</label>
                                <input
                                    id="mobile"
                                    placeholder="Mobile Number"
                                    type="tel"
                                    className="border p-2 w-full rounded-md"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="block font-semibold">Email</label>
                                <input
                                    id="email"
                                    placeholder="email"
                                    type="email"
                                    className="border p-2 w-full rounded-md"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="campusChief" className="block font-semibold">Campus Chief Name</label>
                            <input
                                id="campusChief"
                                placeholder="Campus Chief Name"
                                className="border p-2 w-full rounded-md"
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="focalPerson" className="block font-semibold">IT/EMIS Focal Person Details</label>
                            <input
                                id="focalPerson"
                                placeholder="IT/EMIS Focal Person Details"
                                className="border p-2 w-full rounded-md"
                            />
                        </div>
                    </div>
                )}

                {activeTab === "academicProgram" && (
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <label htmlFor="programLevel" className="block font-semibold">Level</label>
                            <input
                                id="programLevel"
                                placeholder="Level"
                                className="border p-2 w-full rounded-md"
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="faculty" className="block font-semibold">Faculty</label>
                            <input
                                id="faculty"
                                placeholder="Faculty"
                                className="border p-2 w-full rounded-md"
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="programOffering" className="block font-semibold">Program Offering</label>
                            <input
                                id="programOffering"
                                placeholder="Program Offering"
                                className="border p-2 w-full rounded-md"
                            />
                        </div>
                    </div>
                )}

                {/* Submit Button */}
                <div className="mt-6">
                    <button
                        type="submit"
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                    >
                        Submit Registration
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CampusRegistrationModule;
