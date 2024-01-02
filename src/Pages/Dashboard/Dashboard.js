import React from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";

import { useAuthState } from "react-firebase-hooks/auth";
// import { Link } from 'react-router-dom';

import { signOut } from "firebase/auth";
import auth from "../../firebase.init";

const Dashboard = () => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  // console.log("user", user);

  const usersUrl = `${process.env.REACT_APP_apiHostLink}/api/v1/donors/${user?.email}`;
  const {
    isLoading,
    error: dataError,
    data,
  } = useQuery("allusers", () => fetch(usersUrl).then((res) => res.json()));

  // console.log(data);

  return (
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mx-2 ">
        <div
          onClick={() => navigate("/bloodRequests")}
          class="card w-full bg-red-500 shadow-xl text-white"
        >
          <figure class="px-10 pt-10">
            <i class="fa-solid fa-users-between-lines"></i>
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title">Blood Requests</h2>
          </div>
        </div>

        {/* <div onClick={() => navigate('/dashboard/users')} class="card w-full bg-red-500 shadow-xl text-white">
                    <figure class="px-10 pt-10">
                        <i class="fa-solid fa-users-between-lines"></i>
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">Manage Users</h2>

                    </div>
                </div> */}

        <div
          onClick={() => navigate("/profile")}
          class="card w-full bg-red-500 shadow-xl text-white"
        >
          <figure class="px-10 pt-10">
            <i class="fa-solid fa-arrow-right-to-bracket"></i>
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title">Profile</h2>
          </div>
        </div>

        <div
          onClick={() => signOut(auth)}
          class="card w-full bg-red-500 shadow-xl text-white"
        >
          <figure class="px-10 pt-10">
            <i class="fa-solid fa-arrow-right-to-bracket"></i>
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title">Log Out</h2>
          </div>
        </div>
      </div>
      {data?.role === "admin" && (
        <div className="flex-inline lg:flex justify-center items-center gap-2 mt-12 mx-2 mb-2">
          <div
            onClick={() => navigate("/dashboard/users")}
            class="card w-full bg-red-500 shadow-xl text-white mt-2"
          >
            <figure class="px-10 pt-10">
              <i class="fa-solid fa-users-between-lines"></i>
            </figure>
            <div class="card-body items-center text-center">
              <h2 class="card-title">Manage Users</h2>
            </div>
          </div>
          <div
            onClick={() => navigate("/dashboard/blood-requests")}
            class="card w-full bg-red-500 shadow-xl text-white mt-2"
          >
            <figure class="px-10 pt-10">
              <i class="fa-solid fa-users-between-lines"></i>
            </figure>
            <div class="card-body items-center text-center">
              <h2 class="card-title">Manage Blood Requests</h2>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
