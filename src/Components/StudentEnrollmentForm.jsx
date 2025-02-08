import React from 'react';

const StudentEnrollmentForm = () => (
  <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div>
      <h4 className="font-semibold mb-4">Personal Information</h4>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Full Name (English)</label>
          <input type="text" className="w-full p-2 border rounded" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Full Name (Nepali)</label>
          <input type="text" className="w-full p-2 border rounded" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Date of Birth</label>
          <input type="date" className="w-full p-2 border rounded" />
        </div>
      </div>
    </div>
    <div>
      <h4 className="font-semibold mb-4">Academic Information</h4>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Level of Study</label>
          <select className="w-full p-2 border rounded">
            <option>Bachelor</option>
            <option>Master</option>
            <option>PhD</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Faculty</label>
          <select className="w-full p-2 border rounded">
            <option>Science & Technology</option>
            <option>Management</option>
            <option>Humanities</option>
          </select>
        </div>
        <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg mt-4">
          Save Enrollment
        </button>
      </div>
    </div>
  </form>
);

export default StudentEnrollmentForm;
