import React from "react";
import { toast } from "react-toastify";

const PublicDonorDetails = ({ donor }) => {
  console.log(donor);

  // Copy Donor Phone Number
  const copyDonorNumber = (number) => {
    navigator.clipboard.writeText(number);

    toast.success(
      "দাতার ফোন নম্বর ইতিমধ্যে কপি সম্পন্ন হয়েছে / The donor's phone number has already been copied "
    );
  };

  return (
    <div>
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

          <button
            onClick={() => copyDonorNumber(donor?.number)}
            className="btn btn-outline btn-success mx-6 "
          >
            Copy Donor Phone Number <br /> দাতার ফোন নম্বর কপি করুন
          </button>
        </div>
      </div>
    </div>
  );
};

export default PublicDonorDetails;
