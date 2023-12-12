import React from "react";

const Credits = () => {
  return (
    <div>
      <div>
        <div className="py-[3px]">
          <div className="rounded-t-[20px] w-full bg-rose-500 text-primary-content">
            <div className="card-body py-2 items-center text-center">
              <img className="w-[30px]" src="/culogo.png" alt="" />

              <h2 className="card-title text-white">Credits</h2>
            </div>
          </div>
        </div>

        <div className="card-body py-2 ">
          <h1 className="text-lg text-center">Develop By </h1>
          <h1 className="text-xl text-center">Team : BlueSpace Tech</h1>
          <h1 className=" text-center">Email : bluespacetech12@gmail.com</h1>

          <p>
            Information : All information collected from users. So, all info
            credit goes to the app user.
          </p>

          <p>For App UI we use Daisyui </p>

          <p className="text-center">App Version : 1.0.0</p>
        </div>
      </div>
    </div>
  );
};

export default Credits;
