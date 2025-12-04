import React from "react";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "./pages/home";
import Registered from "./pages/registered";
const App = () => {
  return (
    <div className="bg-[#7a5f7e] h-screen">
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user" element={<Registered />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
