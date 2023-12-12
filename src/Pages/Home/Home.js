import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mx-2">
        <div
          onClick={() => navigate("/makeRequests")}
          class="card w-full bg-red-500 shadow-xl text-white"
        >
          <figure class="px-10 pt-10">
            <i class="fa-solid fa-border-all"></i>
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title">রক্তদানের জন্য অনুরোধ</h2>
            <h2 class="card-title">Request For Blood</h2>
          </div>
        </div>

        <div
          onClick={() => navigate("/selectBloodGroup/")}
          class="card w-full bg-red-500 shadow-xl text-white"
        >
          <figure class="px-10 pt-10">
            <i class="fa-solid fa-users-between-lines"></i>
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title">দাতাদের তালিকা</h2>
            <h2 class="card-title">Donor List</h2>
          </div>
        </div>
        <div
          onClick={() => navigate("/recentRequests/")}
          class="card w-full bg-red-500 shadow-xl text-white"
        >
          <figure class="px-10 pt-10">
            <i class="fa-solid fa-users-between-lines"></i>
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title">সাম্প্রতিক রক্তদানের অনুরোধ</h2>
            <h2 class="card-title">Recent Requests</h2>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center mt-12 gap-2 mx-2">
        <div
          onClick={() => navigate("/addDonor")}
          class="card w-96 bg-red-500 shadow-xl text-white"
        >
          <figure class="px-10 pt-10">
            <i class="fa-solid fa-users-between-lines"></i>
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title">রক্তদাতা হয়ে উঠুন</h2>
            <h2 class="card-title">Became A Donor</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
