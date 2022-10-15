import React, { useState } from "react";
import { useQuery } from "react-query";
import axios from "axios";

import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Loading from "../../Shared/Loading/Loading";

const ManageUsers = () => {
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

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [userModal, setUser] = useState("");

  const usersUrl = `https://blooddonationmvc.onrender.com/api/v1/donors/admin/users`;
  const { isLoading, error, data } = useQuery("allusers", () =>
    fetch(usersUrl).then((res) => res.json())
  );

  // console.log(data);

  // console.log(data);

  const makeAdmin = (userEmail) => {
    const url = `https://blooddonationmvc.onrender.com/api/v1/donors/${userEmail}`;

    axios.patch(url).then(function (response) {
      console.log(response);
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
      <h1 className="text-center">Total User : {data?.length}</h1>
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
                <button
                  onClick={() => makeAdmin(user?.email)}
                  class="btn btn-primary"
                >
                  Admin
                </button>
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
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default ManageUsers;
