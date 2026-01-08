import { useState } from "react";
import { FaTimes, FaFacebookF, FaGoogle, FaTwitter } from "react-icons/fa";

const AuthModal = ({ close }) => {
  const [isSignup, setIsSignup] = useState(false);

  return (
    <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50">
      <div className="bg-[#111] w-105 p-8 relative rounded">

        {/* CLOSE */}
        <FaTimes
          className="absolute top-4 right-4 text-gray-400 cursor-pointer"
          onClick={close}
        />

        {/* TITLE */}
        <h2 className="text-3xl text-gray-200 mb-2">
          {isSignup ? "Signup" : "Login"}
        </h2>

        {/* SWITCH */}
        <p className="text-gray-400 mb-6">
          {isSignup ? (
            <>
              Already have an account?{" "}
              <span
                className="text-white cursor-pointer"
                onClick={() => setIsSignup(false)}
              >
                Login
              </span>
            </>
          ) : (
            <>
              Don’t have an account?{" "}
              <span
                className="text-white cursor-pointer"
                onClick={() => setIsSignup(true)}
              >
                Signup
              </span>
            </>
          )}
        </p>

        {/* FORM */}
        <form className="space-y-4">
          {isSignup && (
            <input
              type="text"
              placeholder="Username"
              className="w-full bg-black border border-gray-600 px-4 py-3 text-gray-300"
            />
          )}

          <input
            type="email"
            placeholder="Email"
            className="w-full bg-black border border-gray-600 px-4 py-3 text-gray-300"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full bg-black border border-gray-600 px-4 py-3 text-gray-300"
          />

          {isSignup && (
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full bg-black border border-gray-600 px-4 py-3 text-gray-300"
            />
          )}

          <button className="w-full bg-red-600 py-3 text-white text-lg mt-4">
            {isSignup ? "Signup" : "Login"}
          </button>
        </form>

        {/* DIVIDER */}
        <div className="flex items-center gap-3 my-6 text-gray-400">
          <div className="flex-1 h-px bg-gray-600" />
          or login with
          <div className="flex-1 h-px bg-gray-600" />
        </div>

        {/* SOCIAL */}
        <div className="flex gap-4">
          <button className="flex-1 bg-[#4267B2] py-2 text-white flex justify-center items-center gap-2">
            <FaFacebookF /> Facebook
          </button>
          <button className="flex-1 bg-[#DB4437] py-2 text-white flex justify-center items-center gap-2">
            <FaGoogle /> Google
          </button>
          <button className="flex-1 bg-[#1DA1F2] py-2 text-white flex justify-center items-center gap-2">
            <FaTwitter /> Twitter
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
