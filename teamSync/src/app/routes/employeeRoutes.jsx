import Profile from "../../features/employeeModule/profile/ui/pages/Profile"
import MyTask from "../../features/employeeModule/myTask/ui/pages/MyTask";
import Attendance from "../../features/employeeModule/attendance/ui/pages/Attendance";

export const employeeRoutes =[
    {
        path:"profile",
        element:<Profile/>
    },{
        path:"myTask",
        element:<MyTask/>
    },{
        path:"attendance",
        element:<Attendance/>
    }
]
