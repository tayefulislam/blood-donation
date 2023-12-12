import React from "react";
import { format, parseISO } from "date-fns";
import axios from "axios";
import { toast } from "react-toastify";

import { useNavigate } from "react-router-dom";

const MakeBloodRequest = () => {
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

  const navigate = useNavigate();

  const handleRequest = (event) => {
    event.preventDefault();
    // convet time

    const getTime = event?.target?.time?.value;
    const timeString = getTime + ":00";

    const time = new Date("1970-01-01T" + timeString + "Z").toLocaleTimeString(
      "en-US",
      { timeZone: "UTC", hour12: true, hour: "numeric", minute: "numeric" }
    );

    // comvert date

    const getDate = parseISO(event.target.date.value);

    const stringDate = format(getDate || new Date(), "PP");

    console.log(stringDate);

    const patient = event.target.patient.value;
    const medical = event.target.medical.value;
    const number = event.target.number.value;
    const unit = event.target.unit.value;
    const group = event.target.group.value;

    const type = event.target.type.value;
    const district = event.target.district.value;
    const area = event.target.area.value;
    const comment = event.target.comment.value;

    // new blood request
    const bloodRequest = {
      patient,
      medical,
      number,
      unit,
      group,
      date: stringDate,
      time: time,
      type,
      district,
      area,
      comment,
    };

    console.log(bloodRequest);
    // check
    const url = `https://apis.bluespacejp.com/api/v1/bloodRequest`;

    axios.post(url, bloodRequest).then(function (response) {
      console.log(response);

      if (response.status === 200) {
        navigate(`/requestDetails/${response.data._id}`);
        toast.success(`Your Request for ${type} successfully placed`);
        toast.success(`${type} এর জন্য আপনার অনুরোধ সফলভাবে রাখা হয়েছে`);

        event.target.reset();
      }
    });
  };
  return (
    <div className="flex justify-center items-center">
      <div className="card w-96">
        <h1 className="text-center text-2xl font-bold">
          রক্তদানের জন্য অনুরোধ
        </h1>
        <h1 className="text-center text-2xl font-bold">Make Blood Request</h1>

        <div className="card-body">
          <form onSubmit={handleRequest}>
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">রোগীর নাম (Patient Name ) :</span>
              </label>
              <input
                type="text"
                required
                placeholder="রোগীর নাম (Patient Name )"
                name="patient"
                class="input input-bordered input-error w-full max-w-xs"
              />
              <label class="label"></label>
            </div>

            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">মন্তব্য করুন (Comment):</span>
              </label>
              <textarea
                type="text"
                required
                placeholder="আপনার কোন মন্তব্য থাকলে এখানে লিখুন (Comment)"
                name="comment"
                class="input input-bordered input-error w-full max-w-xs"
              />
              <label class="label"></label>
            </div>
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">মেডিকেলের নাম (Medical Name):</span>
              </label>
              <input
                type="text"
                required
                placeholder="মেডিকেলের নাম (Medical Name) "
                name="medical"
                class="input input-bordered input-error w-full max-w-xs"
              />
              <label class="label"></label>
            </div>
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">ফোন নম্বর (Phone Number):</span>
              </label>
              <input
                type="number"
                required
                placeholder="ফোন নম্বর (Phone Number)"
                name="number"
                class="input input-bordered input-error w-full max-w-xs"
              />
              <label class="label"></label>
            </div>
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">
                  ইউনিট/ব্লাড ব্যাগ (Units/Blood Bag?)
                </span>
              </label>
              <input
                type="number"
                required
                placeholder=" ইউনিট/ব্লাড ব্যাগ - Units/Blood Bag"
                name="unit"
                class="input input-bordered input-error w-full max-w-xs"
              />
              <label class="label"></label>
            </div>
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">
                  রক্তের গ্রুপ (Blood Group Required ):
                </span>
              </label>

              <select
                name="group"
                required
                class="select select-error w-full max-w-xs"
              >
                <option disabled selected>
                  রক্তের গ্রুপ নির্বাচন করুন / Select Blood Group
                </option>
                <option value="A POSITIVE(+)">A+ (A POSITIVE)</option>
                <option value="A NEGATIVE(-)">A- (A NEGATIVE)</option>
                <option value="B POSITIVE(+)">B+ (B POSITIVE)</option>
                <option value="B NEGATIVE(-)">B- (B NEGATIVE)</option>

                <option value="AB POSITIVE(+)">AB+ (AB POSITIVE)</option>
                <option value="AB NEGATIVE(-)">AB- (AB NEGATIVE)</option>
                <option value="O POSITIVE(+)">O+ (O POSITIVE)</option>
                <option value="O NEGATIVE(-)">O- (O NEGATIVE)</option>
              </select>

              <label class="label"></label>
            </div>
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">
                  রক্তদানের তারিখ (Blood Donation Date) :
                </span>
              </label>
              <input
                type="date"
                required
                placeholder="Blood Donation Date "
                name="date"
                class="input input-bordered input-error w-full max-w-xs"
              />
              <label class="label"></label>
            </div>
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">
                  রক্তদানের সময় ( Blood Donation Time) :
                </span>
              </label>
              <input
                type="time"
                required
                placeholder="রক্তদানের সময় ( Blood Donation Time)"
                name="time"
                class="input input-bordered input-error w-full max-w-xs"
              />
              <label class="label"></label>
            </div>
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">প্রয়োজনীয়তা (Requirement) :</span>
              </label>
              <select name="type" class="select select-error w-full max-w-xs">
                <option value="blood">Blood - রক্ত</option>
                <option value="platelets">Platelets - প্লেটলেট</option>
                <option value="plasma">Plasma - প্লাজমা </option>
              </select>
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
                <span class="label-text">এলাকা (Area ) :</span>
              </label>
              <textarea
                type="text"
                required
                placeholder="এলাকা (Area)"
                name="area"
                class="input input-bordered input-error w-full max-w-xs"
              />
              <label class="label"></label>
            </div>

            <div className="flex justify-center items-center">
              <input className="btn" type="submit" value="জমা দিন / Submit" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MakeBloodRequest;
