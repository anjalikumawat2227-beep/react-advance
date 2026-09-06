import Chats from "../../features/chats/ui/pages/Chats"
import Home from "../../features/dashBoard/ui/pages/Home"
import Settings from "../../features/settings/ui/pages/Settings"
export const commanRoutes =[
    {
        path:"",
        element:<Home/>
    },{
        path:"chat",
        element:<Chats/>
    },{
        path:"setting",
        element:<Settings/>
    }
]