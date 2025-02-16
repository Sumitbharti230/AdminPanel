import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import TopBar from "./TopBar";

const CampusList = ({ campuses, handleEdit, handleDelete }) => {
    return (


        <>
<div className="mb-5">

    <TopBar/>
</div>


        <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="py-3 px-6 text-left border-b">Campus Name</th>
                        <th className="py-3 px-6 text-left border-b">Location</th>
                        <th className="py-3 px-6 text-center border-b">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="hover:bg-gray-50">
                        <td className="py-3 px-6 border-b">nepalgunj college</td>
                        <td className="py-3 px-6 border-b">banke</td>
                        <td className="py-3 px-6 border-b text-center">
                            <div className="flex items-center justify-center space-x-4">
                                <button  title="Edit">
                                    <FaEdit className="text-blue-500 hover:text-blue-700" />
                                </button>
                                <button  title="Delete">
                                    <FaTrash className="text-red-500 hover:text-red-700" />
                                </button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

</>
    );
};

export default CampusList;
