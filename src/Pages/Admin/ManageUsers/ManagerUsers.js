import React, { useEffect, useState } from "react";
// import { useQuery } from "react-query";
import { toast } from "react-toastify";
import useManageUsers from "../../../hooks/useRecentRequests/useManageUsers";
import axios from "axios";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import Loading from "../../Shared/Loading/Loading";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",

  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const ManagerUsers = () => {
  const [user, loading, error] = useAuthState(auth);
  if (loading) {
    console.log("Loading");
  }
  // console.log(user.email);
  const [searchKey, setSearchKey] = useState("");
  const { data, isLoading, refetch } = useManageUsers(user.email, searchKey);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [userModal, setUser] = useState("");

  const makeAdmin = (userEmail) => {
    const url = `https://blooddonationmvc.onrender.com/api/v1/donors/${userEmail}`;

    axios.patch(url).then(function (response) {
      console.log(response);
      toast.success("Admin Make Successful");
      refetch();
    });
  };

  const handleModal = (user) => {
    handleOpen();
    console.log(user);
    setUser(user);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const keyword = event?.target.search.value;

    setSearchKey(keyword);
  };

  const handleSearch = () => {
    console.log(searchKey);
    refetch();
  };

  useEffect(() => {
    handleSearch();
  }, [searchKey]);

  // if (isLoading) {
  //   return <Loading></Loading>;
  // }

  console.log(searchKey);

  return (
    <div>
      <h1 className="text-center my-2">Total User : {data?.length}</h1>

      <div className="flex justify-center items-center flex-col">
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <div className="input-group">
              <input
                type="text"
                placeholder="Search…"
                className="input input-bordered"
                name="search"
                onChange={(e) => setSearchKey(e.target.value)}
                value={searchKey}
              />
              <button className="btn btn-square">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </form>
        <h1 className="my-2">Search Result for : {searchKey}</h1>
      </div>

      {/* if  */}
      {isLoading ? (
        <Loading></Loading>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 mx-2">
          {data?.length === 0 && (
            <div className="flex justify-center my-2">
              <h1 className="text-red-500">NO DATA FOUND</h1>
            </div>
          )}
          {data?.map((user) => (
            <div class="card w-full bg-red-500 text-neutral-content">
              <div class="card-body items-center text-center">
                <h2 class="card-title">{user?.name}</h2>
                <h2 class="card-title">{user?.group}</h2>
                <p>
                  {user?.number} / {user?.district}
                </p>
                <div class="card-actions justify-end">
                  {user?.role !== "admin" && (
                    <button
                      onClick={() => makeAdmin(user?.email)}
                      class="btn btn-primary"
                    >
                      Make Admin
                    </button>
                  )}
                  <button
                    class="btn btn-ghost"
                    onClick={() => handleModal(user)}
                  >
                    Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              {userModal?.name}
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              <h1>Group : {userModal?.group}</h1>
              <h1>Number : {userModal?.number}</h1>
              <h1>District : {userModal?.district}</h1>
              <h3>Area : {userModal?.area}</h3>
              <h3>Email : {userModal?.email}</h3>
              <h3>Role : {userModal?.role === "admin" ? "Admin" : "User"}</h3>
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default ManagerUsers;
