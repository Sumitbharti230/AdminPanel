import { Routes, Route } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
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
import CampusList from "./Components/campuslist";
import FacultyListTable from "./Components/FacultyList";
import AddFaculty from "./Components/AddFaculty";
import TeacherList from "./Components/Teacherlist";

function App() {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar - Scrollable */}
      <div>
        <Sidebar />
      </div>

      {/* Main Content - Also Scrollable */}
      <div className="flex-1 overflow-y-auto h-full p-4">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/students" element={<StudentManagement />} />
          <Route path="/studentlist" element={<Studentlist />} />
          <Route path="/infrastructure" element={<Infrastructure />} />
          <Route path="/reports" element={<HEMISReports />} />
          <Route path="/studentregistration" element={<StudentEnrollmentForm />} />
          <Route path="teacher_and_staff" element={<Teacher_and_staff />} />
          <Route path="/main-content" element={<MainContent />} />
          <Route path="/campusregistrationForm" element={<CampusRegistrationForm />} />
          <Route path="/campuslist" element={<CampusList />} />
          <Route path="/Login" element={<LoginPage />} />
          <Route path="/facultylisttable" element={<FacultyListTable />} />
          <Route path="/Addfaculty" element={<AddFaculty />} />
          <Route path="/teacherlist" element={<TeacherList />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
