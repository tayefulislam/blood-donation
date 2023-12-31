import React from "react";

const AddDonorConfirmation = () => {
  return (
    <div>
      <div>
        <h1 className="text-center font-bold text-xl  py-3">
          অভিনন্দন!!! <br /> রক্তদাতা হিসাবে আপনার তথ্য সফলভাবে আমাদের ডাটাবেসে
          জমা দেওয়া হয়েছে। গুগল প্লে স্টোর থেকে আমাদের অ্যান্ড্রয়েড মোবাইল
          অ্যাপ ডাউনলোড করুন। <br /> Congratulations !!! <br /> Your donor info
          successfully submitted in our database. Download Our Android Mobile
          App From Google Play Store. <br />{" "}
          <a
            className="text-red-400"
            href="https://play.google.com/store/apps/details?id=com.bluespacetech.blooddonationbdroktokhujun&hl=en&gl=US"
            target="_blank"
            rel="noopener noreferrer"
          >
            অ্যাপ ডাউনলোড করুন / Download App
          </a>
          <br />
        </h1>
      </div>
      <div className="flex justify-center items-center mt-4">
        <a href="https://play.google.com/store/apps/details?id=com.bluespacetech.blooddonationbdroktokhujun&hl=en&gl=US">
          {" "}
          <img className="items-center" src="getItOnGooglePlay.png" />
        </a>
      </div>
    </div>
  );
};

export default AddDonorConfirmation;
