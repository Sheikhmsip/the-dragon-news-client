import React, { useContext } from "react";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";

const SighIn = () => {
  const { createUser } = useContext(AuthContext);
  const handleSignIn = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const photo = form.get("email");
    const email = form.get("email");
    const password = form.get("password");
    console.log(name, photo, email, password);
    //  usercreate
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <Navbar />

      <div className="lg:w-1/2 md:w-3/2 mx-auto border rounded-lg py-20 px-4">
        <h1 className="font-bold text-center text-3xl">
          Register Your Account
        </h1>{" "}
        <hr className="mt-8" />
        <form onSubmit={handleSignIn} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Name</span>
            </label>
            <input
              name="name"
              type="name"
              placeholder="Enter Your Name"
              className="input input-bordered"
              required
            />

            <label className="label">
              <span className="label-text">PhotoUrl</span>
            </label>
            <input
              name="photo"
              type="photo"
              placeholder="PhotoUrl"
              className="input input-bordered"
              required
            />

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
        <Link to="/register">
          <p>
            Already Have An Account ?{" "}
            <span className="text-red-700 font-semibold">Login</span>
          </p>
        </Link>
      </div>
    </div>
  );
};

export default SighIn;
