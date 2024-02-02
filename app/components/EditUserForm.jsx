import React, { useEffect } from 'react'
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from 'react-toastify';

const EditUserForm = ({ user }) => {
    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [contactNo, setcontactNo] = useState(user.contactNo);
    const [address, setAddress] = useState(user.address);
    // console.log({ name, email, contactNo, address })

    const router = useRouter();


    const handleSubmit = async (e) => {
        try {
            const res = await fetch("api/users/editUser", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*",
                },
                body: JSON.stringify({
                    name,
                    email,
                    contactNo,
                    address
                }),
            });

            if (res.ok) {
                toast.success("Changes saved successfully",{
                    autoClose:1000,
                    position:"top-right",
                })
                router.push("/");
                // alert("Changes saved successfully")
            } else {
                console.log("User registration failed.");
            }
        } catch (error) {
            console.log("Error during registration: ", error);
        }
    };

    return (
            <div className="mx-auto my-4 max-w-2xl md:my-6">
                <div className="overflow-hidden rounded-xl bg-white p-4 shadow">
                    <p className="text-xl font-bold text-gray-900">Personal Info</p>
                    <div className="mt-6 gap-6 space-y-4 md:grid md:grid-cols-1 md:space-y-0">


                        <div className="w-full col-span-2">
                            <label
                                className="font-bold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                Name
                                <input
                                    className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                    onChange={(e) => setName(e.target.value)}
                                    type="text"
                                    value={name}
                                    disabled
                                ></input>
                            </label>
                        </div>

                        <div className="w-full col-span-2">
                            <label
                                className="font-bold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                Email address
                                <input
                                    className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                    onChange={(e) => setEmail(e.target.value)}
                                    type="text"
                                    value={email}
                                    disabled
                                ></input>
                            </label>
                        </div>


                        <div className="w-full col-span-2">
                            <label
                                className="font-bold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                Contact Number
                                <input
                                    className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                    type="text"
                                    onChange={(e) => setcontactNo(e.target.value)}
                                    value={contactNo}
                                    id="contactNo"
                                ></input>
                            </label>
                        </div>


                        <div className="w-full col-span-2">
                            <label
                                className="font-bold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                Address
                                <input
                                    className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                    type="text"
                                    onChange={(e) => setAddress(e.target.value)}
                                    value={address}
                                    id="address"
                                ></input>
                            </label>
                        </div>


                        <div className="col-span-2 grid">
                            <button
                                type="button"
                                className="w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                                onClick={(e) => handleSubmit(e)}
                            >
                                Save changes
                            </button>
                        </div>
                    </div>
                </div>
            </div>            
    )
}

export default EditUserForm
