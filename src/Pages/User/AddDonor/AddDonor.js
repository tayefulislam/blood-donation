import React from "react";
import { format, parseISO } from "date-fns";
import { toast } from "react-toastify";

const AddDonor = () => {
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

  const addDonor = (event) => {
    event.preventDefault();

    const getDate = parseISO(event.target.date.value);

    const stringDate = format(getDate || new Date(), "PP");

    console.log(stringDate);

    const name = event.target.name.value;

    const number = event.target.number.value;
    const group = event.target.group.value;
    const district = event.target.district.value;
    const area = event.target.area.value;
    const gender = event.target.gender.value;

    const newDonor = {
      name,

      number,
      group,
      district,
      area,
      lastDonation: stringDate,
      gender,
    };

    console.log(newDonor);

    const url = `${process.env.REACT_APP_apiHostLink}/api/v2/publicDonors`;

    fetch(url, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newDonor),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.name) {
          event.target.reset();
          toast.success(
            "রক্তদাতা হিসাবে আপনার তথ্য ডাটাবেসে সফলভাবে জমা  হয়েছে / Your Info as a blood donor submitted successfully in database "
          );
          if (newDonor.gender === "female") {
            toast.error(
              `"${newDonor.name}" As a female donor, your donor information will not available in the donor list for security purposes.  / "${newDonor.name}" একজন মহিলা দাতা হিসেবে, নিরাপত্তার স্বার্থে আপনার  তথ্য দাতা তালিকায় থাকবে না ।`
            );
          }
        }

        // if (data?.upsertedCount > 0) {
        //   toast.success("Donor Info successfully submitted");
        // }

        if (data?.error.includes("E11000")) {
          return toast.error(
            "রক্তদাতা হিসাবে আপনার তথ্য ইতিমধ্যেই আমাদের ডাটাবেসে উপলব্ধ। / Your Info as a blood donor already available in our database. "
          );
        }

        if (data?.status === "failed") {
          toast?.error(
            "রক্তদাতা হিসাবে আপনার তথ্য জমা দেওয়া ব্যর্থ হয়েছে / Your Info as a blood donor submitted unsuccessful"
          );
        }

        console.log(data);
      });
  };

  return (
    <div>
      <div className="flex justify-center items-center">
        <div className="card w-96">
          <h1 className="text-center text-lg font-bold">
            নতুন রক্তদাতা হয়ে উঠুন
          </h1>
          <h1 className="text-center text-lg font-bold">
            Became A New Blood Donor
          </h1>

          <div className="card-body">
            <form onSubmit={addDonor}>
              <div class="form-control w-full max-w-xs">
                <label class="label">
                  <span class="label-text"> নাম ( Name ) :</span>
                </label>
                <input
                  type="text"
                  required
                  // defaultValue={user?.displayName}

                  placeholder="নাম ( Name )"
                  name="name"
                  class="input input-bordered input-error w-full max-w-xs"
                />
                <label class="label"></label>
              </div>
              {/* <div class="form-control w-full max-w-xs">
                <label class="label">
                  <span class="label-text">ই-মেইল (Email):</span>
                </label>
                <input
                  type="text"
                  required
                  //   defaultValue={user?.email}

                  placeholder="ই-মেইল (Email)"
                  name="email"
                  class="input input-bordered input-error w-full max-w-xs"
                />
                <label class="label"></label>
              </div> */}
              <div class="form-control w-full max-w-xs">
                <label class="label">
                  <span class="label-text">ফোন নম্বর (Phone Number):</span>
                </label>
                <input
                  type="number"
                  required
                  //   defaultValue={data?.number}
                  placeholder="ফোন নম্বর (Phone Number)"
                  name="number"
                  class="input input-bordered input-error w-full max-w-xs"
                />
                <label class="label"></label>
              </div>

              <div class="form-control w-full max-w-xs">
                <label class="label">
                  <span class="label-text">রক্তের গ্রুপ (Blood Group):</span>
                </label>

                <select
                  name="group"
                  required
                  class="select select-error w-full max-w-xs"
                >
                  <option value="" disabled selected>
                    Select Blood Group
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

              {/* <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">
                  Last Blood Donation Date:{" "}
                  {data?.lastDonation && <p>{data?.lastDonation}</p>}
                </span>
              </label>
              <input
                type="date"
                placeholder="Blood Donation Time"
                name="lastDonation"
                class="input input-bordered input-error w-full max-w-xs"
              />
              <label class="label"></label>
            </div> */}

              {/* <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text"> Last Blood Donation Date :</span>

                            </label>
                            <input type="date" required placeholder="Blood Donation Date " name='date' class="input input-bordered input-error w-full max-w-xs" />
                            <label class="label">

                            </label>
                        </div> */}
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

              <div class="form-control w-full max-w-xs">
                <label class="label">
                  <span class="label-text"> লিঙ্গ (Gender):</span>
                </label>

                <select
                  name="gender"
                  required
                  class="select select-error w-full max-w-xs"
                >
                  <option value="" disabled selected>
                    লিঙ্গ নির্বাচন করুন / Select Gender
                  </option>
                  <option value="male">পুরুষ - Male</option>
                  <option value="female">মহিলা - Female</option>
                  <option value="thirdGender">৩য় লিঙ্গ - Third Gender</option>
                </select>

                <label class="label"></label>
              </div>

              <div class="form-control w-full max-w-xs">
                <label class="label">
                  <span class="label-text">জেলা ( District):</span>
                </label>

                <select
                  name="district"
                  required
                  class="select select-error w-full max-w-xs"
                >
                  {/* <option value="Dhaka">Dhaka</option>
                  <option
                    value="Brahmanbaria"
                    // selected={data?.district === "Brahmanbaria"}
                  >
                    Brahmanbaria
                  </option> */}

                  {districtName?.map((nameD) => (
                    <option value={nameD.value}>{nameD.name}</option>
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

              <div>
                <h1 className="text-center font-bold  text-xs py-3 flex justify-center items-center">
                  For security reasons, female donors information will not
                  available in donor list. <br />
                  নিরাপত্তার কারণে নারী দাতাদের তথ্য দাতা তালিকায় থাকবে না।
                </h1>
              </div>

              <div className="flex justify-center items-center">
                <input className="btn" type="submit" value="Submit" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddDonor;
