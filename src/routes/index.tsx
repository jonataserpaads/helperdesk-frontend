import { Routes, Route, Navigate } from "react-router-dom";
import { ListTickets } from "../features/ticket/pages/ListTickets";
import { Home } from "../features/home";
import { ListWhats } from "../features/whatsapp/pages/ListWhats";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/ticket" element={<ListTickets />} />
      <Route path="/chat-whatsapp" element={<ListWhats />} />
      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
  );
};
