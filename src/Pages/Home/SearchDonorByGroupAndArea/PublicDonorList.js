import React from "react";
import { useParams } from "react-router-dom";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import PublicDonorDetails from "./PublicDonorDetails";

const PublicDonorList = () => {
  const { bloodGroup, donorArea } = useParams();

  const { isLoading, error, data } = useQuery(
    `${bloodGroup}+{${donorArea}}`,
    () =>
      fetch(
        `https://apis.bluespacejp.com/api/v1/donors/public/donorInfo?district=${donorArea}&group=${encodeURIComponent(
          bloodGroup
        )}`
      ).then((res) => res.json())
  );
  //  The encodeURIComponent() function encodes a URI by replacing each instance of certain characters by one, two, three, or four escape ...

  console.log(data);

  return (
    <div>
      {data?.map((donor, key) => (
        <PublicDonorDetails donor={donor} key={donor?._id}></PublicDonorDetails>
      ))}
    </div>
  );
};

export default PublicDonorList;
