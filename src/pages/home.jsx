import React from "react";
import Login from "../components/login";

const Home = () => {
  return (
    <div className="h-180 w-8/12 mx-auto rounded-md relative top-6 bg-[#393961]">
      {" "}
      <div className=" h-11/12 rounded-lg my-auto ml-15  flex justify-between ">
        {" "}
        {/* <h1 className="bg-transparent border-2 h-7 w-10 absolute top-12 left-80">
          XMV
        </h1> */}
        <div className=" h-full w-6/12 ">
          {" "}
          <img
            src="https://img.freepik.com/premium-photo/abstract-dark-blue-desert-background_520665-13589.jpg"
            alt="loginImage"
            width={315}
            className="rounded-lg  relative right-10 top-5 "
          />{" "}
        </div>
        <div className=" rounded-lg h-11/12 mr-10 my-auto bg-[#393961] w-9/12">
          <Login />
        </div>
      </div>
    </div>
  );
};

export default Home;
