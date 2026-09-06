import {
  Building,
  ChartArea,
  File,
  LayoutDashboard,
  List,
  PersonStanding,
  Presentation,
  Settings,
  UserPen,
} from "lucide-react";

export let employeeNavigation = [
  {
    path: "",
    title: "Dashboard",
    icon: <LayoutDashboard />,
  },
  {
    path: "myTask",
    title: "My-Task",
    icon: <List />,
  },
  {
    path: "chat",
    title: "Chats",
    icon: <ChartArea />,
  },
  {
    path: "attendance",
    title: "Attendance",
    icon: <Presentation />,
  },
  {
    path: "profile",
    title: "Profile",
    icon: <UserPen />,
  },
  {
    path: "setting",
    title: "Settings",
    icon: <Settings />,
  },
];

export let adminNavigation = [
  {
    path: "",
    title: "Dashboard",
    icon: <LayoutDashboard />,
  },
  {
    path: "task",
    title: "Task",
    icon: <List />,
  },
  {
    path: "chat",
    title: "Chats",
    icon: <ChartArea />,
  },
  {
    path: "department",
    title: "Departments",
    icon: <Building />,
  },
  {
    path: "employee",
    title: "Employee",
    icon: <PersonStanding />,
  },
  {
    path: "document",
    title: "Documents",
    icon: <File />,
  },
  {
    path: "setting",
    title: "Settings",
    icon: <Settings />,
  },
];