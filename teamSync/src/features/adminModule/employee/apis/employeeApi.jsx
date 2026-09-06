import { axiosInstance } from "../../../../config/axiosIntance";

export const  getAllEmployees = async ({page=1,limit=20,role="",search="",department="",status=""}) => {
  try {
    const res = await axiosInstance.get(`/employee?page=${page}&limit=${limit}&role=${role}&search=${search}&department=${department}&status=${status}`);
    return res.data.data;
  } catch (error) {
    console.log(error);
  }
};

export let createEmployee=async(data)=>{
  try {
    let res = await axiosInstance.post("/employee/create",data)
    return res.data.data
  } catch (error) {
    console.log(error)
  }
}

export let updateEmployee = async(emId,data)=>{
  try {
    let res = await axiosInstance.patch(`/employee/update/${emId}`,data)
    return res
  } catch (error) {
    console.log(error)
  }
}

export let deleteEmployee = async(emId)=>{
try {
  let res = await axiosInstance.get(`employee/delete/${emId}`)
  return res
} catch (error) {
  console.log("delete api error",error)
}
}