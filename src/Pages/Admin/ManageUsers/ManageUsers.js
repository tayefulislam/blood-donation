import React from "react";
import { useQuery } from "react-query";

const ManageUsers = () => {
  const usersUrl = `http://localhost:5000/api/v1/donors/admin/users`;
  const { isLoading, error, data } = useQuery("allusers", () =>
    fetch(usersUrl).then((res) => res.json())
  );

  console.log(data);

  return (
    <div>
      <h1 className="text-center">Total User : {data?.length}</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 mx-2">
        {data?.map((user, index) => (
          <div class="card w-full bg-neutral text-neutral-content">
            <div class="card-body items-center text-center">
              <h2 class="card-title">{user?.name}</h2>
              <h2 class="card-title">{user?.group}</h2>
              <p>
                {user?.number} / {user?.district}
              </p>
              <div class="card-actions justify-end">
                <button class="btn btn-primary">Admin</button>
                <button class="btn btn-ghost">Deny</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageUsers;
