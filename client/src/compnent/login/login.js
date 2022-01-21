import React from 'react';
import "./login.css"

function Login () {
    return (
        <div class= "login-signup">
            <div class= "Login" id= "login">
                <h2>Log In</h2>
                <form id= "login-form">
                    <div>
                        <label for="email">Email</label>
                        <input type="text" class="form-control" id="email-login" name="email"></input>
                    </div>
                    <div>
                            <label for="password">Password</label>
                            <input type="text" class="form-control" id="password-login" name="password"></input>
                    </div>
                    <input type="submit" value="Submit"/>
                </form> 
            </div>
            <div class= "Signup" id= "signup">
                <h2>Sign Up</h2>
                <form id= "signup-form">
                    <div>
                        <label for="email">Email</label>
                        <input type="text" class="form-control" id="email-signup" name="email"></input>
                    </div>
                    <div>
                        <label for="password">Password</label>
                        <input type="text" class="form-control" id="password-signup" name="password"></input>
                    </div>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        </div>
    )
}


export default Login;