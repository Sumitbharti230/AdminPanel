import React, { useState, useEffect } from "react";
import { FaEdit, FaEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const base_Url = import.meta.env.VITE_BASE_URL;

const SemesterList = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  // Fetch semester data
  const getData = async () => {
    const token = localStorage.getItem("token");
    console.log("Token:", token);

    if (!token) {
      console.error("No token found. User may not be logged in.");
      return;
    }

    try {
      const response = await fetch(`${base_Url}/studysemester/list`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
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
      console.log("Study Semester data:", result);
      setData(result.data);
    } catch (error) {
      console.error("Error fetching study semester data:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container mx-auto px-4 mt-10">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-gray-200 p-4 flex justify-between items-center">
          <h2 className="text-xl font-bold text-gray-800">Study Semester List</h2>
          <div className="text-gray-600">Total {data.length} Semesters</div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border-separate border-spacing-0">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-3 text-left text-sm font-semibold text-gray-700">SN</th>
                <th className="p-3 text-left text-sm font-semibold text-gray-700">Semester Name</th>
                <th className="p-3 text-left text-sm font-semibold text-gray-700">Semester Code</th>
                <th className="p-3 text-left text-sm font-semibold text-gray-700">Remarks</th>
                <th className="p-3 text-center text-sm font-semibold text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.length > 0 ? (
                data.map((semester, index) => (
                  <tr key={semester.id} className="hover:bg-gray-50">
                    <td className="p-3 text-sm text-gray-800">{index + 1}</td> {/* Serial Number */}
                    <td className="p-3 text-sm text-gray-800">{semester.semName}</td>
                    <td className="p-3 text-sm text-gray-800">{semester.semCode}</td>
                    <td className="p-3 text-sm text-gray-800">{semester.remarks}</td>
                    <td className="p-3 text-center space-x-4">
                      <button title="View">
                        <FaEye className="text-blue-600 hover:text-blue-800" />
                      </button>
                      <button title="Edit">
                        <FaEdit
                          onClick={() => navigate("/editstudysemester", { state: semester })}
                          className="text-yellow-600 hover:text-yellow-800"
                        />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="p-3 text-center text-gray-600">
                    No study semesters found.
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

export default SemesterList;
