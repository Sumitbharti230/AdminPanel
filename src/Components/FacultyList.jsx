import React, { useState, useEffect } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import TopBar from "./TopBar";

const FacultyListTable = () => {
  const [data, setData] = useState([]);
  
  const getFacultyList = async () => {
    try {
      const response = await fetch("161.97.124.77:8088/v1/faculty/list");

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json(); // Ensure the response is JSON
      console.log("Fetched data:", result);

      if (result.success && Array.isArray(result.data)) {
        setData(result.data);
      } else {
        console.error("Unexpected data format:", result);
        setData([]);
      }
    } catch (error) {
      console.error("Error fetching faculty list:", error);
      setData([]);
    }
  };

  useEffect(() => {
    getFacultyList();
  }, []);

  return (
    <>
      <div className="mb-3">
        <TopBar />
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-3 px-6 text-left border-b">Faculty Name</th>
              <th className="py-3 px-6 text-left border-b">Faculty Code</th>
              <th className="py-3 px-6 text-center border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.length > 0 ? (
              data.map((faculty, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="py-3 px-6 border-b">{faculty.facultyName}</td>
                  <td className="py-3 px-6 border-b">{faculty.facultyCode}</td>
                  <td className="py-3 px-6 border-b text-center">
                    <div className="flex items-center justify-center space-x-4">
                      <button title="Edit">
                        <FaEdit className="text-blue-500 hover:text-blue-700" />
                      </button>
                      <button title="Delete">
                        <FaTrash className="text-red-500 hover:text-red-700" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="py-3 px-6 text-center border-b">
                  No faculty found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default FacultyListTable;
