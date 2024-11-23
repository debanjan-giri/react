import Error404 from "../../../router/Error404";
import AuthPage from "../pages/AuthPage";

export const AuthRoute = [
  {
    path: "/login",
    element: <AuthPage page="Login" />,
    errorElement: <Error404 />,
  },
  {
    path: "/register",
    element: <AuthPage page="Register" />,
    errorElement: <Error404 />,
  },
];
