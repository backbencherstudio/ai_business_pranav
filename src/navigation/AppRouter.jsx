import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../page/Home/Home";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
