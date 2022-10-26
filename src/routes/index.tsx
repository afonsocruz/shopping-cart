import React from "react";
import { Route, Routes } from 'react-router-dom'
import { PDP } from "../pages";

const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<PDP />} />
    </Routes>
  );
};

export default Router;