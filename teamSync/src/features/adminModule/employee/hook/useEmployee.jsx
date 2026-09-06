import { useQuery } from "@tanstack/react-query";
import { deleteEmployee, getAllEmployees } from "../apis/employeeApi";
import { useState } from "react";

export let useEmployee = () => {
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState({
    search: "",
    role: "",
    department: "",
    status: "",
  });


  let { data, isPending, isFetching } = useQuery({
    queryKey: ["employees", page, filters],
    queryFn: () =>
      getAllEmployees({
        page,
        limit: 20,
        role: filters.role,
        status: filters.status,
        department: filters.department,
        search: filters.search,
      }),
    staleTime: 100000,
    keepPreviousData: true,
    placeholderData: (prev) => prev,
  });


  const handlePageChange = (newPage) => {
    if (newPage < 1) return;

    if (newPage > data?.pagination?.totalPages) return;

    setPage(newPage);
  };

  let handleSearchFilters = (name, value) => {
    setPage(1);

    setFilters({ ...filters, [name]: value });
  };

  let handleDeleteEmployee =async(emplyee)=>{
    try {
      
      let id = emplyee._id
      // let res = await deleteEmployee(id)
      let deleteEmployee = data?.employees.filter((val)=>val._id !== id)
    console.log(deleteEmployee)
      // console.log("delte fn",res)
    } catch (error) {
      console.log("delete fn",error)
    }
  }

  return {
    isPending,
    data,
    isFetching,
    handlePageChange,
    filters,
    handleSearchFilters,
    handleDeleteEmployee
  };
};