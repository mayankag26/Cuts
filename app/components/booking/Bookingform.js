"use client";
import React from "react";
import { useState } from "react";
import { useSession } from "next-auth/react";
import Bookings from "@/models/bookings";
import mongoose from "mongoose";
import Users from "@/models/users";
import { useEffect } from "react";
function Bookingform({ salonid, availableNumber ,setavailableNumber}) {
  const { data } = useSession();
  // need to check user is login or not
  const [model, setModel] = useState(false);
  const [formData, setFormData] = useState({
    userEmail: data?.user.email,
    userName: data?.user.name,
    contactNo: "", // Fixed default value
    Address: "", // Default value
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  let useremail = data?.user.email;
  let username = data?.user.name;
  let status = false;
  let queueNo = availableNumber;
  let contactno = "882288282";
  let address = "jsjkhfu jdhugfh jshdh";

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      let response = await fetch("http://localhost:3000/api/users/userExists", {
        cache: "no-store",
      });
      const userData = await response.json();
      // console.log(userData);
      const foundUser = (userData?.result).find(
        ({ email }) => email === useremail
      );
      let userid = foundUser?._id;
    //  console.log(foundUser);
      if (foundUser?.contactNo === undefined || foundUser?.address === undefined ||foundUser?.contactNo === null ||foundUser?.address === "") {
        if (foundUser?.contactNo === undefined|| foundUser?.contactNo===null) {
          alert("Fill Contact Number in Your Profile");
        }
        if (foundUser?.address === undefined|| foundUser?.address === "") {
          alert("Fill Address in Your Profile");
        }
      } else {
        let result = await fetch("http://localhost:3000/api/bookings", {
          method: "POST",
          headers: {
            "Content-type": "appplication/json",
          },
          body: JSON.stringify({ userid, salonid, useremail, status, queueNo }),
        });

        // console.log(availableNumber);
        let updateavailableNumber = await fetch("http://localhost:3000/api/barber", {
          method: "PUT",
          headers: {
            "Content-type": "appplication/json",
          },
          body: JSON.stringify({salonid,availableNumber }),
        });
        if (result.status == 201) {
          alert("BOOKING SUCCESSFULL");
        } else {
          alert("BOOKING UNSUCCESSFULL");
        }
        setavailableNumber(availableNumber+1);
       
      }
    } catch (err) {
      console.log(err);
    }
    setModel(false);
  };
  return (
    <div>
      <button
        onClick={() => setModel(true)}
        type="button"
        className="rounded-lg px-10 py-3 text-sm font-semibold border-1 bg-blue-900 text-white border-black shadow-sm hover:bg-blue-600 hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      >
        BOOK SLOT NOW
      </button>
      {model && <dialog
        className="bg-white text-blue min-h-[500px] min-w-[400px] z-10 fixed bottom-10 left-0 p-10"
        open={true}
      >
        <h1 className="text-black font-bold">
          Booking For a Slot Number {availableNumber}
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col p-4 space-y-4">
          <label htmlFor="userName" className="text-sm font-medium pb-1">
            User Name:
          </label>
          <input
            type="text"
            id="userName"
            name="userName"
            value={username}
            onChange={handleChange}
            required
            className="w-full rounded-md border border-gray-300 px-3 py-2  bg-gray-200 text-gray-700 focus:outline-none"
          />
          <label htmlFor="userId" className="text-sm font-medium pb-1">
            User Email:
          </label>
          <input
            type="text"
            id="userId"
            name="userId"
            value={useremail}
            onChange={handleChange}
            required
            className="w-full rounded-md border border-gray-300 px-3 py-2  bg-gray-200 text-gray-700 focus:outline-none"
          />
          {/* <label htmlFor="ContactNo" className="text-sm font-medium pb-1">
            Contact Number:
          </label>
          <input
            type="text"
            id="contactNo"
            name="ContactNo"
            value={contactno}
            disabled // Disable editing for fixed salon ID
            className="w-full rounded-md border border-gray-300 px-3 py-2 bg-gray-200 text-gray-700 focus:outline-none"
          />
          <label htmlFor="Address" className="text-sm font-medium pb-1">
            Address:
          </label>
          <input
            type="text"
            id="Address"
            name="Address"
            value={address}
            disabled // Disable editing for fixed salon ID
            className="w-full rounded-md border border-gray-300 px-3 py-2 bg-gray-200 text-gray-700 focus:outline-none"
          /> */}
          <button
            type="submit"
            className="w-full rounded-md bg-indigo-600 py-2 text-center text-white font-medium hover:bg-indigo-700 focus:outline-none focus:ring-1 focus:ring-indigo-500 md:w-1/2 mx-auto" // Increased width and height, centered on medium screens
          >
            Submit Booking
          </button>
          <button
            className="w-full rounded-md bg-indigo-600 py-1 text-center text-white font-medium hover:bg-indigo-700 focus:outline-none focus:ring-1 focus:ring-indigo-500 md:w-1/2 mx-auto"
            onClick={() => setModel(false)}
          >
            Back
          </button>
        </form>
      </dialog>}
    </div>
  );
}

export default Bookingform;
