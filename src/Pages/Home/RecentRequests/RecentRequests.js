import React, { useState, useEffect } from "react";

import { useQuery } from "react-query";
import useRecentRequests from "../../../hooks/useRecentRequests/useRecentRequests";
import RequestDetails from "../../Donors/RequestDetails/RequestDetails";
import Loading from "../../Shared/Loading/Loading";

const RecentRequests = () => {
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
      <h1 className="text-center text-2xl font-bold my-4">Recent Requests</h1>
      <div className="card-body items-center text-center">
        <select
          onClick={(event) => setBloodGroup(event.target.value)}
          className="select select-error w-full  max-w-xs"
        >
          <option value="" selected>
            All Group
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
            All District
          </option>
          <option value="Dhaka">Dhaka</option>
          <option value="Brahmanbaria">Brahmanbaria</option>
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
