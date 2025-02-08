import React, { useState } from 'react';
import { UserPlus } from 'lucide-react';
import StudentEnrollmentForm from './StudentEnrollmentForm';

const StudentManagement = () => {
  const [activeTab, setActiveTab] = useState('enrollment');
  
  return (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-4">Student Management</h2>
        <div className="flex gap-4 border-b">
          {['enrollment', 'personal', 'academic', 'upgrade'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-2 px-4 ${
                activeTab === tab 
                  ? 'border-b-2 border-blue-600 text-blue-600' 
                  : 'text-gray-500'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        {activeTab === 'enrollment' && (
          <div>
            <div className="flex justify-between mb-4">
              <h3 className="text-lg font-semibold">Student Enrollment</h3>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2">
                <UserPlus size={20} />
                New Enrollment
              </button>
            </div>
            <StudentEnrollmentForm />
          </div>
        )}
        {/* Other tabs can be implemented here */}
      </div>
    </div>
  );
};

export default StudentManagement;
