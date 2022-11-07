import React, { useState } from "react";

// modal start
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
// modal end

//modal css style
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",

  maxWidth: 300,
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
  p: 4,
};

const SingleRequest = ({ data }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  console.log(data);
  const { patient, group, date, number, district, type, time, medical, area } =
    data;
  return (
    <>
      <div class="card w-full bg-red-500 shadow-xl text-white">
        <div class="card-body">
          <h2 class="card-title">
            Patient : {patient}
            <div class="badge">NEW</div>
          </h2>
          <p className="text-[14px]">Blood Group : {group}</p>
          <p className="text-[14px]">
            Date : {date} | Number : {number}
          </p>
          <p>District : {district}</p>

          <div class="card-actions justify-end">
            <div onClick={handleOpen} class="badge badge-outline">
              Details
            </div>
          </div>
        </div>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {patient}
          </Typography>
          <h2 class="card-title">Patient : {patient}</h2>
          <p>Blood Group : {group}</p>
          <p>Type: {type}</p>
          <p>Date : {date}</p>
          <p>Time : {time}</p>
          <p>Medical : {medical}</p>
          <p>Number : {number}</p>
          <p>Area : {area}</p>
          <p>District : {district}</p>
        </Box>
      </Modal>
    </>
  );
};

export default SingleRequest;
