import React from "react";
import loginIMG from "../assets/login.jpg";

function Login() {
  return (
    <div className="grid grid-col-1 sm:grid-cols-2 h-screen w-full bg-[#DEDBB8]">
      <div className="hidden sm:block shadow-xxl">
        <img
          className="h-screen w-full object-cover content-center"
          src={loginIMG}
          alt="background: typewriter, old book, pinecone, and small objects around a wooden desk"
        />
      </div>
      <div className="bg-yellow-600 flex flex-col justify-center m-2 rounded-lg drop-shadow-xl">
        <form className="max-w-[500px] w-full mx-auto bg-[#77A797] p-4 rounded-lg drop-shadow-md">
          <h2 className="text-3xl font-bold text-center py-6 font-special">
            Writing the Right way
          </h2>
          <div className="flex flex-col py-2">
            <label>Username</label>
            <input type="text" className="border p-2 " />
          </div>
          <div className="flex flex-col py-2">
            <label>Password</label>
            <input type="password" className="border p-2 " />
          </div>
          <button className="border w-full my-5 py-2 bg-[#DEDBB8] rounded-lg hover:bg-[#77A797] font-bold text-lg">
            Sign in
          </button>
          <div className=" flex justify-between">
            <p className="flex">
              <input type="checkbox"  className="mr-2"/> Remember me
            </p>
            <p>Create an account</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
