import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import { Home } from "../pages";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route element={<ProtectedRoute />}>
        {/* All protected routes should be here */}

        {/* <Route path="/profile" element={<Profile />} /> */}
      </Route>
    </Routes>
  );
};

export default AppRoutes;
