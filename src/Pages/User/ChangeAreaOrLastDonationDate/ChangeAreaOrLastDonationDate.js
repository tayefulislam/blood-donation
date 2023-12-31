import React from "react";

const ChangeAreaOrLastDonationDate = () => {
  const handleSearch = (event) => {
    event.preventDefault();
    const number = event?.target?.number?.value;
    console.log(number);
  };
  return (
    <div>
      <div className="text-center font-extrabold">
        <h1>Change Area</h1>
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

          <div className="flex justify-center items-center">
            <input className="btn" type="submit" value="Search" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChangeAreaOrLastDonationDate;
