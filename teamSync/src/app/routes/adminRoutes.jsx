import Employee from "../../features/adminModule/employee/ui/pages/Employee";
import Department from "../../features/adminModule/department/ui/pages/Department";
import Document from "../../features/adminModule/documents/ui/pages/Document";
import Task from "../../features/adminModule/task/ui/pages/Task";
import AddEmployee from "../../features/adminModule/employee/ui/pages/AddEmployee";

export const adminRoutes =[
    {
        path:"employee",
        element:<Employee/>
    },{
        path:"add-employee",
        element:<AddEmployee/>
    },{
        path:"document",
        element:<Document/>
    },{
        path:"department",
        element:<Department/>
    },{
        path:"task",
        element:<Task/>
    }
]