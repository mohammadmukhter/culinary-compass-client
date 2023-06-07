import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import bgImg from "../../assets/banner/pastry2.jpg";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
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
                <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
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
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <input
                      type="password"
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
