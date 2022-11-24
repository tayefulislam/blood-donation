import React, { useState } from "react";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import { ToastContainer, toast } from "react-toastify";

const ResetPassword = () => {
  const [sendPasswordResetEmail, sending, error] =
    useSendPasswordResetEmail(auth);

  const actionCodeSettings = {
    url: "https://blooddonationen1.web.app/login",
  };

  const handleResetPassword = async (event) => {
    event.preventDefault();

    const email = event?.target?.email?.value;
    console.log(email);

    const successSend = await sendPasswordResetEmail(email, actionCodeSettings);

    console.log(successSend);

    if (!error) {
      toast.success("Password reset link send to your email address.");
    }
  };

  return (
    <div>
      <div className="flex justify-center items-center">
        <div className="card w-96">
          <h1 className="text-center text-2xl font-bold">Reset Password</h1>

          <div className="card-body">
            <form onSubmit={handleResetPassword}>
              <div class="form-control w-full max-w-xs">
                <label class="label">
                  <span class="label-text">Email</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="Email Address"
                  name="email"
                  class="input input-bordered input-error w-full max-w-xs"
                />
                <label class="label"></label>
              </div>

              <div className="text-center my-2">
                {sending && <p>Sending Please wait</p>}
                {error && <p className="text-red-500">{error?.message}</p>}
              </div>

              <div className="flex justify-center items-center">
                <input className="btn" type="submit" value="Reset Password" />
              </div>
            </form>

            <div className="text-center font-semibold">
              <p>
                Already A Donor :{" "}
                <Link className="text-red-400" to="/login">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
