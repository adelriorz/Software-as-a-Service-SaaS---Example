import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

function Signup() {
    const { loginWithRedirect } = useAuth0();

    return (
        <div>
            <h2>Sign up</h2>
            <button onClick={()=> loginWithRedirect()}>Login</button>
        </div>
    );
}

export default Signup;