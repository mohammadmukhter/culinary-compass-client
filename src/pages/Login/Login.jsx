import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import bgImg from "../../assets/banner/pastry2.jpg";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const { loginHandler, googleHandler } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [showPass, setShowPass] = useState(false);

  const from = location.state?.from?.pathname || "/";
  console.log(from);

  const google = () => {
    googleHandler()
      .then((res) => {
        const user = res.user;

        if (user) {
          toast.success("User Log In Successfully", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });

          const userInfo = {
            name: user.displayName,
            email: user.email,
            photoUrl: user.photoURL,
            role: "student",
          };

          axios
            .post("https://culinary-compass-server.vercel.app/users", userInfo)
            .then((res) => {
              console.log(res.data);
              navigate(from, { replace: true });
            })
            .catch((err) => {
              console.log(err);
            });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    loginHandler(data.email, data.password)
      .then((res) => {
        const loggedUser = res.user;
        if (loggedUser) {
          toast.success("User Log In Successfully", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }

        reset();
        navigate(from, { replace: true });
      })
      .catch((err) => {
        console.log(err);
        toast.error("User not found!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
  };

  return (
    <div className="">
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(
            ${bgImg}
          )`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-gray-700">
          <div className="hero min-h-screen bg-transparent">
            <div className="hero-content">
              <div className="card  w-full max-w-sm shadow-2xl bg-base-100/50">
                <h2 className="text-gray-800 text-3xl font-bold mt-6">
                  Please Login
                </h2>
                <form
                  className="card-body pb-4 px-6 pt-4"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="email"
                      placeholder="email"
                      {...register("email", { required: true })}
                      className="input input-bordered"
                    />
                    {errors.email && (
                      <span className="text-red-600 text-left text-sm">
                        Email is required
                      </span>
                    )}
                  </div>
                  <div className="form-control">
                    <div className="flex items-center gap-1">
                      <label className="label">
                        <span className="label-text">Password</span>
                      </label>

                      {showPass ? (
                        <FaEye
                          onClick={() => setShowPass(!showPass)}
                          className=" ms-auto hover:cursor-pointer"
                          title="Hide password"
                        />
                      ) : (
                        <FaEyeSlash
                          onClick={() => setShowPass(!showPass)}
                          className=" ms-auto hover:cursor-pointer"
                          title="Show password"
                        />
                      )}
                    </div>
                    <input
                      type={showPass ? "text" : "password"}
                      placeholder="password"
                      {...register("password", { required: true })}
                      className="input input-bordered"
                    />
                    {errors.password && (
                      <span className="text-red-600 text-left text-sm">
                        Password is required
                      </span>
                    )}
                  </div>
                  <div className="form-control mt-6">
                    <PrimaryButton className="btn btn-primary">
                      Log in
                    </PrimaryButton>
                  </div>
                </form>

                <div className="form-control mx-6 ">
                  <button
                    onClick={google}
                    className=" bg-white px-8 mb-4 py-1 font-bold rounded hover:text-blue-600"
                  >
                    <span className="flex items-center gap-3 justify-center">
                      <span>
                        <FaGoogle />
                      </span>{" "}
                      <span> Google Log In</span>
                    </span>
                  </button>
                </div>
                <div className="form-control mx-7 mb-5">
                  <label className="label">
                    <span className="text-black label-text-alt">
                      Don't have an account?{" "}
                      <Link
                        to="/register"
                        className="font-bold link link-hover"
                      >
                        Register
                      </Link>
                    </span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

// name: user.displayName,
//           email: user.email,
