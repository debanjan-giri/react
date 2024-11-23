import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import ProtectedRoute from "./ProtectedRoute";
import Error404 from "./Error404";
import PageNotFound from "./PageNotFound";

import { AuthRoute } from "../pages/auth/router/AuthRoute.jsx";
import { DashboardRoute } from "../pages/dashboard/router/DashboardRoute.jsx";
import { CatalogRoute } from "../pages/catalog/router/CatalogRoute.jsx";
import { AnalyticsRoute } from "../pages/analytics/router/AnalyticsRoute.jsx";
import { EmployeeRoute } from "../pages/employee/router/EmployeeRoute.jsx";
import { SettingRoute } from "../pages/setting/router/SettingRoute.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProtectedRoute element={<MainLayout />} />,
    errorElement: <Error404 />,
    children: [
      ...EmployeeRoute,
      ...DashboardRoute,
      ...CatalogRoute,
      ...AnalyticsRoute,
      ...SettingRoute,
    ],
  },
  ...AuthRoute,
  {
    path: "*",
    element: <PageNotFound />,
    errorElement: <Error404 />,
  },
]);

export default router;
