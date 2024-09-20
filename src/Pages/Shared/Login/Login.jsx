import React, { useContext } from "react";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
  const { login, logInWithGoogle} = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);
    login(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <Navbar />

      <div className="lg:w-1/2 md:w-3/2 mx-auto border rounded-lg py-20 px-4">
        <h1 className="font-bold text-center text-3xl">Login Your Account</h1>{" "}
        <hr className="mt-8" />
        <form onSubmit={handleLogin} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
        <div onClick={logInWithGoogle} className="text-center flex items-center justify-center gap-5 border mx-auto w-52 my-2">
        <span className="my-2"><FaGoogle className="w-8 h-8 text-yellow-500" /></span>
        <button className="font-bold my-2" > Login with Google</button>
      </div>
        <Link to="/register">
          <p>
            Dont’t Have An Account ?{" "}
            <span className="text-red-700 font-semibold">Register</span>
          </p>
        </Link>
      </div>
     
    </div>
  );
};

export default Login;
