import React, { useState } from 'react';
import TopBar from "../Components/TopBar";

const TeacherStaffForm = () => {
    const [step, setStep] = useState(1);

    const nextStep = () => setStep(step + 1);
    const prevStep = () => setStep(step - 1);

    return (
        <>


        <div>
        <TopBar />
        </div>
        
        <div className="w-[90%] mx-auto p-8 bg-gray-200 shadow-2xl rounded-lg">
            <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
                🏫 Teacher & Staff Information Form
            </h2>

            <form method="POST" className="grid grid-cols-2 gap-4">
                {step === 1 && (
                    <>

                        {/* Personal Information */}
                        <h3 className="col-span-2 text-xl font-semibold text-gray-700">Personal Information</h3>
                        <div>
                            <label className="block text-gray-700 font-medium">Full Name</label>
                            <input type="text" name="fullName" required className="w-full p-3 border bg-gray-100 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500" placeholder="Full Name" />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-medium">Mobile Number</label>
                            <input type="tel" name="mobileNumber" required className="w-full p-3 border bg-gray-100 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500" placeholder="Mobile Number" />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-medium">Date of Birth</label>
                            <input type="date" name="dob" required className="w-full p-3 border bg-gray-100 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500" />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-medium">Gender</label>
                            <select name="gender" required className="w-full p-3 border bg-gray-100 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500">
                                <option value="">Select Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-gray-700 font-medium">Caste/Ethnicity</label>
                            <input type="text" name="caste" required className="w-full p-3 border bg-gray-100 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500" placeholder="Caste/Ethnicity" />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-medium">EDJ</label>
                            <input type="text" name="edj" required className="w-full p-3 border bg-gray-100 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500" placeholder="EDJ" />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-medium">Disability Status</label>
                            <input type="text" name="disability" required className="w-full p-3 border bg-gray-100 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500" placeholder="Disability Status" />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-medium">Citizenship Number</label>
                            <input type="text" name="citizenship" required className="w-full p-3 border bg-gray-100 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500" placeholder="Citizenship Number" />
                        </div>

                        <div>
                            <label className="block text-gray-700 font-medium">National ID</label>
                            <input type="text" name="nationalId" required className="w-full p-3 border bg-gray-100 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500" placeholder="National ID" />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-medium">Spouse Information</label>
                            <input type="text" name="spouseInfo" required className="w-full p-3 border bg-gray-100 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500" placeholder="Spouse Information" />
                        </div>


                        <div className="flex flex-wrap items-center space-x-6">
                            <div>
                                <label className="block text-gray-700 font-medium">Upload Photo</label>
                                <input type="file" name="photo" required className="w-55 p-2 bg-slate-300 border rounded-lg shadow-sm" />
                            </div>

                            <div>
                                <label className="block text-gray-700 font-medium">Upload Citizenship PIC</label>
                                <input type="file" name="citizenshipPic" required className="w-55 bg-slate-300 p-2 border rounded-lg shadow-sm" />
                            </div>
                        </div>
                    </>
                )}

                {step === 2 && (
                    <>


                        {/* Address Information */}
                        <h3 className="col-span-2 text-xl font-semibold text-gray-700 mt-4">Address Information</h3>
                        <div>
                            <label className="block text-gray-700 font-medium">Province</label>
                            <input type="text" name="province" required className="w-full p-3 border bg-gray-100 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500" placeholder="Province" />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-medium">District</label>
                            <input type="text" name="district" required className="w-full p-3 border bg-gray-100 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500" placeholder="District" />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-medium">Local Level</label>
                            <input type="text" name="localLevel" required className="w-full p-3 border bg-gray-100 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500" placeholder="Local Level" />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-medium">Ward No</label>
                            <input type="number" name="wardNo" required className="w-full p-3 border bg-gray-100 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500" placeholder="Ward No" />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-medium">Tole</label>
                            <input type="text" name="tole" required className="w-full p-3 border bg-gray-100 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500" placeholder="Tole" />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-medium">House No</label>
                            <input type="text" name="houseNo" required className="w-full p-3 border bg-gray-100 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500" placeholder="House No" />
                        </div>
                    </>
                )}

                {step === 3 && (
                    <>


                        {/* Academic Information */}
                        <h3 className="col-span-2 text-xl font-semibold text-gray-700 mt-4">Academic Information</h3>

                        <div>
                            <label className="block text-gray-700 font-medium">Level of Study</label>
                            <input type="text" name="levelOfStudy" required className="w-full p-3 border bg-gray-100 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500" placeholder="Level of Study" />
                        </div>

                        <div>
                            <label className="block text-gray-700 font-medium">Board/University/College</label>
                            <input type="text" name="board" required className="w-full p-3 border bg-gray-100 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500" placeholder="Board/University/College" />
                        </div>

                        <div>
                            <label className="block text-gray-700 font-medium">Registration Number</label>
                            <input type="text" name="registrationNumber" required className="w-full p-3 border bg-gray-100 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500" placeholder="Registration Number" />
                        </div>

                        <div>
                            <label className="block text-gray-700 font-medium">Institution Name</label>
                            <input type="text" name="institutionName" required className="w-full p-3 border bg-gray-100 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500" placeholder="Institution Name" />
                        </div>

                        <div>
                            <label className="block text-gray-700 font-medium">Attachment of Previous Studies Records</label>
                            <input type="file" name="previousRecords" required className="w-55 bg-slate-300 p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500" />
                        </div>
                    </>
                )}


                {step === 4 && (
                    <>

                        {/* Job Information */}
                        <h3 className="col-span-2 text-xl font-semibold text-gray-700 mt-4">Job Information</h3>

                        <div>
                            <label className="block text-gray-700 font-medium">Position</label>
                            <input type="text" name="position" required className="w-full p-3 border bg-gray-100 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500" placeholder="Position" />
                        </div>

                        <div>
                            <label className="block text-gray-700 font-medium">Level</label>
                            <input type="text" name="level" required className="w-full p-3 border bg-gray-100 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500" placeholder="Level" />
                        </div>

                        <div>
                            <label className="block text-gray-700 font-medium">Job Type</label>
                            <select name="jobType" required className="w-full p-3 border bg-gray-100 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500">
                                <option value="">Select Job Type</option>
                                <option value="temporary">Temporary</option>
                                <option value="permanent">Permanent</option>
                                <option value="contract">Contract</option>
                                <option value="daily">Daily Basis</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-gray-700 font-medium">Category</label>
                            <select name="category" required className="w-full p-3 border bg-gray-100 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500">
                                <option value="">Select Category</option>
                                <option value="technical">Technical</option>
                                <option value="non-technical">Non-Technical</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-gray-700 font-medium">Appointment Details</label>
                            <input type="file" name="appointmentDetails" required className="w-55 bg-slate-300 p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500" />
                        </div>
                    </>

                )}


                {step === 5 && (
                    <>


                        {/* Research and Paper Publication */}
                        <h3 className="col-span-2 text-xl font-semibold text-gray-700 mt-4">Research and Paper Publication</h3>
                        <div>
                            <label className="block text-gray-700 font-medium">Title of Research/Paper</label>
                            <input type="text" name="researchTitle" required className="w-full p-3 border bg-gray-100 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500" placeholder="Title of Research/Paper" />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-medium">Author(s)</label>
                            <input type="text" name="authors" required className="w-full p-3 border bg-gray-100 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500" placeholder="Author(s)" />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-medium">Journal/Conference Name</label>
                            <input type="text" name="journalName" required className="w-full p-3 border bg-gray-100 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500" placeholder="Journal/Conference Name" />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-medium">Publication Year</label>
                            <input type="number" name="publicationYear" required className="w-full p-3 border bg-gray-100 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500" placeholder="Publication Year" />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-medium">DOI/ISSN</label>
                            <input type="text" name="doi" required className="w-full p-3 border bg-gray-100 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500" placeholder="DOI/ISSN" />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-medium">Upload Paper</label>
                            <input type="file" name="paperFile" required className="w-55 bg-slate-300 p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500" />
                        </div>
                    </>

                )}



                <div className="col-span-2 flex justify-between mt-4">
                    {step > 1 && <button type="button" onClick={prevStep} className="bg-gray-600 w-36 text-white p-3 rounded-lg">Previous</button>}
                    {step < 5 && <button type="button" onClick={nextStep} className="bg-green-600 w-36 text-white p-3 rounded-lg">Next</button>}
                    {step === 5 && <button type="submit" className="bg-green-600 text-white p-3 rounded-lg">Submit</button>}
                </div>
            </form>
        </div>
        </>
    );
};

export default TeacherStaffForm;
