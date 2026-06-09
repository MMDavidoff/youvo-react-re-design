import { createBrowserRouter } from "react-router-dom";
import { ROUTES } from "./routes.const";
import HomePage from "../pages/HomePage";
import RegisterPage from "../pages/RegisterPage";
import AccInfoPage from "../pages/AccInfoPage";
import LoginPage from "../pages/LoginPage";
import ChatPage from "../pages/ChatPage";
import SettingsPage from "../pages/SettingsPage";
import MainPage from "../pages/MainPage";
import NewChatPage from "../pages/NewChatPage";

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

   {
    path: ROUTES.SETTINGS,
    element: <SettingsPage />,
  },

   {
    path: ROUTES.MAIN,
    element: <MainPage />,
  },
   {
    path: ROUTES.NEWCHAT,
    element: <NewChatPage />,
  },

]);

export default router;
