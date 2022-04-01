import React from "react";
import { Route, Routes } from "react-router-dom";
import { publicRouts } from "../utils/routs";
import './global.css'
export const AppRouter = () => {
  return (
    <Routes>
      {publicRouts.map(({ path, component }) => (
        <Route element={component} path={path} key={path} />
      ))}
    </Routes>
  );
};
