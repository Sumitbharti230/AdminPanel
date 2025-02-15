import {  Routes, Route } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import TopBar from "./Components/TopBar";
import Dashboard from "./Components/Dashboard";
import StudentEnrollmentForm from "./Components/StudentEnrollmentForm";
import StudentManagement from "./Components/StudentManagement";
import Infrastructure from "./Components/Infrastructure";
import HEMISReports from "./Components/HemisReport";
import MainContent from "./Components/MainContent";
import Studentlist from "./Components/Studentlist";
import CampusRegistrationForm from "./Components/CampusRegistrationForm";
import Teacher_and_staff from "./Components/Teacher_and_staff";
import LoginPage from "./Components/Login";

function App() {
  return (
    <div className="flex h-screen">
      {/* Sidebar - Fixed on the left */}
      <div className="w-64 bg-gray-800 text-white fixed h-full">
        <Sidebar />
      </div>

      {/* Main Content - Takes Remaining Space */}
      <div className="flex-1 ml-64 p-4">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/students" element={<StudentManagement />} />
          <Route path="/studentlist" element={<Studentlist />} />
          <Route path="/infrastructure" element={<Infrastructure />} />
          <Route path="/reports" element={<HEMISReports />} />
          <Route path="/student-enrollment" element={<StudentEnrollmentForm />} />
          <Route path="teacher_and_staff" element={<Teacher_and_staff />} />
          <Route path="/main-content" element={<MainContent />} />
          <Route path="/campusregistrationForm" element={<CampusRegistrationForm />} />
          <Route path="/Login" element={<LoginPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
