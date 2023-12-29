import React, { useState, useEffect } from "react";

import { useQuery } from "react-query";
import useRecentRequests from "../../../hooks/useRecentRequests/useRecentRequests";
import RequestDetails from "../../Donors/RequestDetails/RequestDetails";
import Loading from "../../Shared/Loading/Loading";

const RecentRequests = () => {
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
  const [district, setDistrict] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const { data, isLoading, refetch } = useRecentRequests(district, bloodGroup);

  console.log(district);
  console.log(bloodGroup);

  useEffect(() => {
    refetch();
  }, [district, bloodGroup]);

  //   if (isLoading) {
  //     return <Loading></Loading>;
  //   }

  //   console.log(data);

  return (
    <div className="text-red-500">
      <h1 className="text-center text-2xl font-bold my-4">
        সাম্প্রতিক রক্তদানের অনুরোধ
      </h1>
      <h1 className="text-center text-2xl font-bold my-4">Recent Requests</h1>
      <div className="card-body items-center text-center">
        <select
          onClick={(event) => setBloodGroup(event.target.value)}
          className="select select-error w-full  max-w-xs"
        >
          <option value="" selected>
            রক্তের গ্রুপ নির্বাচন করুন / Select Blood Group
          </option>
          <option value="" selected>
            সব রক্তের গ্রুপ / All Blood Group
          </option>
          <option value="A POSITIVE(+)">A POSITIVE(+)</option>
          <option value="A NEGATIVE(-)">A NEGATIVE(-)</option>
          <option value="B POSITIVE(+)">B POSITIVE(+)</option>
          <option value="B NEGATIVE(-)">B NEGATIVE(-)</option>
          <option value="AB POSITIVE(+)">AB POSITIVE(+)</option>
          <option value="AB NEGATIVE(-)">AB NEGATIVE(-)</option>
          <option value="O POSITIVE(+)">O POSITIVE(+)</option>
          <option value="O NEGATIVE(-)">O- (O NEGATIVE)</option>
        </select>

        <select
          onClick={(event) => setDistrict(event.target.value)}
          className="select select-error w-full max-w-xs"
        >
          <option value="" selected>
            সব জেলা / All District
          </option>

          {districtName.map((disName) => (
            <option value={disName?.value}>{disName?.name}</option>
          ))}
        </select>
      </div>

      {isLoading && <Loading></Loading>}

      {data?.length === 0 && (
        <div className="text-center text-red-500 font-semibold">
          <p>No match request found !</p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mx-2">
        {data?.map((request, index) => (
          <RequestDetails request={request} key={index}></RequestDetails>
        ))}
      </div>
    </div>
  );
};

export default RecentRequests;
