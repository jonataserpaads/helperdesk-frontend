import { Routes, Route, Navigate } from "react-router-dom";
import { ListTickets } from "../features/ticket/pages/ListTickets";
import { Home } from "../features/home";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/ticket" element={<ListTickets />} />
      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
  );
};
