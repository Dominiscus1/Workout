import React from "react";
import "./signup.css"

function Signup () {
    return (
        <div className= "login-signup">
            <div className="row">
                <div className= ".col__2" id= "signup">
                    <h2>Sign Up</h2>
                    <form id= "signup-form">
                        <div>
                            <label for="username">Name</label>
                            <br/>
                            <input type="text" id="username-signup" name="username"></input>
                        </div>
                        <div>
                            <label for="email">Email</label>
                            <br/>
                            <input type="text" id="email-signup" name="email"></input>
                        </div>
                        <div>
                            <label for="password">Password</label>
                            <br/>
                            <input type="text" id="password-signup" name="password"></input>
                        </div>
                        <br/>
                        <button className="btn2 pointer" type="submit" value="Signup" >Signup</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup;