import React from 'react';
import { Search, Download } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { FaUserCircle } from "react-icons/fa";


const TopBar = () => {

  const user = JSON.parse(localStorage.getItem("user")); // Get user details
console.log(user)



  const navigate = useNavigate(); // Move the hook inside the component

  return (
    <div className="bg-white shadow-sm p-4">
      <div className="flex justify-between items-center">
        <div className="flex gap-4">
          <h1 className='font-bold text-3xl '>Welcome</h1>
        </div>
        <div className="flex items-center gap-4">
          <button 
            // Use navigate instead of Navigate
            className="bg-red-600 font-bold p-2 rounded-2xl text-slate-100 w-20"
          >
            Logout
          </button>
          {/* <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2">
            <Download size={20} />
            Export Data
          </button> */}
          <div className=" font-bold text-4xl"><FaUserCircle />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
