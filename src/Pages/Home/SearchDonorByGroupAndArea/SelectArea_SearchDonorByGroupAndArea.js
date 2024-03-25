import React from "react";
import { Link, useParams } from "react-router-dom";

const SelectArea_SearchDonorByGroupAndArea = () => {
  const districtName = [
    {
      name: "Bagerhat",
      value: "Bagerhat",
    },
    {
      name: "Bandarban",
      value: "Bandarban",
    },
    {
      name: "Barguna",
      value: "Barguna",
    },
    {
      name: "Barisal",
      value: "Barisal",
    },
    {
      name: "Bhola",
      value: "Bhola",
    },
    {
      name: "Bogra",
      value: "Bogra",
    },
    {
      name: "Brahmanbaria",
      value: "Brahmanbaria",
    },
    {
      name: "Chandpur",
      value: "Chandpur",
    },
    {
      name: "Chittagong",
      value: "Chittagong",
    },
    {
      name: "Chuadanga",
      value: "Chuadanga",
    },
    {
      name: "Cox's Bazar	",
      value: "Cox's Bazar	",
    },
    {
      name: "Dhaka",
      value: "Dhaka",
    },
    {
      name: "Dinajpur",
      value: "Dinajpur",
    },
    {
      name: "Faridpur",
      value: "Faridpur",
    },
    {
      name: "Feni",
      value: "Feni",
    },
    {
      name: "Gaibandha",
      value: "Gaibandha",
    },
    {
      name: "Gazipur",
      value: "Gazipur",
    },
    {
      name: "Gopalganj",
      value: "Gopalganj",
    },
    {
      name: "Habiganj",
      value: "Habiganj",
    },
    {
      name: "Jaipurhat",
      value: "Jaipurhat",
    },
    {
      name: "Jamalpur",
      value: "Jamalpur",
    },
    {
      name: "Jessore",
      value: "Jessore",
    },
    {
      name: "Jhalakati",
      value: "Jhalakati",
    },
    {
      name: "Jhenaidah",
      value: "Jhenaidah",
    },
    {
      name: "Khagrachari",
      value: "Khagrachari",
    },
    {
      name: "Khulna",
      value: "Khulna",
    },
    {
      name: "Kishoreganj",
      value: "Kishoreganj",
    },
    {
      name: "Kurigram",
      value: "Kurigram",
    },
    {
      name: "Kushtia",
      value: "Kushtia",
    },
    {
      name: "Lakshmipur",
      value: "Lakshmipur",
    },
    {
      name: "Lalmonirhat",
      value: "Lalmonirhat",
    },
    {
      name: "Madaripur",
      value: "Magura",
    },
    {
      name: "Manikganj",
      value: "Manikganj",
    },
    {
      name: "Meherpur",
      value: "Meherpur",
    },
    {
      name: "Moulvibazar",
      value: "Moulvibazar",
    },
    {
      name: "Munshiganj",
      value: "Munshiganj",
    },
    {
      name: "Mymensingh",
      value: "Mymensingh",
    },
    {
      name: "Mymensingh",
      value: "Mymensingh",
    },
    {
      name: "Naogaon",
      value: "Narail",
    },
    {
      name: "Narayanganj",
      value: "Narayanganj",
    },
    {
      name: "Narsingdi",
      value: "Narsingdi",
    },
    {
      name: "Natore",
      value: "Natore",
    },
    {
      name: "Nawabganj",
      value: "Nawabganj",
    },
    {
      name: "Netrakona",
      value: "Netrakona",
    },
    {
      name: "Nilphamari",
      value: "Nilphamari",
    },
    {
      name: "Noakhali",
      value: "Noakhali",
    },
    {
      name: "Pabna",
      value: "Pabna",
    },
    {
      name: "Panchagarh",
      value: "Panchagarh",
    },
    {
      name: "Parbattya Chattagram",
      value: "Parbattya_Chattagram",
    },
    {
      name: "Patuakhali",
      value: "Patuakhali",
    },
    {
      name: "Pirojpur",
      value: "Pirojpur",
    },
    {
      name: "Rajbari",
      value: "Rajbari",
    },
    {
      name: "Rajshahi",
      value: "Rajshahi",
    },
    {
      name: "Rangpur",
      value: "Rangpur",
    },
    {
      name: "Satkhira",
      value: "Satkhira",
    },
    {
      name: "Shariatpur",
      value: "Shariatpur",
    },
    {
      name: "Sherpur",
      value: "Sherpur",
    },
    {
      name: "Sirajganj",
      value: "Sirajganj",
    },
    {
      name: "Sunamganj",
      value: "Sunamganj",
    },
    {
      name: "Sylhet",
      value: "Sylhet",
    },
    {
      name: "Tangail",
      value: "Tangail",
    },
    {
      name: "Thakurgaon",
      value: "Thakurgaon",
    },
  ];

  let { bloodGroup } = useParams();
  console.log(bloodGroup);

  return (
    <div>
      <div>
        <h1 className="text-center font-extrabold text-2xl py-3">
          Select District
          <br />
          জেলা নির্বাচন করুন
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mx-2">
        {districtName?.map((group) => (
          <Link
            to={`/selectArea/${bloodGroup}/${group?.value}`}
            className="card w-full bg-red-500 text-white"
          >
            <div className="card-body items-center text-center">
              <h2 className="card-title">{group?.name}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SelectArea_SearchDonorByGroupAndArea;
