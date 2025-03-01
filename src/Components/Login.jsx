import { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const base_Url = import.meta.env.VITE_BASE_URL;

export default function LoginPage({ setIsAuthenticated }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const [rememberMe, setRememberMe] = useState(false); // "Remember Me" state
  const [errorMessage, setErrorMessage] = useState(""); // Error state
  const navigate = useNavigate();

  // Handle Remember Me checkbox
  // const handleRememberChange = (e) => {
  //   setRememberMe(e.target.checked);
  // };

  // Handle Login
  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMessage(""); // Clear previous errors

    try {
      const response = await fetch(`${base_Url}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();
      console.log("API Response:", data); // Debugging API response

      if (response.ok && data.data.token) {
        console.log("Login successful:", data);

        // Always store in sessionStorage
        localStorage.setItem("token", data.data.token);

        // If "Remember Me" is checked, also store in localStorage
        // if (rememberMe) {
        //   localStorage.setItem("token", data.data.token);
        // }

        //  Update authentication state in App.js
        setIsAuthenticated(true);

        navigate("/"); // Redirect to home
      } else {
        setErrorMessage(data.message || "Invalid username or password!"); // Show error message
      }
    } catch (error) {
      console.error("Error logging in:", error);
      setErrorMessage("Invalid username or password!");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-200">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-96">
        <h2 className="text-2xl font-semibold text-center mb-6">HEMIS Login</h2>

        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Username</label>
            <div className="flex items-center border rounded-lg p-2 bg-gray-100">
              <FaUser className="text-gray-500 mr-2" />
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter username"
                className="w-full bg-transparent outline-none"
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Password</label>
            <div className="flex items-center border rounded-lg p-2 bg-gray-100">
              <FaLock className="text-gray-500 mr-2" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className="w-full bg-transparent outline-none"
                required
              />
            </div>
          </div>

          {errorMessage && ( // Display error message
            <div className="mb-4 text-red-600 text-center">{errorMessage}</div>
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
