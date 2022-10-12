import React from "react";

const Login = () => {
    const handleSubmit = async (e)=>{
        e.preventDefault();
        fetch()
        const response = await fetch("http/api/notes/fetchallnotes", {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM0MDJkNzU1M2FmOTliMGVlZjI2NTM0In0sImlhdCI6MTY2NTE1MDMyNX0.21oCHuWw9znwAh1XjjmkspjjhwBbkDeEM_QBgueLQc0"
            }
          });
    }
  return (
    <div>
      <div class="w-full max-w-xs">
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="username"
            >
              Username
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              name="email"
              placeholder="Username"
            />
          </div>
          <div class="mb-6">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="password"
              name="password"

            >
              Password
            </label>
            <input
              class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              name="password"
              placeholder="******************"
            />
            <p class="text-red-500 text-xs italic">Please choose a password.</p>
          </div>
          <div class="flex items-center justify-between">
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit" onSubmit={handleSubmit}
            >
              Sign In
            </button>
           
          </div>
        </form>
        <p class="text-center text-gray-500 text-xs">
          &copy;2020 iNote. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Login;
