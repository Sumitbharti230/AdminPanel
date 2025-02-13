import React from 'react';
import { Search, Download } from 'lucide-react';

const TopBar = () => (
  <div className="bg-white shadow-sm p-4">
    <div className="flex justify-between items-center">
      <div className="flex gap-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-4 py-2 border rounded-lg"
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2">
          <Download size={20} />
          Export Data
        </button>
      </div>
    </div>
  </div>
);

export default TopBar;
