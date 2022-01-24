import React from "react"
import Login from "../compnent/login/login"
import Signup from "../compnent/signup/signup"

function Register () {
    return (
        <div class= "login-signup">
            <div className= "row">
                < Login />
                < Signup />
            </div>
        </div>
    );
}

export default Register