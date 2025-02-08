import {  Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import TopBar from "./components/TopBar";
import Dashboard from "./components/Dashboard";
import StudentEnrollmentForm from "./components/StudentEnrollmentForm";
import StudentManagement from "./components/StudentManagement";
import Infrastructure from "./components/Infrastructure";
import HEMISReports from "./components/HemisReport";
import MainContent from "./components/MainContent";
import GraduateManagement from "./components/GraduteManagement";

function App() {
  return (
    <div className="flex h-screen">
      {/* Sidebar - Fixed on the left */}
      <div className="w-64 bg-gray-800 text-white fixed h-full">
        <Sidebar />
      </div>

      {/* Main Content - Takes Remaining Space */}
      <div className="flex-1 ml-64 p-4">
        <TopBar />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/students" element={<StudentManagement />} />
          <Route path="/graduates" element={<GraduateManagement />} />
          <Route path="/infrastructure" element={<Infrastructure />} />
          <Route path="/reports" element={<HEMISReports />} />
          <Route path="/student-enrollment" element={<StudentEnrollmentForm />} />
          <Route path="/main-content" element={<MainContent />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
