// import React from 'react';
import { useQuery } from "react-query";

const useRecentRequests = (district, bloodGroup) => {
  console.log(district);
  const url = `${
    process.env.REACT_APP_apiHostLink
  }/api/v1/bloodRequest?group=${encodeURIComponent(
    bloodGroup
  )}&district=${district}`;

  const { isLoading, data, refetch } = useQuery(
    `recent-requests+${district}`,
    () => fetch(url).then((res) => res.json())
  );

  // console.log(data)

  console.log(data);

  return { data, isLoading, refetch };
};

export default useRecentRequests;
