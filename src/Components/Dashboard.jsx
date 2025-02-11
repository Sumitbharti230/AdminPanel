import { FaUserGraduate, FaUsers, FaUniversity, FaBook } from "react-icons/fa";
import { Bar, Pie } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, ArcElement, Tooltip, Legend } from "chart.js";
import TopBar from "../Components/TopBar";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, ArcElement, Tooltip, Legend);

const Dashboard = () => {

  // Bar Chart Data
  const barData = {
    labels: ["Total Students", "Graduates", "Faculty Members", "Programs"],
    datasets: [
      {
        label: "Count Bar_Graph",
        data: [2543, 486, 124, 1400],
        backgroundColor: ["#3B82F6", "#10B981", "#8B5CF6", "#F59E0B"],
      },
    ],
  };

  // Pie Chart Data
  const pieData = {
    labels: ["Students", "Graduates", "Faculty", "programs"],
    datasets: [
      {
        data: [2543, 486, 124, 1400],
        backgroundColor: ["#3B82F6", "#10B981", "#8B5CF6", "#F59E0B"],
      },
    ],
  };

  return (
    <>
  <div>
    <TopBar />
    </div>

    <div className="p-6">
      
      {/* Dashboard Title */}
      <h2 className="text-3xl font-bold text-gray-800 mb-6">📊 Welcome, Sir/Ma'am</h2>

      {/* Dashboard Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">

        {/* Total Students */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-xl flex items-center gap-4 border-l-4 border-blue-500">
          <FaUsers className="text-blue-500 text-4xl" />
          <div>
            <h3 className="text-gray-600">Total Students</h3>
            <span className="text-2xl font-bold text-gray-800">2,543</span>
          </div>
        </div>

        {/* Graduates */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-xl flex items-center gap-4 border-l-4 border-green-500">
          <FaUserGraduate className="text-green-500 text-4xl" />
          <div>
            <h3 className="text-gray-600">Graduates</h3>
            <span className="text-2xl font-bold text-gray-800">486</span>
          </div>
        </div>

        {/* Faculty Members */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-xl flex items-center gap-4 border-l-4 border-purple-500">
          <FaUniversity className="text-purple-500 text-4xl" />
          <div>
            <h3 className="text-gray-600">Faculty Members</h3>
            <span className="text-2xl font-bold text-gray-800">124</span>
          </div>
        </div>

        {/* Programs */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-xl flex items-center gap-4 border-l-4 border-orange-500">
          <FaBook className="text-orange-500 text-4xl" />
          <div>
            <h3 className="text-gray-600">Programs</h3>
            <span className="text-2xl font-bold text-gray-800">1400</span>
          </div>
        </div>

      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-20 ">
        {/* Bar Chart */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-xl">
          <h3 className="text-xl font-bold text-gray-800 mb-4 ">📊 Student & Faculty Stats</h3>
          <Bar data={barData} className="mt-11" />
        </div>

        {/* Pie Chart */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-xl w-[100%]">
          <h3 className="text-xl font-bold text-gray-800 mb-4">🥧 Distribution</h3>
          <div className="w-[100%] h-80   flex justify-center">
            <Pie data={pieData} />
          </div>
        </div>
      </div>

    </div>
    </>
  );
};

export default Dashboard;
