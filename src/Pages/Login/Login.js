import React from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useNavigate, Link, useLocation } from "react-router-dom";
import auth from "../../firebase.init";

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const handleLogin = (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;

    signInWithEmailAndPassword(email, password);
  };

  const navigate = useNavigate();
  let location = useLocation();

  let from = location.state?.from?.pathname || "/dashboard";

  if (user) {
    console.log(user);

    navigate(from, { replace: true });
  }

  console.log(error?.message);

  return (
    <div className="flex justify-center items-center">
      <div className="card w-96">
        <h1 className="text-center text-2xl font-bold">লগইন / LOGIN </h1>

        <div className="card-body">
          <form onSubmit={handleLogin}>
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">ইমেইল (Email )</span>
              </label>
              <input
                type="email"
                required
                placeholder="ইমেল ঠিকানা লিখুন ( Email Address )"
                name="email"
                class="input input-bordered input-error w-full max-w-xs"
              />
              <label class="label"></label>
            </div>
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">পাসওয়ার্ড (Password)</span>
              </label>
              <input
                type="password"
                required
                placeholder="পাসওয়ার্ড লিখুন ( Password )"
                name="password"
                class="input input-bordered input-error w-full max-w-xs"
              />
              <label class="label"></label>
            </div>
            <div className="text-center my-2">
              {error && <p className="text-red-500">{error?.message}</p>}
            </div>

            <div className="flex justify-center items-center">
              <input className="btn" type="submit" value="লগইন / Login" />
            </div>
          </form>

          <div className="text-center font-semibold">
            <p>
              Reset :{" "}
              <Link className="text-red-400" to="/reset">
                Password / পাসওয়ার্ড রিসেট করুন
              </Link>
            </p>
            <p className="py-3">
              একজন রক্তদাতা হন ( Became A Donor) :{" "}
              <Link className="text-red-400" to="/register">
                নিবন্ধন করুন (Register)
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
