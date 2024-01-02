import React from "react";
import { useParams } from "react-router-dom";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import PublicDonorDetails from "./PublicDonorDetails";
import Loading from "../../Shared/Loading/Loading";

const PublicDonorList = () => {
  const { bloodGroup, donorArea } = useParams();

  const { isLoading, error, data } = useQuery(
    `${bloodGroup}+{${donorArea}}`,
    () =>
      fetch(
        `${
          process.env.REACT_APP_apiHostLink
        }/api/v2/publicDonors?district=${donorArea}&group=${encodeURIComponent(
          bloodGroup
        )}`
      ).then((res) => res.json())
  );
  //  The encodeURIComponent() function encodes a URI by replacing each instance of certain characters by one, two, three, or four escape ...

  console.log(data);

  if (isLoading) {
    return <Loading></Loading>;
  }

  if (!navigator.onLine) {
    return (
      <div>
        <h1 className="text-center">
          আপনার ইন্টারনেট সংযোগ পরীক্ষা করুন এবং আবার চেষ্টা করুন
        </h1>
        <h1 className="text-center">
          Please check your internet connection and try again
        </h1>
      </div>
    );
  }

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mx-2">
        {data?.map((donor, key) => (
          <PublicDonorDetails
            donor={donor}
            key={donor?._id}
          ></PublicDonorDetails>
        ))}
      </div>
      {data?.length === 0 && (
        <div className=" py-[30px] text-lg px-3  ">
          <h1 className="text-center">{`দুঃখিত! ${donorArea} জেলায় ${bloodGroup} রক্ত গ্রুপে কোন ডোনার খুঁজে পাওয়া যায়নি ।`}</h1>
          <h1 className="text-center pt-2">{`Sorry! No donor of ${bloodGroup} blood group was found in ${donorArea} district.`}</h1>
        </div>
      )}
    </div>
  );
};

export default PublicDonorList;
