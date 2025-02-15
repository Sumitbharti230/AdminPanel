import React from 'react';
import { FileText } from 'lucide-react';
import TopBar from "../Components/TopBar";


const HEMISReports = () => (
  <>

  <div>
  <TopBar />
  </div>

  <div className="p-6">
    <h2 className="text-2xl font-bold mb-6">HEMIS Reports</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="font-semibold mb-4">Generate Reports</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Report Type</label>
            <select className="w-full p-2 border rounded">
              <option>Student Enrollment</option>
              <option>Faculty Distribution</option>
              <option>Graduate Statistics</option>
              <option>Infrastructure Status</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Academic Year</label>
            <select className="w-full p-2 border rounded">
              <option>2024/25</option>
              <option>2023/24</option>
            </select>
          </div>
          <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2">
            <FileText size={20} />
            Generate Report
          </button>
        </div>
      </div>
    </div>
  </div>
  </>
);

export default HEMISReports;
