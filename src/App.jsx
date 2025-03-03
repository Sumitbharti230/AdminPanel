import { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import Dashboard from "./Components/Dashboard";
import StudentManagement from "./Components/StudentManagement";
import Studentlist from "./Components/Studentlist";
import Infrastructure from "./Components/Infrastructure";
import HEMISReports from "./Components/HemisReport";
import StudentEnrollmentForm from "./Components/StudentEnrollmentForm";
import Teacher_and_staff from "./Components/Teacher_and_staff";
import MainContent from "./Components/MainContent";
import CampusRegistrationForm from "./Components/CampusRegistrationForm";
import CampusList from "./Components/Campuslist";
import LoginPage from "./Components/Login";
import AddFaculty from "./Components/AddFaculty";
import EditFaculty from "./Components/EditFaculty";
import TeacherList from "./Components/TeacherList";
import FacultyListTable from "./Components/FacultyList";
import LevelForm from "./Components/AddLevel";
import LevelListTable from "./Components/levelList";
import ProgramForm from "./Components/CreateProgram";
import ProgramListTable from "./Components/ProgramList";
import CasteForm from "./Components/CreateCaste";
import CasteListTable from "./Components/CasteList";
import DisabilityForm from "./Components/DisabilityForm";
import DisabilityListTable from "./Components/DisabilityList";
import AffiliatedList from "./Components/AffiliatedList";
import AffiliatedForm from "./Components/AddAffiliated";
import EthnicForm from "./Components/AddEthnic";
import EthnicList from "./Components/EthnicList";
import PhyInfrastructureForm from "./Components/Phy-InfrastructureForm";
import PhyInfrastructureList from "./Components/Phy-InfrasturctureList"
import SemesterForm from "./Components/SemesterForm";
import SemesterList from "./Components/SemesterList";

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
                  <Route path="/ethnicform" element={<EthnicForm />} />
                  <Route path="/ethniclist" element={<EthnicList />} />
                  <Route path="/phyinfrastructureform" element={<PhyInfrastructureForm />} />
                  <Route path="/phyinfrastructurelist" element={<PhyInfrastructureList />} />
                  <Route path="/semesterform" element={<SemesterForm />} />
                  <Route path="/semesterlist" element={<SemesterList />} />
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
