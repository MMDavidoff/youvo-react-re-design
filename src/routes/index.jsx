import { createBrowserRouter } from "react-router-dom";
import { ROUTES } from "./routes.const";
import HomePage from "../pages/HomePage";

const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <HomePage />,
  },
]);

export default router;
