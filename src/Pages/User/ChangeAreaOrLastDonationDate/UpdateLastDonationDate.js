import React from "react";

const UpdateLastDonationDate = () => {
  const handleSearch = () => {};
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
