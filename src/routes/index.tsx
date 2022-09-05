import { Navigate, Route, Routes } from "react-router-dom";

import { Home } from "../pages/Home";
import { Repositories } from "../pages/Repositories";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/repositories" element={<Repositories />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
