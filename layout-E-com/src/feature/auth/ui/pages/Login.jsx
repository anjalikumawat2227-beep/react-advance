import { useAuth } from "../../hook/authHook";

const Login = () => {
 const {handleSubmit,register,errors,loginForm,navigate} =useAuth()
  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-950 px-4">
      <div className="w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-3xl p-8 shadow-xl">
        <h2 className="text-3xl font-bold text-white text-center mb-2">
          Welcome Back
        </h2>

        <p className="text-zinc-400 text-center mb-8">Login to your account</p>

        <form onSubmit={handleSubmit(loginForm)} className="space-y-5">
          <div>
            <label className="block text-zinc-300 mb-2">userName</label>
            <input
              type="text"
              placeholder="Enter your username"
              className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              {...register("username", {
                required: "username is required",
              })}
            />
            {errors.username && (
              <p className="text-red-600">{errors.username.message}</p>
            )}
          </div>

          <div>
            <label className="block text-zinc-300 mb-2">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              {...register("password", {
                required: "password is required",
                minlength: {
                  value: 6,
                  massage: "minimum length must be 6 digits",
                },
              })}
            />
            {errors.password && (
              <p className="text-red-600">{errors.password.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl transition duration-300"
          >
            Login
          </button>
        </form>

        <p
          onClick={() => navigate("/register")}
          className="text-center text-zinc-400 mt-6"
        >
          Don't have an account?{" "}
          <span className="text-indigo-500 cursor-pointer hover:underline">
            Register
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
