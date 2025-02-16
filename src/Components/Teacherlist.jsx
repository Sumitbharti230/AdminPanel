import React from 'react';
import TopBar from './TopBar';

const TeacherList = () => (

<>
  <div className='mb-5'>

    <TopBar/>
  </div>
  <div className="p-6">
    <h2 className="text-2xl font-bold mb-6">Graduate Management</h2>
    <div className="bg-white rounded-lg shadow p-6">
      <div className="grid grid-cols-4 gap-4 mb-6">
        <select className="p-2 border rounded">
          <option>All Faculties</option>
        </select>
        <select className="p-2 border rounded">
          <option>All Programs</option>
        </select>
        <select className="p-2 border rounded">
          <option>All Years</option>
        </select>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
          Filter
        </button>
      </div>
      
      <table className="w-full">
        <thead>
          <tr className="border-b">
            <th className="text-left p-2">Teacher ID</th>
            <th className="text-left p-2">Name</th>
            <th className="text-left p-2">Faculty</th>
            <th className="text-left p-2">Program</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b">
            <td className="p-2">2020001</td>
            <td className="p-2">Mr:Manoj</td>
            <td className="p-2">Management</td>
            <td className="p-2">BCA</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  </>

);

export default TeacherList;
