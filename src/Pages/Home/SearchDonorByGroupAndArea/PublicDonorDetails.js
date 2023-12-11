import React from "react";

const PublicDonorDetails = ({ donor }) => {
  console.log(donor);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mx-2">
      <div className=" text-lg font-semibold">
        <div className="card w-full border-2 py-4	 border-red-400 text-black t">
          <div className="text-center text-lg font-semibold">
            <h2 className="">
              নাম / Name : <br /> {donor?.name}
            </h2>

            <h1>
              রক্তের গ্রুপ / Blood Group : <br />{" "}
              <h1 className="text-red-500">{donor?.group}</h1>
            </h1>

            <h1>
              ফোন নম্বর / Phone Number : <br />
              {donor?.number}
            </h1>
            <h1>
              শেষ দানের তারিখ / Last Donation Date : <br />
              {donor?.lastDonation}
            </h1>
            <h1>
              এলাকা / Area : <br /> {donor?.area}
            </h1>
          </div>

          <button className="btn btn-outline btn-success mx-6 ">
            <a href={`tel:${donor?.number}`}>Call Donor</a>
            <img src="/callicon.png" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PublicDonorDetails;
