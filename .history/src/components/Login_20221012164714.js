import React, { useState } from "react";

const Login = () => {
    const [credentails, setCredentails] = useState({email:"",password:""})

    const handleSubmit = async (e)=>{
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({email:credentails.email, password: credentails.password})
          });
          const json = await response.json()
          console.log(json);
          if (json.success){
            //redirect
          }
          else{
            alert
          }
    }
    const onChange = (e) =>{
        setCredentails({...credentails, [e.target.name]:e.target.value})
    }
  return (
    <div>
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="w-full max-w-xs">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              name="email"
              onChange={onChange}
              value={credentails.email}
              placeholder="Username"
              />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
              
              
              >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              name="password"
              onChange={onChange}
              value={credentails.password}
              placeholder=""
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit" 
            >
              Sign In
            </button>
           
          </div>
        <p className="text-center text-gray-500 text-xs">
          &copy;2020 iNote. All rights reserved.
        </p>
      </div>
        </form>
    </div>
  );
};

export default Login;
