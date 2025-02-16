import { useState } from "react";
import TopBar from "../Components/TopBar";


const StudentRegistrationForm = () => {
    const [step, setStep] = useState(1);

    const nextStep = () => setStep(step + 1);
    const prevStep = () => setStep(step - 1);

    return (
        <>
            <div className="mb-5">
                <TopBar />
            </div>
            <div className="w-[90%] mx-auto p-8 bg-gray-200 shadow-2xl rounded-lg">
                <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
                    📋 Student Enrollment Form
                </h2>

                <form method="POST" className="grid grid-cols-2 gap-4">
                    {step === 1 && (
                        <>
                            {/* Personal Information */}
                            <h3 className="col-span-2 text-xl font-semibold text-gray-700">
                                Personal Information
                            </h3>

                            <div className="col-span-2 flex gap-x-4">
                                <div className="w-1/3">
                                    <label className="block text-gray-700 font-medium">First Name</label>
                                    <input type="text" name="firstName" required className="w-full p-3 border bg-gray-100 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500" placeholder="First Name" />
                                </div>
                                <div className="w-1/3">
                                    <label className="block text-gray-700 font-medium">Middle Name</label>
                                    <input type="text" name="middleName" className="w-full p-3 border bg-gray-100 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500" placeholder="Middle Name (optional)" />
                                </div>
                                <div className="w-1/3">
                                    <label className="block text-gray-700 font-medium">Last Name</label>
                                    <input type="text" name="lastName" required className="w-full p-3 border bg-gray-100 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500" placeholder="Last Name" />
                                </div>
                            </div>

                            <div>
                                <label className="block text-gray-700 font-medium">Contact (Mobile)</label>
                                <input type="tel" name="contact" required className="w-full p-3 border bg-gray-100 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500" placeholder="Contact (Mobile)" />
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

                            <div className="flex items-center space-x-6">
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
                            <h3 className="col-span-2 text-xl font-semibold text-gray-700 mt-4">
                                Address Information
                            </h3>

                            {/* Permanent Address */}
                            <div className="col-span-2">
                                <h4 className="text-lg font-semibold text-gray-600">Permanent Address</h4>
                            </div>

                            <div>
                                <label className="block text-gray-700 font-medium">Province</label>
                                <input type="text" name="permanentProvince" required className="w-full p-3 border bg-gray-100 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500" placeholder="Province" />
                            </div>

                            <div>
                                <label className="block text-gray-700 font-medium">District</label>
                                <input type="text" name="permanentDistrict" required className="w-full p-3 border bg-gray-100 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500" placeholder="District" />
                            </div>

                            <div>
                                <label className="block text-gray-700 font-medium">Local Level</label>
                                <input type="text" name="permanentLocalLevel" required className="w-full p-3 border bg-gray-100 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500" placeholder="Municipality/Rural Municipality" />
                            </div>

                            <div>
                                <label className="block text-gray-700 font-medium">Ward No</label>
                                <input type="number" name="permanentWard" required className="w-full p-3 border bg-gray-100 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500" placeholder="Ward No" />
                            </div>

                            <div>
                                <label className="block text-gray-700 font-medium">Tole</label>
                                <input type="text" name="permanentTole" required className="w-full p-3 border bg-gray-100 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500" placeholder="Tole / Street Name" />
                            </div>

                            <div>
                                <label className="block text-gray-700 font-medium">House No</label>
                                <input type="text" name="permanentHouseNo" required className="w-full p-3 border bg-gray-100 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500" placeholder="House Number" />
                            </div>

                            {/* Temporary Address */}
                            <div className="col-span-2 mt-6">
                                <h4 className="text-lg font-semibold text-gray-600">Temporary Address</h4>
                            </div>

                            <div>
                                <label className="block text-gray-700 font-medium">Province</label>
                                <input type="text" name="temporaryProvince" required className="w-full p-3 border bg-gray-100 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500" placeholder="Province" />
                            </div>

                            <div>
                                <label className="block text-gray-700 font-medium">District</label>
                                <input type="text" name="temporaryDistrict" required className="w-full p-3 border bg-gray-100 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500" placeholder="District" />
                            </div>

                            <div>
                                <label className="block text-gray-700 font-medium">Local Level</label>
                                <input type="text" name="temporaryLocalLevel" required className="w-full p-3 border bg-gray-100 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500" placeholder="Municipality/Rural Municipality" />
                            </div>

                            <div>
                                <label className="block text-gray-700 font-medium">Ward No</label>
                                <input type="number" name="temporaryWard" required className="w-full p-3 border bg-gray-100 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500" placeholder="Ward No" />
                            </div>

                            <div>
                                <label className="block text-gray-700 font-medium">Tole</label>
                                <input type="text" name="temporaryTole" required className="w-full p-3 border bg-gray-100 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500" placeholder="Tole / Street Name" />
                            </div>

                            <div>
                                <label className="block text-gray-700 font-medium">House No</label>
                                <input type="text" name="temporaryHouseNo" required className="w-full p-3 border bg-gray-100 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500" placeholder="House Number" />
                            </div>
                        </>
                    )}

                    {step === 3 && (
                        <>
                            {/* Guardian Information */}
                            <h3 className="col-span-2 text-xl font-semibold text-gray-700 mt-4">
                                Guardian Information
                            </h3>
                            <div>
                                <label className="block text-gray-700 font-medium">Father's Name</label>
                                <input type="text" name="fatherName" required className="w-full p-3 border bg-gray-100 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500" placeholder="Father's Name" />
                            </div>

                            <div>
                                <label className="block text-gray-700 font-medium">Mother's Name</label>
                                <input type="text" name="motherName" required className="w-full p-3 border bg-gray-100 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500" placeholder="Mother's Name" />
                            </div>

                            <div>
                                <label className="block text-gray-700 font-medium">Guardian Contact</label>
                                <input type="tel" name="guardianContact" required className="w-full p-3 border bg-gray-100 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500" placeholder="Guardian Contact" />
                            </div>

                            <div>
                                <label className="block text-gray-700 font-medium">Guardian Email</label>
                                <input type="email" name="guardianEmail" required className="w-full p-3 border bg-gray-100 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500" placeholder="Guardian Email" />
                            </div>

                            <div>
                                <label className="block text-gray-700 font-medium">Guardian Occupation</label>
                                <input type="text" name="guardianOccupation" required className="w-full p-3 border bg-gray-100 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500" placeholder="Guardian Occupation" />
                            </div>
                        </>
                    )}

                    {step === 4 && (
                        <>
                            {/* Academic Information */}
                            <h3 className="col-span-2 text-xl font-semibold text-gray-700 mt-4">
                                Academic Information
                            </h3>
                            <div>
                                <label className="block text-gray-700 font-medium">Level of Study</label>
                                <input type="text" name="levelOfStudy" required className="w-full p-3 border bg-gray-100 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500" placeholder="Level of Study" />
                            </div>

                            <div>
                                <label className="block text-gray-700 font-medium">Faculty</label>
                                <input type="text" name="faculty" required className="w-full p-3 border bg-gray-100 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500" placeholder="Faculty" />
                            </div>

                            <div>
                                <label className="block text-gray-700 font-medium">Program</label>
                                <input type="text" name="program" required className="w-full p-3 border bg-gray-100 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500" placeholder="Program" />
                            </div>

                            <div>
                                <label className="block text-gray-700 font-medium">Admission Year (Batch)</label>
                                <input type="number" name="admissionYear" required className="w-full p-3 border bg-gray-100 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500" placeholder="Admission Year" />
                            </div>

                            <div>
                                <label className="block text-gray-700 font-medium">Date of Admission</label>
                                <input type="date" name="admissionDate" required className="w-full p-3 border bg-gray-100 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500" />
                            </div>

                            <div>
                                <label className="block text-gray-700 font-medium">Program Duration</label>
                                <input type="text" name="programDuration" required className="w-full p-3 border bg-gray-100 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500" placeholder="Program Duration" />
                            </div>
                        </>
                    )}

                    {step === 5 && (
                        <>
                            {/* Previous Academic Info */}
                            <h3 className="col-span-2 text-xl font-semibold text-gray-700 mt-4">
                                Previous Academic Information
                            </h3>
                            <div>
                                <label className="block text-gray-700 font-medium">Previous Institution</label>
                                <input type="text" name="previousInstitute" required className="w-full p-3 border bg-gray-100 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500" placeholder="Previous Institution" />
                            </div>

                            <div>
                                <label className="block text-gray-700 font-medium">Board/University/College</label>
                                <input type="text" name="previousBoard" required className="w-full p-3 border bg-gray-100 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500" placeholder="Board/University/College" />
                            </div>

                            <div>
                                <label className="block text-gray-700 font-medium">Registration Number</label>
                                <input type="text" name="previousRegistration" required className="w-full p-3 border bg-gray-100 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500" placeholder="Registration Number" />
                            </div>

                            <div>
                                <label className="block text-gray-700 font-medium">Upload Previous Study Records</label>
                                <input type="file" name="previousStudyDocs" required className="w-72 p-3 border bg-slate-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500" />
                            </div>
                        </>
                    )}

                    <div className="col-span-2 flex justify-between mt-4">
                        {step > 1 && <button type="button" onClick={prevStep} className="bg-slate-700 text-white p-2 w-36 rounded-lg">Previous</button>}
                        {step < 5 && <button type="button" onClick={nextStep} className="bg-green-700 w-36 text-white p-3 rounded-lg">Next</button>}
                        {step === 5 && <button type="submit" className="bg-green-600 text-white p-3 rounded-lg">Submit</button>}
                    </div>
                </form>
            </div>
        </>
    );
};

export default StudentRegistrationForm;