import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router'
import TopNav from '../../features/dashBoard/ui/component/TopNav'
import Asidenav from '../../features/dashBoard/ui/component/Asidenav'

const DashBoardLayout = () => {
  let {mode} = useSelector((store)=>store.theme)

  useEffect(()=>{
    if(mode === "light"){
    return  document.body.classList.add("light")
    }else{
    document.body.classList.remove("light")
    }
  },[mode])
  
  return (<div className="h-screen grid grid-cols-[1fr_7fr]">
      <div className="border-r border-gray-500">
        <Asidenav />
      </div>
      <div className="flex flex-col gap-5 px-6 py-4 bg-[--primary] overflow-auto">
        <TopNav />
        <div className="h-full overflow-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default DashBoardLayout
