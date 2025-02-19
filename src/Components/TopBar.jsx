import React from 'react';
import { Search, Download } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const TopBar = () => {
  const navigate = useNavigate(); // Move the hook inside the component

  return (
    <div className="bg-white shadow-sm p-4">
      <div className="flex justify-between items-center">
        <div className="flex gap-4">
          <h1 className='font-bold text-3xl '>Welcome</h1>
        </div>
        <div className="flex items-center gap-4">
          <button 
            onClick={() => navigate('/login')} // Use navigate instead of Navigate
            className="bg-blue-600 font-bold p-2 rounded-2xl text-white w-24"
          >
            Login
          </button>
          {/* <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2">
            <Download size={20} />
            Export Data
          </button> */}
          <div className="bg-amber-400 w-9 h-9 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
