import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../HomePage";
import Product from "../pages/Product";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products" element={<Product />} />
    </Routes>
  );
}
