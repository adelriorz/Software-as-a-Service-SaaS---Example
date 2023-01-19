import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Logout from "../logout/Logout";

function Profile() {
    const { user, isAuthenticated } = useAuth0();

    return (
        isAuthenticated && (
            <div>
                <img src={user.picture} alt={user.nickname} />
                <h2>{ user.nickname }</h2>
                <p>{JSON.stringify(user)}</p>

                <Logout/>

            </div>
        )
    );
}

export default Profile;