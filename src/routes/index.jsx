import { Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "../layouts/AppLayout";
import AuthLayout from "../layouts/AuthLayout";

import * as Pages from "../pages";

export default function PageRoutes () {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Pages.Home />} />
        <Route path="/manage" element={<Pages.ManageBooks />} />
        <Route path="/book/:id" element={<Pages.Book />} />
        <Route path="/favorite" element={<Pages.FavoriteBook/>} />
      </Route>
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Pages.Login />} />
        <Route path="/register" element={<Pages.Register />} />
      </Route>
      <Route path="/Error" element={<Pages.Error404 />} />
      <Route path="*" element={<Navigate to="/Error" replace />} />
    </Routes>
  );
}
