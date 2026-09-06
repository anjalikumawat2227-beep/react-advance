import React from 'react'
import { useEmployee } from '../../hook/useEmployee'
import EmployeeTable from '../components/employee/EmployeeTable'
import EmployeeHeader from '../components/employee/EmployeeHeader'
import EmployeeStats from '../components/employee/EmployeeStats'
import SearchFilterBar from '../components/employee/SearchFilterBar'
import Pagination from '../components/employee/Pagination'
import { Outlet } from 'react-router'

const Employee = () => {
 const {data,isPending,handlePageChange,isFetching,handleSearchFilters ,filters}= useEmployee()

 if(isPending) return <h1>loading...</h1>
  return (
      <div className="min-h-screen bg-[var(--bg-main)] p-8">
      <div className=" mx-auto">
        <Outlet />
        {/* HEADER */}
        <EmployeeHeader />

        {/* STATS */}
        <EmployeeStats employees={data?.employees} />

        {/* TABLE SECTION */}
        <div className="mt-8 bg-[var(--bg-surface)] border border-[var(--border-color)] rounded-3xl overflow-hidden">
          <SearchFilterBar filters={filters} handleSearchFilters ={handleSearchFilters } />

         {isFetching && <div className='text-center text-[var(--text-primary)]'>Loading...</div>}
          
          <EmployeeTable employees={data?.employees} />

             <Pagination
            pagination={data?.pagination}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  )
}

export default Employee
