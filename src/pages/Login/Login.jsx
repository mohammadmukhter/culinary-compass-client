import { Link } from "react-router-dom";
import bgImg from "../../assets/banner/pastry2.jpg";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";

const Login = () => {
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
        <div className="hero-content text-center text-neutral-content">
          <div className="hero min-h-screen bg-transparent">
            <div className="hero-content">
              <div className="card  w-full max-w-sm shadow-2xl bg-base-100/50">
                <form className="card-body">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="text"
                      placeholder="email"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <input
                      type="text"
                      placeholder="password"
                      className="input input-bordered"
                    />
                    <label className="label">
                      <a href="#" className="label-text-alt link link-hover">
                        Forgot password?
                      </a>
                    </label>
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
