import React from 'react'
import { NavLink } from 'react-router'

const NavigationTab = ({path,title,icon}) => {
  return (
    <NavLink className ={"flex gap-4 pl-4 "} to={path}>
    {icon}
    <span>{title}</span>
    </NavLink>
  )
}

export default NavigationTab
