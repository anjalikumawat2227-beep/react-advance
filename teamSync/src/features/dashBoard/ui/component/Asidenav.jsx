import React from 'react'
import NavigationTab from './NavigationTab'
import { ChartAreaIcon } from 'lucide-react'

import { useSelector } from 'react-redux'
import { adminNavigation, employeeNavigation } from '../../../../app/constants/navigations'

const Asidenav = () => {
  let {employee} = useSelector((store)=>store.auth)
   let navigations =
    employee?.role === "admin" ? adminNavigation : employeeNavigation;

  return (
    <div>
      <div className="flex flex-col gap-1 p-4">
        <h1 className="text-2xl font-semibold text-[#CAB8F9]">team-sync</h1>
        <p className="text-sm text-[var(--text-secondary)]">
          Enterprise workspace
        </p>
      </div>
      <div>
        {
          navigations.map((nav) => {
            return <NavigationTab key={nav.path} path={nav.path} title={nav.title} icon={nav.icon} />
          })
        }
      </div>
    </div>
  )
}

export default Asidenav
