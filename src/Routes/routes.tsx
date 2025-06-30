import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import Users from "../pages/Users/Users";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/usuarios" element={<Users />} />
      </Routes>
    </BrowserRouter>
  );
}