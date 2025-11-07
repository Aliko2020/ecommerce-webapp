// src/pages/Login.js
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        // Simple authentication logic (replace with real auth)
        if (email === "user@example.com" && password === "password") {
            // Save user to localStorage
            localStorage.setItem("user", JSON.stringify({ email }));
            navigate("/"); // Redirect to home after login
        } else {
            alert("Invalid credentials");
        }
    };

    return (
        <div className="min-h-screen flex justify-center">
            <div className="w-full max-w-md p-8 mt-4 bg-white rounded-lg shadow-sm">
                <h1 className="text-lg font-bold text-gray-700 mb-6 flex items-center gap-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-green-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5.121 17.804A9 9 0 1112 21a9 9 0 01-6.879-3.196zM15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                    </svg>
                    Login
                </h1>

                <form onSubmit={handleSubmit} className="space-y-4 max-w-xs">
                    <div>
                        <label className="block text-gray-700 text-sm font-medium mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Johnsmith@gmail.com"
                            required
                            className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 text-sm font-medium mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                    </div>

                    <div className="flex m-0 justify-center gap-4 items-center">
                        <button
                            type="submit"
                            className="px-6 py-3  bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
                        >
                            Login
                        </button>

                        <p className="text-sm text-gray-500 text-center">
                            Don't have an account?{" "}
                            <span
                                onClick={() => navigate("/register")}
                                className="text-green-600 cursor-pointer hover:underline"
                            >
                                Register
                            </span>
                        </p>
                    </div>
                </form>


            </div>
        </div>
    );
};

export default Login;
