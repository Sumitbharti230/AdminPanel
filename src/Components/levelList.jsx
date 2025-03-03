import React, { useState, useEffect } from "react";
import { FaEdit, FaTrash, FaEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import TopBar from "../Components/TopBar"; // Assuming you already have this component

const base_Url = import.meta.env.VITE_BASE_URL;

const LevelList = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  // Fetch data function with token in header
  const getData = async () => {
    const token = localStorage.getItem("token"); // Retrieve token from localStorage
    console.log("The login token is:", token);

    if (!token) {
      console.error("No token found, user may not be logged in");
      return;
    }

    try {
      const response = await fetch(`${base_Url}/level/list`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "Authorization": `Bearer ${token}`,
        },
      });

      console.log("Response status:", response.status); // Log response status

      if (response.status === 401) {
        console.error("Unauthorized! Token might be invalid or expired.");
        return;
      }

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();
      console.log("Level data:", result); // Log actual data
      setData(result.data); // Assuming API response has a `data` field

    } catch (error) {
      console.error("Error fetching level data:", error);
    }
  };

  useEffect(() => {
    getData(); // Call the getData function to fetch level data
  }, []); // Empty dependency array means this runs only once after initial render

  return (
    <>
      <div className="mb-5">
        <TopBar />
      </div>

      <div className="container mx-auto px-4">
        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          <div className="bg-gray-200 p-4 flex justify-between items-center">
            <h2 className="font-bold text-xl text-gray-800">Level List</h2>
            <div className="text-gray-600">Total {data.length} Levels</div>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border-separate border-spacing-0">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-3 text-left text-sm font-semibold text-gray-700">Level Name</th>
                  <th className="p-3 text-left text-sm font-semibold text-gray-700">Level Code</th>
                  <th className="p-3 text-center text-sm font-semibold text-gray-700">Actions</th>
                </tr>
              </thead>
              <tbody>
                {data.length > 0 ? (
                  data.map((level) => (
                    <tr key={level.id} className="hover:bg-gray-50">
                      <td className="p-3 text-sm text-gray-800">{level.levelName}</td>
                      <td className="p-3 text-sm text-gray-800">{level.levelCode}</td>
                      <td className="p-3 text-center space-x-4">
                        <button title="View">
                          <FaEye className="text-blue-600 hover:text-blue-800" />
                        </button>
                        <button title="Edit">
                          <FaEdit
                            onClick={() => {
                              navigate("/editlevel", { state: level });
                            }}
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
                    <td colSpan="3" className="p-3 text-center text-gray-600">
                      Loading data...
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default LevelList;
