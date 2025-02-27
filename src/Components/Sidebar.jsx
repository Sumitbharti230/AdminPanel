import { Link } from "react-router-dom";
import {
  FaTachometerAlt,
  FaUniversity,
  FaUsers,
  FaUserGraduate,
  FaBook,
  FaBuilding,
  FaChalkboardTeacher,
  FaMoneyBillWave,
  FaFileAlt,
  FaUserPlus,
  FaHome,
} from "react-icons/fa";
import { CiCircleList } from "react-icons/ci";

import { IoMdSettings, IoIosArrowDown, IoMdAdd } from "react-icons/io";
import { useState } from "react";

const Sidebar = () => {

  const [openDropdown, setOpenDropdown] = useState(null);
  const [openSubDropdown, setOpenSubDropdown] = useState(null); // For nested dropdowns

  const toggleDropdown = (dropdownName) => {
    setOpenDropdown((prev) => (prev === dropdownName ? null : dropdownName));
  };

  const toggleSubDropdown = (subDropdownName) => {
    setOpenSubDropdown((prev) =>
      prev === subDropdownName ? null : subDropdownName
    );
  };

  return (
    <>
      <div className="h-screen w-64  p-4 shadow-xl border-r border-gray-300 overflow-y-auto scrollbar-hidden">
        <h1 className="text-xl font-bold mb-6 text-center border-b-2 border-green-300  pb-2">
          📊 HEMIS
        </h1>
        <ul>
          <li className="mb-3 ">
            <Link
              to="/"
              className="flex items-center p-2 hover:bg-gray-400 rounded"
            >
              <FaTachometerAlt className="mr-3 text-green-400" /> Dashboard
            </Link>
          </li>



          <li className="mb-3 relative">
            {/* Dropdown Header */}
            <div
              onClick={() => toggleDropdown("campus")}
              className="flex items-center p-3  hover:bg-gray-400 rounded-lg cursor-pointer transition-all"
            >
              <FaUniversity className="mr-3 text-blue-500 text-lg" />
              <span className="text-gray-800 font-medium">Campus</span>
              <IoIosArrowDown
                className={`ml-auto text-gray-600 transition-transform duration-200 ${openDropdown === "campus" ? "rotate-180" : ""
                  }`}
              />
            </div>

            {/* Dropdown Items */}
            {openDropdown === "campus" && (
              <ul className="mt-2 border border-gray-300 text-gray-800 rounded-lg shadow-lg transition-all duration-500">
                <li>
                  <Link
                    to="/campuslist"
                    className="px-4 py-3 flex items-center hover:bg-gray-100 rounded-t-lg transition-all"
                  >
                    <span className="font-medium">Campus List</span>
                    <CiCircleList className="ml-auto text-black text-xl" />
                  </Link>
                </li>

                <li>
                  <Link
                    to="/campusregistrationForm"
                    className="px-4 py-3 flex items-center hover:bg-gray-100 rounded-b-lg transition-all"
                  >
                    <span className="font-medium">Campus Registration</span>
                    <IoMdAdd className="ml-auto text-black rounded-full p-1 text-2xl" />
                  </Link>
                </li>
              </ul>
            )}
          </li>


          <li className="mb-3 relative">
            {/* Parent Dropdown Header */}
            <div
              onClick={() => toggleDropdown("student")}
              className="flex items-center p-3  hover:bg-gray-400 rounded-lg cursor-pointer transition-all"
            >
              <FaUserGraduate className="mr-3 text-pink-400" />
              <span className="text-gray-800 font-medium">Student</span>
              <IoIosArrowDown
                className={`ml-auto text-gray-600 transition-transform duration-200 text ${openDropdown === "student" ? "rotate-180" : ""
                  }`}
              />
            </div>

            {/* Child Dropdown Items */}
            {openDropdown === "student" && (
              <ul className="mt-2  border border-gray-300 text-gray-800 rounded-lg shadow-lg transition-all duration-500">
                <li>
                  <Link
                    to="/studentlist"
                    className="px-4 py-3 flex items-center hover:bg-gray-100 rounded-t-lg transition-all"
                  >
                    <span className="font-medium">Student List</span>
                    <CiCircleList className="ml-auto text-black text-xl" />
                  </Link>
                </li>

                <li>
                  <Link
                    to="/studentregistration"
                    className="px-4 py-3 flex items-center hover:bg-gray-100 rounded-b-lg transition-all"
                  >
                    <span className="font-medium">Student Registration</span>
                    <IoMdAdd className="ml-auto text-black rounded-full p-1 text-2xl" />
                  </Link>
                </li>
                
              </ul>
            )}
          </li>



          <li className="mb-3 relative">
            {/* Parent Dropdown Header */}
            <div
              onClick={() => toggleDropdown("teacher")}
              className="flex items-center p-3 hover:bg-gray-400 rounded-lg cursor-pointer transition-all"
            >
              <FaUserPlus className="mr-3 text-red-400 text-2xl" />
              <span className="text-gray-800 font-medium">
                Teacher and Staff Information
              </span>
              <IoIosArrowDown
                className={`ml-auto text-gray-600 transition-transform duration-200 text-2xl ${openDropdown === "teacher" ? "rotate-180" : ""
                  }`}
              />
            </div>

            {/* Child Dropdown Items */}
            {openDropdown === "teacher" && (
              <ul className="mt-2  border border-gray-300 text-gray-800 rounded-lg shadow-lg transition-all duration-500">
                <li>
                  <Link
                    to="/teacher_and_staff"
                    className="px-4 py-3 flex items-center hover:bg-gray-100 rounded-t-lg transition-all"
                  >
                    <span className="font-medium">Register Teacher</span>
                  </Link>
                </li>

                <li>
                  <Link
                    to="/teacherlist"
                    className="px-4 py-3 flex items-center hover:bg-gray-100 rounded-b-lg transition-all"
                  >
                    <span className="font-medium">Teacher List</span>
                  </Link>
                </li>
              </ul>
            )}
          </li>







          <li className="mb-3">
            <Link
              to="/infrastructure"
              className="flex items-center p-2 hover:bg-gray-400 rounded"
            >
              <FaBuilding className="mr-3 text-teal-400" /> Infrastructure
            </Link>
          </li>


          <li className="mb-3">
            <Link
              to="/finance"
              className="flex items-center p-2 hover:bg-gray-400 rounded"
            >
              <FaMoneyBillWave className="mr-3 text-green-500" /> Financial
              Module
            </Link>
          </li>
          <li className="mb-3">
            <Link
              to="/reports"
              className="flex items-center p-2 hover:bg-gray-400 rounded"
            >
              <FaFileAlt className="mr-3 text-gray-400" /> HEMIS Reports
            </Link>
          </li>

          {/* Settings Dropdown */}
          <li className="mb-3 relative">
            <div
              onClick={() => toggleDropdown("settings")}
              className="flex items-center p-2 hover:bg-gray-400 rounded cursor-pointer"
            >
              <IoMdSettings className="mr-3 text-indigo-400" />
              Settings
              <IoIosArrowDown
                className={`ml-auto transition-transform duration-200 text-gray-600 ${openDropdown === "settings" ? "rotate-180" : ""
                  }`}
              />
            </div>
            {openDropdown === "settings" && (
              <ul className="mt-1  rounded shadow-md">

                {/* Faculty with Nested Dropdown */}
                <li className="relative">
                  <div
                    onClick={() => toggleSubDropdown("faculty")}
                    className="flex items-center px-4 py-2 hover:bg-gray-400 cursor-pointer"
                  >
                    Faculty
                    <IoIosArrowDown
                      className={`ml-auto transition-transform duration-200 ${openSubDropdown === "faculty" ? "rotate-180" : ""
                        }`}
                    />
                  </div>
                  {openSubDropdown === "faculty" && (
                    <ul className="ml-4 mt-1 bg-gray-300 rounded shadow-md">
                      <li>
                        <Link
                          to="/facultylisttable"
                          className="block px-4 py-2 hover:bg-gray-400"
                        >
                          Faculty List
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/addfaculty"
                          className="block px-4 py-2 hover:bg-gray-400"
                        >
                          Add Faculty
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>


                {/* level with Nested Dropdown */}
                <li className="relative">
                  <div
                    onClick={() => toggleSubDropdown("level")}
                    className="flex items-center px-4 py-2 hover:bg-gray-400 cursor-pointer"
                  >
                    Level
                    <IoIosArrowDown
                      className={`ml-auto transition-transform duration-200 ${openSubDropdown === "level" ? "rotate-180" : ""
                        }`}
                    />
                  </div>
                  {openSubDropdown === "level" && (
                    <ul className="ml-4 mt-1 bg-gray-300 rounded shadow-md">
                      <li>
                        <Link
                          to="/levellisttable"
                          className="block px-4 py-2 hover:bg-gray-400"
                        >
                          level List
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/levelform"
                          className="block px-4 py-2 hover:bg-gray-400"
                        >
                          Add level
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>


                {/* Program with Nested Dropdown */}
                <li className="relative">
                  <div
                    onClick={() => toggleSubDropdown("Program")}
                    className="flex items-center px-4 py-2 hover:bg-gray-400 cursor-pointer"
                  >
                    Program
                    <IoIosArrowDown
                      className={`ml-auto transition-transform duration-200 ${openSubDropdown === "Program" ? "rotate-180" : ""
                        }`}
                    />
                  </div>
                  {openSubDropdown === "Program" && (
                    <ul className="ml-4 mt-1 bg-gray-300 rounded shadow-md">
                      <li>
                        <Link
                          to="/programlisttable"
                          className="block px-4 py-2 hover:bg-gray-400"
                        >
                          Program List
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/programform"
                          className="block px-4 py-2 hover:bg-gray-400"
                        >
                          Add Program
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>

                {/* Caste with Nested Dropdown */}
                <li className="relative">
                  <div
                    onClick={() => toggleSubDropdown("Caste")}
                    className="flex items-center px-4 py-2 hover:bg-gray-400 cursor-pointer"
                  >
                    Caste
                    <IoIosArrowDown
                      className={`ml-auto transition-transform duration-200 ${openSubDropdown === "Caste" ? "rotate-180" : ""
                        }`}
                    />
                  </div>
                  {openSubDropdown === "Caste" && (
                    <ul className="ml-4 mt-1 bg-gray-300 rounded shadow-md">
                      <li>
                        <Link
                          to="/castelisttable"
                          className="block px-4 py-2 hover:bg-gray-400"
                        >
                          Caste List
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/casteform"
                          className="block px-4 py-2 hover:bg-gray-400"
                        >
                          Create Caste
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>

                {/* Disability-Type with Nested Dropdown */}
                <li className="relative">
                  <div
                    onClick={() => toggleSubDropdown("Disability-Type")}
                    className="flex items-center px-4 py-2 hover:bg-gray-400 cursor-pointer"
                  >
                    Disability-Type
                    <IoIosArrowDown
                      className={`ml-auto transition-transform duration-200 ${openSubDropdown === "Disability-Type" ? "rotate-180" : ""
                        }`}
                    />
                  </div>
                  {openSubDropdown === "Disability-Type" && (
                    <ul className="ml-4 mt-1 bg-gray-300 rounded shadow-md">
                      <li>
                        <Link
                          to="/disabilitylist"
                          className="block px-4 py-2 hover:bg-gray-400"
                        >
                          Disability-Type List
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/disabilityform"
                          className="block px-4 py-2 hover:bg-gray-400"
                        >
                          Create Disability-Type
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>


                {/* Affiliated with Nested Dropdown */}
                <li className="relative">
                  <div
                    onClick={() => toggleSubDropdown("Affiliated")}
                    className="flex items-center px-4 py-2 hover:bg-gray-400 cursor-pointer"
                  >
                    Affiliated
                    <IoIosArrowDown
                      className={`ml-auto transition-transform duration-200 ${openSubDropdown === "faculty" ? "rotate-180" : ""
                        }`}
                    />
                  </div>
                  {openSubDropdown === "Affiliated" && (
                    <ul className="ml-4 mt-1 bg-gray-300 rounded shadow-md">
                      <li>
                        <Link
                          to="/affiliatedlist"
                          className="block px-4 py-2 hover:bg-gray-400"
                        >
                          Affiliated List
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/affiliatedform"
                          className="block px-4 py-2 hover:bg-gray-400"
                        >
                          Create Affiliated
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>

                {/* Ethnic with Nested Dropdown */}
                <li className="relative">
                  <div
                    onClick={() => toggleSubDropdown("Ethnic")}
                    className="flex items-center px-4 py-2 hover:bg-gray-400 cursor-pointer"
                  >
                    Ethnic
                    <IoIosArrowDown
                      className={`ml-auto transition-transform duration-200 ${openSubDropdown === "Ethnic" ? "rotate-180" : ""
                        }`}
                    />
                  </div>
                  {openSubDropdown === "Ethnic" && (
                    <ul className="ml-4 mt-1 bg-gray-300 rounded shadow-md">
                      <li>
                        <Link
                          to="/Ethniclist"
                          className="block px-4 py-2 hover:bg-gray-400"
                        >
                          Ethnic List
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/add-Ethnic"
                          className="block px-4 py-2 hover:bg-gray-400"
                        >
                          Add Ethnic
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>


                {/* phy-infrastructure with Nested Dropdown */}
                <li className="relative">
                  <div
                    onClick={() => toggleSubDropdown("phy-infrastructure")}
                    className="flex items-center px-4 py-2 hover:bg-gray-400 cursor-pointer"
                  >
                    phy-infrastructure
                    <IoIosArrowDown
                      className={`ml-auto transition-transform duration-200 ${openSubDropdown === "phy-infrastructure" ? "rotate-180" : ""
                        }`}
                    />
                  </div>
                  {openSubDropdown === "phy-infrastructure" && (
                    <ul className="ml-4 mt-1 bg-gray-300 rounded shadow-md">
                      <li>
                        <Link
                          to="/phy-infrastructurelist"
                          className="block px-4 py-2 hover:bg-gray-400"
                        >
                          phy-infrastructure List
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/add-phy-infrastructure"
                          className="block px-4 py-2 hover:bg-gray-400"
                        >
                          Add phy-infrastructure
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>

                {/* Study-Year with Nested Dropdown */}
                <li className="relative">
                  <div
                    onClick={() => toggleSubDropdown("Study-Year")}
                    className="flex items-center px-4 py-2 hover:bg-gray-400 cursor-pointer"
                  >
                    Study-Year
                    <IoIosArrowDown
                      className={`ml-auto transition-transform duration-200 ${openSubDropdown === "Study-Year" ? "rotate-180" : ""
                        }`}
                    />
                  </div>
                  {openSubDropdown === "Study-Year" && (
                    <ul className="ml-4 mt-1 bg-gray-300 rounded shadow-md">
                      <li>
                        <Link
                          to="/Study-Yearlist"
                          className="block px-4 py-2 hover:bg-gray-400"
                        >
                          Study-Year List
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/add-Study-Year"
                          className="block px-4 py-2 hover:bg-gray-400"
                        >
                          Add Study-Year
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>

                {/* Study-Semester with Nested Dropdown */}
                <li className="relative">
                  <div
                    onClick={() => toggleSubDropdown("Study-Semester")}
                    className="flex items-center px-4 py-2 hover:bg-gray-400 cursor-pointer"
                  >
                    Study-Semester
                    <IoIosArrowDown
                      className={`ml-auto transition-transform duration-200 ${openSubDropdown === "Study-Semester" ? "rotate-180" : ""
                        }`}
                    />
                  </div>
                  {openSubDropdown === "Study-Semester" && (
                    <ul className="ml-4 mt-1 bg-gray-300 rounded shadow-md">
                      <li>
                        <Link
                          to="/Study-Semesterlist"
                          className="block px-4 py-2 hover:bg-gray-400"
                        >
                          Study-Semester List
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/add-Study-Semester"
                          className="block px-4 py-2 hover:bg-gray-400"
                        >
                          Add Study-Semester
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>



              </ul>
            )}
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
