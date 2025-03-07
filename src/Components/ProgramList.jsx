import React, { useState, useEffect } from "react";
import { FaEdit, FaTrash, FaEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const base_Url = import.meta.env.VITE_BASE_URL;

const ProgramListTable = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  // Fetch program data
  const getData = async () => {
    const token = localStorage.getItem("token");
    console.log("Token:", token);

    if (!token) {
      console.error("No token found. User may not be logged in.");
      return;
    }

    try {
      const response = await fetch(`${base_Url}/program/list`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
      });

      console.log("Response status:", response.status);

      if (response.status === 401) {
        console.error("Unauthorized! Invalid or expired token.");
        return;
      }

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();
      console.log("Program data:", result);
      setData(result.data);
    } catch (error) {
      console.error("Error fetching program data:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container mx-auto px-4 mt-10">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-gray-200 p-4 flex justify-between items-center">
          <h2 className="text-xl font-bold text-gray-800">Program List</h2>
          <div className="text-gray-600">Total {data.length} Programs</div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border-separate border-spacing-0">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-3 text-left text-sm font-semibold text-gray-700">Program Name</th>
                <th className="p-3 text-left text-sm font-semibold text-gray-700">Program Code</th>
                <th className="p-3 text-left text-sm font-semibold text-gray-700">Remarks</th>
                <th className="p-3 text-center text-sm font-semibold text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.length > 0 ? (
                data.map((program) => (
                  <tr key={program.id} className="hover:bg-gray-50">
                    <td className="p-3 text-sm text-gray-800">{program.programName}</td>
                    <td className="p-3 text-sm text-gray-800">{program.programCode}</td>
                    <td className="p-3 text-sm text-gray-800">{program.remarks}</td>
                    <td className="p-3 text-center space-x-4">
                      <button title="View">
                        <FaEye className="text-blue-600 hover:text-blue-800" />
                      </button>
                      <button title="Edit">
                        <FaEdit
                          onClick={() => navigate("/editprogram", { state: program })}
                          className="text-yellow-600 hover:text-yellow-800"
                        />
                      </button>
                      <button title="Delete">
                        <FaTrash className="text-red-600 hover:text-red-800" />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="p-3 text-center text-gray-600">
                    No programs found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProgramListTable;
