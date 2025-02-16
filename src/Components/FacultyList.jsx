import React, { useState, useEffect } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import TopBar from "./TopBar";

const FacultyListTable = () => {
  const baseUrl = import.meta.env.VITE_BASE_URL;

  const [data, setdata] = useState([]);

  const getFacultylist = async () => {

      let response = await fetch(`${baseUrl}/faculty/list`);
      console.log(response)

      response = await response.json();
      console.log(response.data)
      setdata(response.data); 


    } 

  useEffect(() => {
    getFacultylist();
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
              data.map((faculty) => (

                <tr key={faculty.id} className="hover:bg-gray-50">
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
