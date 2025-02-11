
const StudentRegistrationForm = () => {


    return (
        <div className="w-[90%] mx-auto p-8 bg-gray-100 shadow-2xl rounded-lg ">
            <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
                📋 Student Enrollment Form
            </h2>

            <form method="POST" className="grid grid-cols-2 gap-4">
                {/* Personal Information */}
                <h3 className="col-span-2 text-xl font-semibold text-gray-700">
                    Personal Information
                </h3>

                <div>
                    <label className="block text-gray-700 font-medium">Full Name</label>
                    <input type="text" name="name" required className="w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500" placeholder="Full Name" />
                </div>

                <div>
                    <label className="block text-gray-700 font-medium">Contact (Mobile)</label>
                    <input type="tel" name="contact" required className="w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500" placeholder="Contact (Mobile)" />
                </div>

                <div>
                    <label className="block text-gray-700 font-medium">Date of Birth</label>
                    <input type="date" name="dob" required className="w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500" />
                </div>

                <div>
                    <label className="block text-gray-700 font-medium">Gender</label>
                    <select name="gender" required className="w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500">
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </div>

                <div>
                    <label className="block text-gray-700 font-medium">Caste/Ethnicity</label>
                    <input type="text" name="caste" required className="w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500" placeholder="Caste/Ethnicity" />
                </div>

                <div>
                    <label className="block text-gray-700 font-medium">EDJ</label>
                    <input type="text" name="edj" required className="w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500" placeholder="EDJ" />
                </div>

                <div>
                    <label className="block text-gray-700 font-medium">Disability Status</label>
                    <input type="text" name="disability" required className="w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500" placeholder="Disability Status" />
                </div>

                <div>
                    <label className="block text-gray-700 font-medium">Citizenship Number</label>
                    <input type="text" name="citizenship" required className="w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500" placeholder="Citizenship Number" />
                </div>

                <div>
                    <label className="block text-gray-700 font-medium">National ID</label>
                    <input type="text" name="nationalId" required className="w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500" placeholder="National ID" />
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


                {/* Address Information */}
                <h3 className="col-span-2 text-xl font-semibold text-gray-700 mt-4">
                    Address Information
                </h3>
                <div>
                    <label className="block text-gray-700 font-medium">Permanent Address</label>
                    <input type="text" name="permanentAddress" required className="w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500" placeholder="Permanent Address" />
                </div>

                <div>
                    <label className="block text-gray-700 font-medium">Temporary Address</label>
                    <input type="text" name="temporaryAddress" required className="w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500" placeholder="Temporary Address" />
                </div>

                {/* Guardian Information */}
                <h3 className="col-span-2 text-xl font-semibold text-gray-700 mt-4">
                    Guardian Information
                </h3>
                <div>
                    <label className="block text-gray-700 font-medium">Father's Name</label>
                    <input type="text" name="fatherName" required className="w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500" placeholder="Father's Name" />
                </div>

                <div>
                    <label className="block text-gray-700 font-medium">Mother's Name</label>
                    <input type="text" name="motherName" required className="w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500" placeholder="Mother's Name" />
                </div>

                <div>
                    <label className="block text-gray-700 font-medium">Guardian Contact</label>
                    <input type="tel" name="guardianContact" required className="w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500" placeholder="Guardian Contact" />
                </div>

                <div>
                    <label className="block text-gray-700 font-medium">Guardian Email</label>
                    <input type="email" name="guardianEmail" required className="w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500" placeholder="Guardian Email" />
                </div>

                <div>
                    <label className="block text-gray-700 font-medium">Guardian Occupation</label>
                    <input type="text" name="guardianOccupation" required className="w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500" placeholder="Guardian Occupation" />
                </div>

                {/* Academic Information */}
                <h3 className="col-span-2 text-xl font-semibold text-gray-700 mt-4">
                    Academic Information
                </h3>
                <div>
                    <label className="block text-gray-700 font-medium">Level of Study</label>
                    <input type="text" name="levelOfStudy" required className="w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500" placeholder="Level of Study" />
                </div>

                <div>
                    <label className="block text-gray-700 font-medium">Faculty</label>
                    <input type="text" name="faculty" required className="w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500" placeholder="Faculty" />
                </div>

                <div>
                    <label className="block text-gray-700 font-medium">Program</label>
                    <input type="text" name="program" required className="w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500" placeholder="Program" />
                </div>

                <div>
                    <label className="block text-gray-700 font-medium">Admission Year (Batch)</label>
                    <input type="number" name="admissionYear" required className="w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500" placeholder="Admission Year" />
                </div>

                <div>
                    <label className="block text-gray-700 font-medium">Date of Admission</label>
                    <input type="date" name="admissionDate" required className="w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500" />
                </div>

                <div>
                    <label className="block text-gray-700 font-medium">Program Duration</label>
                    <input type="text" name="programDuration" required className="w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500" placeholder="Program Duration" />
                </div>

                {/* Previous Academic Info */}
                <h3 className="col-span-2 text-xl font-semibold text-gray-700 mt-4">
                    Previous Academic Information
                </h3>
                <div>
                    <label className="block text-gray-700 font-medium">Previous Institution</label>
                    <input type="text" name="previousInstitute" required className="w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500" placeholder="Previous Institution" />
                </div>

                <div>
                    <label className="block text-gray-700 font-medium">Board/University/College</label>
                    <input type="text" name="previousBoard" required className="w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500" placeholder="Board/University/College" />
                </div>

                <div>
                    <label className="block text-gray-700 font-medium">Registration Number</label>
                    <input type="text" name="previousRegistration" required className="w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500" placeholder="Registration Number" />
                </div>

                <div>
                    <label className="block text-gray-700 font-medium">Upload Previous Study Records</label>
                    <input type="file" name="previousStudyDocs" required className="w-72 p-3 border bg-slate-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500" />
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="col-span-2 w-60 bg-blue-700 text-white p-3 rounded-lg text-lg font-semibold shadow-md hover:bg-blue-600 transition"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default StudentRegistrationForm;
