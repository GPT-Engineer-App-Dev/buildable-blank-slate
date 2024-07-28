import { Home, Settings, HelpCircle } from "lucide-react";
import Home from "./pages/Home";
import Settings from "./pages/Settings";
import Help from "./pages/Help";

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
    page: <Home />,
  },
  {
    title: "Settings",
    to: "/settings",
    icon: <Settings className="h-4 w-4" />,
    page: <Settings />,
  },
  {
    title: "Help",
    to: "/help",
    icon: <HelpCircle className="h-4 w-4" />,
    page: <Help />,
  },
];
