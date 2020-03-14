import React, { useState } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

const LoginForm = () => {
    const [credentials, setCredentials] = useState(
        {
        username: "",
        password: ""
        }
    );

    const handleChange = e => {
        setCredentials(
            {
                ...credentials,
                [e.target.name]: e.target.value
            }
        );
    };

    const login = e => {
        e.preventDefault();

        axiosWithAuth()
        .post("/login", credentials)
        .then(res => {
            console.log("Login Response", res);
            localStorage.setItem("token", res.data.payload);
            // props.history.push("/friendslist");
        })
        .catch(err => {
            console.log("Login Error", err);
        });
    };

    return (
        <div>
            <form onSubmit={login} className="login-form">
                <label id="label" className="username-label">
                    Username:
                        <input 
                            id="input" 
                            type="text"
                            name="username"
                            onChange={handleChange} />
                </label>
                <label id="label" className="password-label">
                    Password:
                        <input 
                            id="input" 
                            type="text"
                            name="password"
                            onChange={handleChange} />
                </label>
                <button className="login-button">Login</button>
            </form>
        </div>
    );
};

export default LoginForm;