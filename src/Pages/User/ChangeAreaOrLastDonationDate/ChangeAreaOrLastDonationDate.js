import axios from "axios";
import React from "react";
import { toast } from "react-toastify";

const ChangeAreaOrLastDonationDate = () => {
  const districtName = [
    {
      name: "Bagerhat",
      value: "Bagerhat",
    },
    {
      name: "Bandarban",
      value: "Bandarban",
    },
    {
      name: "Barguna",
      value: "Barguna",
    },
    {
      name: "Barisal",
      value: "Barisal",
    },
    {
      name: "Bhola",
      value: "Bhola",
    },
    {
      name: "Bogra",
      value: "Bogra",
    },
    {
      name: "Brahmanbaria",
      value: "Brahmanbaria",
    },
    {
      name: "Chandpur",
      value: "Chandpur",
    },
    {
      name: "Chittagong",
      value: "Chittagong",
    },
    {
      name: "Chuadanga",
      value: "Chuadanga",
    },
    {
      name: "Cox's Bazar	",
      value: "Cox's Bazar	",
    },
    {
      name: "Dhaka",
      value: "Dhaka",
    },
    {
      name: "Dinajpur",
      value: "Dinajpur",
    },
    {
      name: "Faridpur",
      value: "Faridpur",
    },
    {
      name: "Feni",
      value: "Feni",
    },
    {
      name: "Gaibandha",
      value: "Gazipur",
    },
    {
      name: "Gopalganj",
      value: "Gopalganj",
    },
    {
      name: "Habiganj",
      value: "Habiganj",
    },
    {
      name: "Jaipurhat",
      value: "Jaipurhat",
    },
    {
      name: "Jamalpur",
      value: "Jamalpur",
    },
    {
      name: "Jessore",
      value: "Jessore",
    },
    {
      name: "Jhalakati",
      value: "Jhalakati",
    },
    {
      name: "Jhenaidah",
      value: "Jhenaidah",
    },
    {
      name: "Khagrachari",
      value: "Khagrachari",
    },
    {
      name: "Khulna",
      value: "Khulna",
    },
    {
      name: "Kishoreganj",
      value: "Kishoreganj",
    },
    {
      name: "Kurigram",
      value: "Kurigram",
    },
    {
      name: "Kushtia",
      value: "Kushtia",
    },
    {
      name: "Lakshmipur",
      value: "Lakshmipur",
    },
    {
      name: "Lalmonirhat",
      value: "Lalmonirhat",
    },
    {
      name: "Madaripur",
      value: "Magura",
    },
    {
      name: "Manikganj",
      value: "Manikganj",
    },
    {
      name: "Meherpur",
      value: "Meherpur",
    },
    {
      name: "Moulvibazar",
      value: "Moulvibazar",
    },
    {
      name: "Munshiganj",
      value: "Munshiganj",
    },
    {
      name: "Mymensingh",
      value: "Mymensingh",
    },
    {
      name: "Mymensingh",
      value: "Mymensingh",
    },
    {
      name: "Naogaon",
      value: "Narail",
    },
    {
      name: "Narayanganj",
      value: "Narayanganj",
    },
    {
      name: "Narsingdi",
      value: "Narsingdi",
    },
    {
      name: "Natore",
      value: "Natore",
    },
    {
      name: "Nawabganj",
      value: "Nawabganj",
    },
    {
      name: "Netrakona",
      value: "Netrakona",
    },
    {
      name: "Nilphamari",
      value: "Nilphamari",
    },
    {
      name: "Noakhali",
      value: "Noakhali",
    },
    {
      name: "Pabna",
      value: "Pabna",
    },
    {
      name: "Panchagarh",
      value: "Panchagarh",
    },
    {
      name: "Parbattya Chattagram",
      value: "Parbattya_Chattagram",
    },
    {
      name: "Patuakhali",
      value: "Patuakhali",
    },
    {
      name: "Pirojpur",
      value: "Pirojpur",
    },
    {
      name: "Rajbari",
      value: "Rajbari",
    },
    {
      name: "Rajshahi",
      value: "Rajshahi",
    },
    {
      name: "Rangpur",
      value: "Rangpur",
    },
    {
      name: "Satkhira",
      value: "Satkhira",
    },
    {
      name: "Shariatpur",
      value: "Shariatpur",
    },
    {
      name: "Sherpur",
      value: "Sherpur",
    },
    {
      name: "Sirajganj",
      value: "Sirajganj",
    },
    {
      name: "Sunamganj",
      value: "Sunamganj",
    },
    {
      name: "Sylhet",
      value: "Sylhet",
    },
    {
      name: "Tangail",
      value: "Tangail",
    },
    {
      name: "Thakurgaon",
      value: "Thakurgaon",
    },
  ];

  const handleSearch = (event) => {
    event.preventDefault();
    const number = event?.target?.number?.value;
    const district = event?.target?.district?.value;
    const area = event?.target?.area?.value;

    // console.log({
    //   number,
    //   district,
    // });

    const updateInfo = { number, district, area };

    const url = `${process.env.REACT_APP_apiHostLink}/api/v2/publicDonors/updateAreaOrLastDonationDate`;
    console.log(updateInfo, url);

    axios.patch(url, updateInfo).then(function (response) {
      console.log(response);

      if (response.data.modifiedCount > 0) {
        toast.success(
          `জেলা সফলভাবে আপডেট করা হয়েছে | District updated successfully.`
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
        <h1>জেলা পরিবর্তন করুন</h1>
        <h1>Change District</h1>
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
              <span class="label-text">জেলা (District) * :</span>
            </label>

            <select
              name="district"
              required
              class="select select-error w-full max-w-xs"
            >
              {districtName?.map((disName) => (
                <option value={disName?.value}>{disName?.name}</option>
              ))}
            </select>
          </div>

          <div class="form-control w-full max-w-xs">
            <label class="label">
              <span class="label-text">এলাকা (Area) :</span>
            </label>
            <textarea
              type="text"
              required
              //   defaultValue={data?.area}
              placeholder="এলাকা (Area)"
              name="area"
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

export default ChangeAreaOrLastDonationDate;
