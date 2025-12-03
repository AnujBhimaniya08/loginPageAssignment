import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import { purple } from "@mui/material/colors";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
const Login = () => {
  const [signOption, setSignOption] = useState("signIn");
  const handleChange = (option) => {
    setSignOption(option);
  };
  const handleSubmit = (event, option) => {
    if (option === "signUp") {
      alert("you are registered");
      const formJson = document.getElementById("signUpForm");
      console.log(formJson);
    } else {
      alert("you are loggedIn");
      const formJson = document.getElementById("signInForm");
      console.log(formJson);
    }
    event.preventDefault();
  };
  return (
    <div>
      {signOption === "signIn" ? (
        <div>
          <div className=" relative left-25">
            <h1 className="text-4xl text-white my-2"> Create Your Account</h1>
            <span className="my-1 text-white text-lg">
              Already registered?
              <a
                className="text-violet-500 mx-2 underline"
                onClick={() => handleChange("signUp")}
              >
                SignUp
              </a>
            </span>
          </div>
          <div className="my-2">
            <form id="signInForm" onSubmit={() => handleSubmit("signUp")}>
              <div className="flex justify-around">
                <input
                  placeholder="First name"
                  id="firstName"
                  className="h-10 p-2 text-white  border-black  border my-2 hover:border-violet-600 bg-[#4a4a6b] transition-all w-5/12 rounded-md"
                />
                <input
                  placeholder="Last name"
                  id="lastName"
                  className="h-10 p-2 text-white border-black  border-1 my-2 hover:border-violet-600 bg-[#4a4a6b] transition-all w-5/12 rounded-md"
                />
              </div>
              <div>
                <input
                  placeholder="Email"
                  id="Email"
                  type="email"
                  className="h-10 p-2 text-white  border-black  border-1 mx-5 my-2 hover:border-violet-600 bg-[#4a4a6b] transition-all w-11/12 rounded-md"
                />
                <input
                  placeholder="Enter your password"
                  id="password"
                  type="password"
                  className="h-10 p-2 text-white  border-black  border-1 mx-5 my-2 hover:border-violet-600 bg-[#4a4a6b] transition-all w-11/12 rounded-md"
                />
                <input
                  placeholder="Confirm your password"
                  id="confirmPassword"
                  type="password"
                  className="h-10 p-2 text-white  border-black  border-1 mx-5 my-2 hover:border-violet-600 bg-[#4a4a6b] transition-all w-11/12 rounded-md"
                />
              </div>
              <p className="text-white mx-3">
                <Checkbox
                  sx={{
                    color: purple[300],
                    "&.Mui-checked": {
                      color: purple[300],
                    },
                  }}
                />
                <span className="text-white">
                  I agree to the{" "}
                  <a
                    href="https://www.lipsum.com/"
                    className="underline hover:text-violet-500 transition-all "
                  >
                    terms & conditions
                  </a>
                </span>
              </p>

              <button
                type="submit"
                className="bg-violet-500 rounded-md text-xl my-8 text-white px-2 py-2 mx-11 w-10/12"
              >
                Create Account
              </button>
            </form>
          </div>
          <div className="flex justify-between text-gray-500  ">
            <div className="border-2 ml-4 h-1 w-4/12" />
            <span className="text-lg relative bottom-3 ">Or register with</span>
            <div className="border-2 mr-4 h-1 w-4/12" />
          </div>
          <div className="flex justify-around text-white">
            <button className=" rounded-md  hover:border-violet-600 px-4 text-xl py-2 border-2 w-5/12">
              {" "}
              <GoogleIcon /> Google
            </button>
            <button className="px-4 py-2 rounded-md  hover:border-violet-600  border-2 w-5/12">
              <FacebookIcon /> Facebook
            </button>
          </div>
        </div>
      ) : (
        <div className=" relative top-35">
          <div className="mx-5">
            <h1 className="text-white text-4xl "> Register Yourself!</h1>
            <span className="text-white ">
              Have an account?{" "}
              <a
                className="text-violet-500 underline"
                onClick={() => handleChange("signIn")}
              >
                SignIn
              </a>
            </span>
          </div>

          <div className="my-2">
            <form id="signUpForm" onSubmit={() => handleSubmit("signIn")}>
              <div>
                <input
                  placeholder="Email"
                  type="email"
                  className="h-10 p-2 text-white  border-black  border-1 mx-5 my-2 hover:border-violet-600 bg-[#4a4a6b] transition-all w-11/12 rounded-md"
                />
                <input
                  placeholder="Enter your password"
                  type="password"
                  className="h-10 p-2 text-white  border-black  border-1 mx-5 my-2 hover:border-violet-600 bg-[#4a4a6b] transition-all w-11/12 rounded-md"
                />
              </div>

              <button className="bg-violet-500 rounded-md text-xl my-8 text-white px-2 py-2 mx-11 w-10/12">
                SignIn
              </button>
            </form>
          </div>

          <a className="text-blue-500"> Forget your password? </a>
        </div>
      )}
    </div>
  );
};

export default Login;
