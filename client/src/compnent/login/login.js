import React from 'react';
import "./login.css"

function Login () {
    return (
        <div class= "login-signup">
            <div className= "row">
                <div className= ".col__2" id= "login">
                    <h2>Log In</h2>
                    <form id= "login-form">
                        <div>
                            <label for="email">Email</label>
                            <br/>
                            <input type="text" class="form-control" id="email-login" name="email"></input>
                        </div>
                        <div>
                            <label for="password">Password</label>
                            <br/>
                            <input type="text" class="form-control" id="password-login" name="password"></input>
                        </div>
                        <br/>
                        <button className="btn2 pointer" type="submit" value="Login" >Login</button>
                    </form> 
                </div>
            </div>
        </div>
    )
}


export default Login;