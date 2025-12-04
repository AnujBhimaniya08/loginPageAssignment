import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import { purple } from "@mui/material/colors";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const [signOption, setSignOption] = useState("signIn");
  const handleChange = (option) => {
    setSignOption(option);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const formJson = new FormData(event.currentTarget);
    const formdata = Object.fromEntries(formJson.entries());
    const email = formdata.email;
    const password = formdata.password;
    const confirmPassword = formdata.confirmPassword;
    const firstName = formdata.firstName;
    const lastName = formdata.lastName;
    if (email && password) {
      localStorage.setItem(
        "LoggedInUser",
        JSON.stringify({
          email,
          password,
        })
      );
      navigate("/user");
    }
    if (email && password && confirmPassword && firstName && lastName) {
      localStorage.setItem(
        "RegisteredUser",
        JSON.stringify({
          email,
          password,
          confirmPassword,
          firstName,
          lastName,
        })
      );
      navigate("/user");
    }
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
                SignIn
              </a>
            </span>
          </div>
          <div className="my-2">
            <form id="signInForm" onSubmit={handleSubmit}>
              <div className="flex justify-around">
                <input
                  name="firstName"
                  placeholder="First name"
                  id="firstName"
                  className="h-10 p-2 text-white  border-black  border my-2 hover:border-violet-600 bg-[#4a4a6b] transition-all w-5/12 rounded-md"
                />
                <input
                  name="lastName"
                  placeholder="Last name"
                  id="lastName"
                  className="h-10 p-2 text-white border-black  border-1 my-2 hover:border-violet-600 bg-[#4a4a6b] transition-all w-5/12 rounded-md"
                />
              </div>
              <div>
                <input
                  name="email"
                  placeholder="Email"
                  id="Email"
                  type="email"
                  className="h-10 p-2 text-white  border-black  border-1 mx-5 my-2 hover:border-violet-600 bg-[#4a4a6b] transition-all w-11/12 rounded-md"
                />
                <input
                  name="password"
                  placeholder="Enter your password"
                  id="password"
                  type="password"
                  className="h-10 p-2 text-white  border-black  border-1 mx-5 my-2 hover:border-violet-600 bg-[#4a4a6b] transition-all w-11/12 rounded-md"
                />
                <input
                  name="confirmPassword"
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
            <h1 className="text-white text-4xl "> Login!</h1>
            <span className="text-white ">
              Dont have an account?{" "}
              <a
                className="text-violet-500 underline"
                onClick={() => handleChange("signIn")}
              >
                SignUp
              </a>
            </span>
          </div>

          <div className="my-2">
            <form id="signInForm" action="/" onSubmit={handleSubmit}>
              <div className="flex flex-col gap-3">
                <TextField
                  name="email"
                  placeholder="Email"
                  type="email"
                  className="h-14 p-2 text-white   border-1 mx-5 my-2 bg-[#4a4a6b] transition-all w-11/12 rounded-md"
                />
                <TextField
                  name="password"
                  placeholder="password"
                  type="password"
                  className="h-14 p-2 text-white   border-1 mx-5 my-2 bg-[#4a4a6b] transition-all w-11/12 rounded-md"
                />
              </div>
              <div className="my-4 mx-4 relative left-4">
                {" "}
                <Button
                  type="submit"
                  form="signInForm"
                  variant="contained"
                  className="bg-violet-500  rounded-md text-xl my-8 text-white px-2 py-2 mx-11 w-10/12"
                >
                  SignIn
                </Button>
              </div>
            </form>
          </div>

          <a className="text-blue-500"> Forget your password? </a>
        </div>
      )}
    </div>
  );
};

export default Login;
