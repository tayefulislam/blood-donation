import React, { useState } from "react";
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
  const { data, isLoading, refetch } = useManageUsers();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [userModal, setUser] = useState("");

  const makeAdmin = (userEmail) => {
    const url = `http://localhost:5000/api/v1/donors/${userEmail}`;

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

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 mx-2">
        {data?.map((user) => (
          <div class="card w-full bg-neutral text-neutral-content">
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
                <button class="btn btn-ghost" onClick={() => handleModal(user)}>
                  Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

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
