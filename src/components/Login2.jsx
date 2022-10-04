import React from "react";
import { FcGoogle } from "react-icons/fc";
import { AiFillFacebook } from "react-icons/ai";
import loginIMG from "../assets/login.jpg";

function Login2() {
  return (
    <div className="relative w-full h-screen bg-blue-500/60 ">
      <img
        className="absolute inset-0 object-cover w-full h-full mix-blend-overlay"
        src={loginIMG}
        alt="background: typewriter, old book, pinecone, and small objects around a wooden desk"
      />

      <div className="flex justify-center h-full items-center">
        <form className="m-w-[400px] mx-auto bg-white p-8 rounded-xl shadow-2xl">
          <h2 className="text-4xl font-bold text-center py-4">
            Write the Right Way
          </h2>
          <div className="flex justify-between py-8">
            <p className=" border shadow-xl hover:shadow-2xl px-6 py-2 relative flex items-center cursor-pointer">
              <AiFillFacebook className="mr-2" /> Facebook
            </p>
            <p className=" border shadow-xl hover:shadow-2xl px-6 py-2 relative flex items-center cursor-pointer">
              <FcGoogle className="mr-2" /> Google
            </p>
          </div>
          <div className=" flex flex-col m-4">
            <label>Username</label>
            <input type="text" className=" border relative bg-blue-400 p-2" />
          </div>
          <div className=" flex flex-col m-4">
            <label>Password</label>
            <input
              type="password"
              className=" border relative bg-blue-400 p-2"
            />
          </div>
          <button className="relative w-full py-3 mt-8 bg-blue-400 hover:bg-blue-700 text-center font-bold hover:text-white rounded-lg">
            Sign In
          </button>
          <p className="flex items-center pt-2">
            <input type="checkbox" className="relative cursor-pointer mr-2" />
            Remember me
          </p>
          <p className="text-center mt-8">Not a member? Sign up now</p>
        </form>
      </div>
    </div>
  );
}

export default Login2;
