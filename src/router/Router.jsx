import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../layout/Layout";
import BrowseMore from "../pages/BrowseMore";
import Login from "../pages/Login";
import ResultsSearch from "../pages/ResultsSearch";

const Router = () => {
  return (
    <Routes>
      <Route index element={<Layout />} />
      <Route path="/" element={<Layout />} />
      <Route path="/browseMore" element={<BrowseMore />} />
      <Route path="/login" element={<Login />} />
      <Route path="/resultSearch" element={<ResultsSearch />} />
    </Routes>
  );
};

export default Router;
