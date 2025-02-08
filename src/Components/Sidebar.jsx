import { Link } from "react-router-dom";
import { FaTachometerAlt, FaUniversity, FaUsers, FaUserGraduate, FaBook, FaBuilding, FaChalkboardTeacher, FaMoneyBillWave, FaFileAlt, FaUserPlus, FaHome } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-64 bg-gradient-to-b from-gray-900 to-gray-700 text-white p-4 shadow-lg border-r-2 border-green-400">
      <h1 className="text-xl font-bold mb-6 text-center border-b-2 border-green-300 pb-2">📊 HEMIS</h1>
      <ul>
        <li className="mb-3">
          <Link to="/dashboard" className="flex items-center p-2 hover:bg-gray-600 rounded">
            <FaTachometerAlt className="mr-3 text-green-400" /> Dashboard
          </Link>
        </li>
        <li className="mb-3">
          <Link to="/campus" className="flex items-center p-2 hover:bg-gray-600 rounded">
            <FaUniversity className="mr-3 text-yellow-400" /> Campus Registration
          </Link>
        </li>
        <li className="mb-3">
          <Link to="/students" className="flex items-center p-2 hover:bg-gray-600 rounded">
            <FaUsers className="mr-3 text-blue-400" /> Student Management
          </Link>
        </li>
        <li className="mb-3">
          <Link to="/graduates" className="flex items-center p-2 hover:bg-gray-600 rounded">
            <FaUserGraduate className="mr-3 text-purple-400" /> Graduate Management
          </Link>
        </li>
        <li className="mb-3">
          <Link to="/programs" className="flex items-center p-2 hover:bg-gray-600 rounded">
            <FaBook className="mr-3 text-orange-400" /> Programs & Faculty
          </Link>
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
        <li className="mb-3">
          <Link to="/student-enrollment" className="flex items-center p-2 hover:bg-gray-600 rounded">
            <FaUserPlus className="mr-3 text-pink-400" /> Student Enrollment
          </Link>
        </li>
        <li className="mb-3">
          <Link to="/main-content" className="flex items-center p-2 hover:bg-gray-600 rounded">
            <FaHome className="mr-3 text-indigo-400" /> Main Content
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
