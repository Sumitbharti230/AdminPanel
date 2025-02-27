import React, { useState, useEffect } from "react";
import { FaEdit, FaTrash, FaEye } from "react-icons/fa";
import TopBar from "./TopBar";
import { useNavigate } from "react-router-dom";

const base_Url = import.meta.env.VITE_BASE_URL;

const FacultyListTable = () => {
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
      const response = await fetch(`${base_Url}/faculty/list`, {
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
      console.log("Faculty data:", result); // Log actual data
      setData(result.data); // Assuming API response has a `data` field

    } catch (error) {
      console.error("Error fetching faculty data:", error);
    }
  };


  useEffect(() => {
    getData(); // Call the getData function to fetch faculty data
  }, []); // Empty dependency array means this runs only once after initial render


  
  return (
    <>
      <div className=" mb-5">
        <TopBar />
      </div>

      <div className="flex flex-col shadow-2xl p-2">
        <div className="flex bg-gray-300 font-bold p-3 border-gray-300 text-slate-800 rounded-sm">
          <div className="w-1/3">Faculty Name</div>
          <div className="w-1/3">Faculty Code</div>
          <div className="w-1/3 text-center">Actions</div>
        </div>

        {data.length > 0 ? (
          data.map((faculty) => (
            <div
              key={faculty.id}
              className="flex items-center py-3 rounded-sm px-6 border-b border-gray-300 bg-slate-50 hover:bg-gray-100"
            >
              <div className="w-1/3 ">{faculty.facultyName}</div>
              <div className="w-1/3">{faculty.facultyCode}</div>
              <div className="w-1/3 flex justify-center space-x-4">
                <button title="View">
                  <FaEye className="hover:text-blue-700" />
                </button>

                <button title="Edit">
                  <FaEdit
                    onClick={() => {
                      navigate("/editfaculty", { state: faculty });
                    }}
                    className="text-blue-500 hover:text-blue-700"
                  />
                </button>

                <button title="Delete">
                  <FaTrash className="text-red-500 hover:text-red-700" />
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="mx-auto w-full max-w-sm rounded-md border border-slate-300 p-4 mt-5">
            <div className="flex animate-pulse space-x-4">
              <div className="size-10 rounded-full bg-gray-200"></div>
              <div className="flex-1 space-y-6 py-1">
                <div className="h-2 rounded bg-gray-200"></div>
                <div className="space-y-3">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="col-span-2 h-2 rounded bg-gray-200"></div>
                    <div className="col-span-1 h-2 rounded bg-gray-200"></div>
                  </div>
                  <div className="h-2 rounded bg-gray-200"></div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default FacultyListTable;
