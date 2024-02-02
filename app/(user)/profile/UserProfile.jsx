"use client"

import EditUserForm from "@/app/components/EditUserForm";


export default function UserProfile({ user }) {

    // console.log({ user });
    return (
        <EditUserForm user={user} />
    )
}



