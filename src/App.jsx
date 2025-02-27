import { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import StudentManagement from "./components/StudentManagement";
import Studentlist from "./components/Studentlist";
import Infrastructure from "./components/Infrastructure";
import HEMISReports from "./components/HemisReport";
import StudentEnrollmentForm from "./components/StudentEnrollmentForm";
import Teacher_and_staff from "./components/Teacher_and_staff";
import MainContent from "./components/MainContent";
import CampusRegistrationForm from "./components/CampusRegistrationForm";
import CampusList from "./components/CampusList";
import LoginPage from "./components/Login";
import AddFaculty from "./components/AddFaculty";
import EditFaculty from "./components/EditFaculty";
import TeacherList from "./components/TeacherList";
import FacultyListTable from "./Components/FacultyList";
import LevelForm from "./Components/AddLevel";
import LevelListTable from "./Components/levelList";
import ProgramForm from "./Components/CreateProgram";
import ProgramListTable from "./Components/ProgramList";
import CasteForm from "./Components/CreateCaste";
import CasteListTable from "./Components/CasteList";
import DisabilityForm from "./Components/DisabilityForm";
import DisabilityListTable from "./Components/DisabilityList";
import AffiliatedForm from "./Components/AddAffiliated";
import AffiliatedList from "./Components/AffiliatedList";

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if token exists in localStorage or sessionStorage
    const token = localStorage.getItem("token") || sessionStorage.getItem("token");
    setIsAuthenticated(!!token); // Update authentication state
  }, []);

  return (
    <Routes>
      {isAuthenticated ? (
        <Route
          path="/*"
          element={
            <div className="flex h-screen overflow-hidden">
              {/* Sidebar - Only if logged in */}
              <Sidebar />

              {/* Main Content - Only if logged in */}
              <div className="flex-1 overflow-y-auto h-full p-4">
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/students" element={<StudentManagement />} />
                  <Route path="/studentlist" element={<Studentlist />} />
                  <Route path="/infrastructure" element={<Infrastructure />} />
                  <Route path="/reports" element={<HEMISReports />} />
                  <Route path="/studentregistration" element={<StudentEnrollmentForm />} />
                  <Route path="/teacher_and_staff" element={<Teacher_and_staff />} />
                  <Route path="/main-content" element={<MainContent />} />
                  <Route path="/campusregistrationForm" element={<CampusRegistrationForm />} />
                  <Route path="/campuslist" element={<CampusList />} />
                  <Route path="/facultylisttable" element={<FacultyListTable/>} />
                  <Route path="/Addfaculty" element={<AddFaculty />} />
                  <Route path="/editfaculty" element={<EditFaculty />} />
                  <Route path="/teacherlist" element={<TeacherList />} />  
                  <Route path="/levelform" element={<LevelForm />} />  
                  <Route path="/levellisttable" element={<LevelListTable />} />  
                  <Route path="/programform" element={<ProgramForm />} />  
                  <Route path="/programlisttable" element={<ProgramListTable />} />  
                  <Route path="/casteform" element={<CasteForm />} />  
                  <Route path="/castelisttable" element={<CasteListTable />} />  
                  <Route path="/disabilityform" element={<DisabilityForm />} />  
                  <Route path="/disabilitylist" element={<DisabilityListTable />} />  
                  <Route path="/affiliatedform" element={<AffiliatedForm />} />  
                  <Route path="/affiliatedlist" element={<AffiliatedList />} />  
                </Routes>
              </div>
            </div>
          }
        />
      ) : (
        // Show only Login Page when not authenticated
        <Route path="/login" element={<LoginPage setIsAuthenticated={setIsAuthenticated} />} />
      )}

      {/* Redirect any other route to login if not authenticated */}
      <Route path="*" element={<LoginPage setIsAuthenticated={setIsAuthenticated} />} />
    </Routes>
  );
}
