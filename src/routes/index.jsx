import { Route, Routes } from "react-router-dom";
import AppLayout from "../layouts/AppLayout";
import AuthLayout from "../layouts/AuthLayout";

import * as Pages from "../pages";

export default function () {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Pages.Home />} />
        <Route path="/manage" element={<Pages.ManageBooks />} />
        <Route path="/book/:id" element={<Pages.Book />} />
      </Route>

      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Pages.Login />} />
        <Route path="/register" element={<Pages.Register />} />
      </Route>
    </Routes>
  );
}
