import React, {useState} from "react";
import "./signup.css";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../../utils/mutations";
import Auth from "../../utils/auth";

function Signup(props) {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        firstName: formState.firstName,
        lastName: formState.lastName,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="login-signup">
      <div className="row">
        <div className=".col__2" id="signup">
          <h2>Sign Up</h2>
          <form onSubmit={handleFormSubmit}>
            <div>
              <label for="firstName">First Name</label>
              <br />
              <input
                type="firstName"
                id="firstName"
                name="firstName"
                onChange={handleChange}
              ></input>
            </div>
            <div>
              <label for="lastName">Last Name</label>
              <br />
              <input
                type="lastName"
                id="lastName"
                name="lastName"
                onChange={handleChange}
              ></input>
            </div>
            <div>
              <label for="email">Email</label>
              <br />
              <input
                type="email"
                id="email"
                name="email"
                onChange={handleChange}
              ></input>
            </div>
            <div>
              <label for="password">Password</label>
              <br />
              <input
                type="password"
                id="password"
                name="password"
                onChange={handleChange}
              ></input>
            </div>
            <br />
            <button className="btn2 pointer" type="submit">
              Signup
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
