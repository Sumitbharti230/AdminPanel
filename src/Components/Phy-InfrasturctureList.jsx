import React, { useState, useEffect } from "react";
import { FaEdit, FaEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const base_Url = import.meta.env.VITE_BASE_URL;

const InfrastructureList = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  // Fetch infrastructure data
  const getData = async () => {
    const token = localStorage.getItem("token");
    console.log("Token:", token);

    if (!token) {
      console.error("No token found. User may not be logged in.");
      return;
    }

    try {
      const response = await fetch(`${base_Url}/infrastructure/list`, {
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
      console.log("Infrastructure data:", result);
      setData(result.data);
    } catch (error) {
      console.error("Error fetching infrastructure data:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container mx-auto px-4 mt-10">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-gray-200 p-4 flex justify-between items-center">
          <h2 className="text-xl font-bold text-gray-800">Infrastructure List</h2>
          <div className="text-gray-600">Total {data.length} Infrastructures</div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border-separate border-spacing-0">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-3 text-left text-sm font-semibold text-gray-700">SN</th>
                <th className="p-3 text-left text-sm font-semibold text-gray-700">Name</th>
                <th className="p-3 text-left text-sm font-semibold text-gray-700">Code</th>
                <th className="p-3 text-left text-sm font-semibold text-gray-700">Remarks</th>
                <th className="p-3 text-center text-sm font-semibold text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.length > 0 ? (
                data.map((infrastructure, index) => (
                  <tr key={infrastructure.id} className="hover:bg-gray-50">
                    <td className="p-3 text-sm text-gray-800">{index + 1}</td> {/* SN column */}
                    <td className="p-3 text-sm text-gray-800">{infrastructure.name}</td>
                    <td className="p-3 text-sm text-gray-800">{infrastructure.code}</td>
                    <td className="p-3 text-sm text-gray-800">{infrastructure.remarks}</td>
                    <td className="p-3 text-center space-x-4">
                      <button title="View">
                        <FaEye className="text-blue-600 hover:text-blue-800" />
                      </button>
                      <button title="Edit">
                        <FaEdit
                          onClick={() => navigate("/editinfrastructure", { state: infrastructure })}
                          className="text-yellow-600 hover:text-yellow-800"
                        />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="p-3 text-center text-gray-600">
                    No infrastructure found.
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

export default InfrastructureList;
