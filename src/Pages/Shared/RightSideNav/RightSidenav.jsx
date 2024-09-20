import React, { useContext } from "react";
import { FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CiFacebook } from "react-icons/ci";
import q1 from "../../../assets/qZone1.png";
import q2 from "../../../assets/qZone2.png";
import q3 from "../../../assets/qZone3.png";
import { AuthContext } from "../../../Provider/AuthProvider";


const RightSidenav = () => {
const {logInWithGoogle} = useContext(AuthContext)
  const handleGoogleSignIn = () => {
    logInWithGoogle()
  };
  return (
    <div>
      <h1 className="font-bold text-lg text-start mb-2">Login With</h1>

      <div className="btn btn-outline w-full text-blue-600">
        <Link onClick={handleGoogleSignIn} className="flex gap-2 items-center  ">
          <FaGoogle />

          <span>Login with Google</span>
        </Link>
      </div>
      <div className="btn btn-outline w-full  mt-2">
        <Link className="flex gap-2 items-center  ">
          <FaGithub />

          <span>Login with Github</span>
        </Link>
      </div>

      {/* Social */}

      <div>
        <h1 className="font-bold text-lg text-start my-4">Find Us on</h1>

        <Link className=" border p-3 rounded-t-xl flex items-center gap-2 text-lg">
          <CiFacebook />
          facebook
        </Link>
        <Link className=" border p-3  flex items-center gap-2 text-lg">
          <FaTwitter />
          Twitter
        </Link>
        <Link className=" border p-3 rounded-b-xl flex items-center gap-2 text-lg">
          <FaInstagram />
          Instagram
        </Link>
      </div>
      {/* ?Qzone  */}
      <div className="bg-[#F3F3F3] px-2 py-4 my-4  rounded-xl ">
        <h1 className="font-bold text-lg text-start my-4">Q-Zone</h1>
        <img src={q1} alt="" />
        <img src={q2} alt="" />
        <img src={q3} alt="" />
      </div>
    </div>
  );
};

export default RightSidenav;
