import React from "react";
import { Link } from "react-router-dom";

const MENU = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mx-2">
        <Link
          to="/contactUs"
          className="card w-full bg-red-500 text-neutral-content"
        >
          <div className="card-body items-center text-center">
            <h2 className="card-title">Contact Us</h2>
          </div>
        </Link>
        <Link
          to="/privacyPolicy"
          className="card w-full bg-red-500 text-neutral-content"
        >
          <div className="card-body items-center text-center">
            <h2 className="card-title">Privacy Policy</h2>
          </div>
        </Link>
        <Link
          to="/appCredit"
          className="card w-full bg-red-500 text-neutral-content"
        >
          <div className="card-body items-center text-center">
            <h2 className="card-title">App Credits</h2>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default MENU;
