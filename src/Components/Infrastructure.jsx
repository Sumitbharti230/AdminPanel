import React from 'react';

const Infrastructure = () => (
  <div className="p-6">
    <h2 className="text-2xl font-bold mb-6">Infrastructure Management</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="font-semibold mb-4">Buildings</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Building Name</label>
            <input type="text" className="w-full p-2 border rounded" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Total Floors</label>
            <input type="number" className="w-full p-2 border rounded" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Total Rooms</label>
            <input type="number" className="w-full p-2 border rounded" />
          </div>
          <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg">
            Add Building
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default Infrastructure;
