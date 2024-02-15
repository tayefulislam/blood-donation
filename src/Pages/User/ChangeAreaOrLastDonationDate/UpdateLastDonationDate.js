import React from "react";
import { format, parseISO } from "date-fns";
import axios from "axios";
import { toast } from "react-toastify";

const UpdateLastDonationDate = () => {
  const handleSearch = (event) => {
    event.preventDefault();

    const number = event?.target?.number?.value;

    const getDate = parseISO(event?.target?.date?.value);

    const lastDonation = format(getDate || new Date(), "PP");

    const updateInfo = { number, lastDonation };

    // const url = `${process.env.REACT_APP_apiHostLink}/api/v2/publicDonors/updateAreaOrLastDonationDate`;
    const url = `${process.env.REACT_APP_apiHostLink}/api/v2/publicDonors/updateAreaOrLastDonationDate`;
    console.log(updateInfo, url);

    axios.patch(url, updateInfo).then(function (response) {
      console.log(response);

      if (response.data.modifiedCount > 0) {
        toast.success(
          `শেষ দানের তারিখ সফলভাবে আপডেট করা হয়েছে | Update last donation date updated successfully.`
        );
      }
      if (response.data.matchedCount === 0) {
        toast.error(
          "দুঃখিত!!! রক্তদাতা পাওয়া যায়নি - Sorry !!! Donor not found."
        );
      }

      if (response.status === 400) {
        toast.error("System Error.");
      }
      event.target.reset();
    });
  };
  return (
    <div>
      <div className="text-center font-extrabold">
        <h1>শেষ দানের তারিখ পরিবর্তন করুন</h1>
        <h1>Update Last Donation Date</h1>
      </div>

      <div className="flex justify-center items-center">
        <form onSubmit={handleSearch}>
          <div class="form-control w-full max-w-xs">
            <label class="label">
              <span class="label-text">Enter Your Phone Number:</span>
            </label>
            <input
              type="number"
              required
              placeholder="ফোন নম্বর"
              name="number"
              class="input input-bordered input-error w-full max-w-xs"
            />
            <label class="label"></label>
          </div>

          <div class="form-control w-full max-w-xs">
            <label class="label">
              <span class="label-text">শেষ রক্তদানের তারিখ :</span>
            </label>
            <label class="label">
              <span class="label-text">(Last Blood Donation Date) :</span>
            </label>
            <input
              type="date"
              placeholder="Blood Donation Date "
              name="date"
              required
              class="input input-bordered input-error w-full max-w-xs"
            />
            <label class="label"></label>
          </div>

          <div className="flex justify-center items-center py-3">
            <input className="btn" type="submit" value="Update" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateLastDonationDate;
