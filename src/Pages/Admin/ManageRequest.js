import React from "react";
import useRecentRequests from "../../hooks/useRecentRequests/useRecentRequests";
import Loading from "../Shared/Loading/Loading";
import SingleRequest from "./SingleRequest";

const ManageRequest = () => {
  const { data, isLoading } = useRecentRequests("", "");

  console.log(data);
  return (
    <div>
      <div>
        <h1 className="text-xl text-center font-semibold">Manage Requests</h1>
      </div>

      {/*all  blood requests */}
      {isLoading && <Loading></Loading>}

      {data && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-2 gap-2 mt-2">
          {data.map((request, index) => (
            <SingleRequest key={index} data={request}></SingleRequest>
          ))}
        </div>
      )}
    </div>
  );
};

export default ManageRequest;
