import { Link } from "react-router-dom";
import { FaTachometerAlt, FaUniversity, FaUsers, FaUserGraduate, FaBook, FaBuilding, FaChalkboardTeacher, FaMoneyBillWave, FaFileAlt, FaUserPlus, FaHome } from "react-icons/fa";
import { IoMdSettings, IoIosArrowDown } from "react-icons/io";
import { useState } from "react";


const Sidebar = () => {

  const [openDropdown, setOpenDropdown] = useState(null);
  const [openSubDropdown, setOpenSubDropdown] = useState(null); // For nested dropdowns


  const toggleDropdown = (dropdownName) => {
    setOpenDropdown((prev) => (prev === dropdownName ? null : dropdownName));
  };

  const toggleSubDropdown = (subDropdownName) => {
    setOpenSubDropdown((prev) => (prev === subDropdownName ? null : subDropdownName));
  };

  return (

    <>

      <div className="h-screen w-64 bg-gradient-to-b from-gray-900 to-gray-700 text-white p-4 shadow-lg border-r-2 overflow-y-auto scrollbar-hidden">
        <h1 className="text-xl font-bold mb-6 text-center border-b-2 border-green-300 pb-2">📊 HEMIS</h1>
        <ul>
          <li className="mb-3">
            <Link to="/" className="flex items-center p-2 hover:bg-gray-600 rounded">
              <FaTachometerAlt className="mr-3 text-green-400" /> Dashboard
            </Link>
          </li>


          <li className="mb-3 relative">
            <details className="group">
              <summary
                onClick={() => toggleDropdown("campus")}
                className="flex items-center p-2 hover:bg-gray-600 rounded cursor-pointer list-none">
                <FaUniversity className="mr-3 text-yellow-400" />
                Campus
                <IoIosArrowDown className="ml-auto transition-transform duration-200 group-open:rotate-180" />
              </summary>
              {openDropdown === "campus" && (
                <ul className="mt-1 bg-gray-700 rounded shadow-md transition-all duration-200">
                  <li>
                    <Link
                      to="/campuslist"
                      className="block px-4 py-2 hover:bg-gray-600"
                    >
                      Campus List
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/campusregistrationForm"
                      className="block px-4 py-2 hover:bg-gray-600"
                    >
                      Campus Registration
                    </Link>
                  </li>
                </ul>
              )}

            </details>
          </li>

          <li className="mb-3">
            <Link to="/student-enrollment" className="flex items-center p-2 hover:bg-gray-600 rounded">
              <FaUserPlus className="mr-3 text-pink-400" /> Student Enrollment/Registration
            </Link>
          </li>
          <li className="mb-3">
            <Link to="/teacher_and_staff" className="flex items-center p-2 hover:bg-gray-600 rounded">
              <FaUserPlus className="mr-3 text-pink-400" /> Teacher and staff Information
            </Link>
          </li>
          <li className="mb-3">
            <Link to="/studentlist" className="flex items-center p-2 hover:bg-gray-600 rounded">
              <FaUserGraduate className="mr-3 text-purple-400" /> Student List
            </Link>
          </li>



          {/* Faculty Dropdown */}
          <li className="mb-3 relative">
            <div
              className="flex items-center p-2 hover:bg-gray-600 rounded cursor-pointer"
              onClick={() => toggleDropdown("faculty")}
            >
              <FaBook className="mr-3 text-orange-400" />
              Faculty
              <IoIosArrowDown
                className={`ml-auto transition-transform duration-200 ${openDropdown === "faculty" ? "rotate-180" : ""}`}
              />
            </div>
            {openDropdown === "faculty" && (
              <ul className="mt-1 bg-gray-700 rounded shadow-md">
                <li>
                  <Link to="/facultylisttable" className="block px-4 py-2 hover:bg-gray-600">
                    Faculty List
                  </Link>
                </li>
                <li>
                  <Link to="/addfaculty" className="block px-4 py-2 hover:bg-gray-600">
                    Add Faculty
                  </Link>
                </li>
              </ul>
            )}
          </li>


          <li className="mb-3">
            <Link to="/infrastructure" className="flex items-center p-2 hover:bg-gray-600 rounded">
              <FaBuilding className="mr-3 text-teal-400" /> Infrastructure
            </Link>
          </li>
          <li className="mb-3">
            <Link to="/staff" className="flex items-center p-2 hover:bg-gray-600 rounded">
              <FaChalkboardTeacher className="mr-3 text-red-400" /> Teachers & Staff
            </Link>
          </li>
          <li className="mb-3">
            <Link to="/finance" className="flex items-center p-2 hover:bg-gray-600 rounded">
              <FaMoneyBillWave className="mr-3 text-green-500" /> Financial Module
            </Link>
          </li>
          <li className="mb-3">
            <Link to="/reports" className="flex items-center p-2 hover:bg-gray-600 rounded">
              <FaFileAlt className="mr-3 text-gray-400" /> HEMIS Reports
            </Link>
          </li>


          {/* Settings Dropdown */}
          <li className="mb-3 relative">
            <div onClick={() => toggleDropdown("settings")} className="flex items-center p-2 hover:bg-gray-600 rounded cursor-pointer">
              <IoMdSettings className="mr-3 text-indigo-400" />
              Settings
              <IoIosArrowDown className={`ml-auto transition-transform duration-200 ${openDropdown === "settings" ? "rotate-180" : ""}`} />
            </div>
            {openDropdown === "settings" && (
              <ul className="mt-1 bg-gray-700 rounded shadow-md">


                {/* Faculty with Nested Dropdown */}
                <li className="relative">
                  <div onClick={() => toggleSubDropdown("faculty")} className="flex items-center px-4 py-2 hover:bg-gray-600 cursor-pointer">
                    Faculty
                    <IoIosArrowDown className={`ml-auto transition-transform duration-200 ${openSubDropdown === "faculty" ? "rotate-180" : ""}`} />
                  </div>
                  {openSubDropdown === "faculty" && (
                    <ul className="ml-4 mt-1 bg-gray-800 rounded shadow-md">
                      <li>
                        <Link to="/facultylisttable" className="block px-4 py-2 hover:bg-gray-600">
                          Faculty List
                        </Link>
                      </li>
                      <li>
                        <Link to="/settings/add-faculty" className="block px-4 py-2 hover:bg-gray-600">
                          Add Faculty
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>

                <li>
                  <Link to="/settings/level" className="block px-4 py-2 hover:bg-gray-600">
                    Level
                  </Link>
                </li>
                <li>
                  <Link to="/settings/program" className="block px-4 py-2 hover:bg-gray-600">
                    Program
                  </Link>
                </li>
                <li>
                  <Link to="/settings/caste" className="block px-4 py-2 hover:bg-gray-600">
                    Caste
                  </Link>
                </li>
                <li>
                  <Link to="/settings/disability" className="block px-4 py-2 hover:bg-gray-600">
                    Disability Type
                  </Link>
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
