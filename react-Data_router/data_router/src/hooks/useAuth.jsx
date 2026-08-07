import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { Auth } from "../myContext/AuthContext";

const useAuth = () => {
  const navigate = useNavigate();
  const {
    reset,
    formState: { errors },
    handleSubmit,
    register,
  } = useForm();

  const { registers, setLogedInUser, setRegisters } = useContext(Auth);

  const loginData = (data) => {
    const findUser = registers.find((user) => {
      return user.email === data.email && user.password === data.password;
    });

    if (!findUser) {
      alert("user not found");
      reset();
    }
    setLogedInUser(findUser);
    localStorage.setItem("user", JSON.stringify(findUser));
    reset();
    navigate("/main");
  };

  const registerData = (data) => {
    const registeruser = [...registers, data];
    setRegisters(registeruser);
    localStorage.setItem("register", JSON.stringify(registeruser));

    setLogedInUser(data);
    localStorage.setItem("user", JSON.stringify(data));
    reset();
    navigate("/main");
  };
  return {
    handleSubmit,
    register,
    errors,
    loginData,
    navigate,
    registerData,
  };
};
export default useAuth;
