import { createBrowserRouter } from "react-router-dom";
import { ROUTES } from "./routes.const";
import HomePage from "../pages/HomePage";
import RegisterPage from "../pages/RegisterPage";
import AccInfoPage from "../pages/AccInfoPage";
import LoginPage from "../pages/LoginPage";
import ChatPage from "../pages/ChatPage";

const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <HomePage />,
  },

  {
    path: ROUTES.REGISTER,
    element: <RegisterPage />,
  },

   {
    path: ROUTES.INFO,
    element: <AccInfoPage />,
  },

   {
    path: ROUTES.LOGIN,
    element: <LoginPage />,
  },

   {
    path: ROUTES.CHAT,
    element: <ChatPage />,
  },
]);

export default router;
