import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

const SelectGroup_SearchDonorByGroupAndArea = () => {
  const groupName = [
    {
      name: "A+ (A POSITIVE)",
      value: "A POSITIVE(+)",
    },
    {
      name: "A- (A NEGATIVE)",
      value: "A NEGATIVE(-)",
    },
    {
      name: "B+ (B POSITIVE)",
      value: "B POSITIVE(+)",
    },
    {
      name: "B- (B NEGATIVE)",
      value: "B NEGATIVE(-)",
    },
    {
      name: "AB+ (AB POSITIVE)",
      value: "AB POSITIVE(+)",
    },
    {
      name: "AB- (AB NEGATIVE)",
      value: "AB NEGATIVE(-)",
    },
    {
      name: "O+ (O POSITIVE)",
      value: "O POSITIVE(+)",
    },
    {
      name: "O- (O NEGATIVE)",
      value: "O NEGATIVE(-)",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mx-2">
      <div>
        <h1 className="text-center font-extrabold text-2xl py-3">
          Select Blood Group <br />
          রক্তের গ্রুপ নির্বাচন করুন
        </h1>
      </div>

      {groupName?.map((group) => (
        <Link
          to={`/selectArea/${group?.value}`}
          className="card w-96 bg-red-500 text-neutral-content"
        >
          <div className="card-body items-center text-center">
            <h2 className="card-title">{group.name}</h2>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default SelectGroup_SearchDonorByGroupAndArea;
