import React from 'react';

const RequestDetails = ({ request }) => {


    console.log(request)


    const { patient, medical, group, district, number, date, time, area, type } = request

    return (
        <div class="card w-full bg-neutral text-neutral-content">
            <div class="card-body items-center text-center">
                <h2 class="card-title">Blood For {patient}</h2>
                <p>Blood Group : {group}</p>
                <p>Type: {type}</p>
                <p>Date : {date}</p>
                <p>Time : {time}</p>
                <p>Medical : {medical}</p>
                <p>Number : {number}</p>
                <p>Area : {area}</p>
                <p>District : {district}</p>

            </div>
        </div>
    );
};

export default RequestDetails;