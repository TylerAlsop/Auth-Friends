import React, { useState } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

const AddFriendForm = () => {
    const [friend, setFriend] = useState(
        {
            id: "",
            name: "",
            age: "",
            email: ""
        }
    )

    const changeHandler = e => {
        setFriend({
          ...friend,
          [e.target.name]: e.target.value
        })
      };

    const submitHandler = e => {
    axiosWithAuth
        .post("/friendslist", friend)
        .then(res => {
        console.log("Post res in submitHandler", res);
        })
        .catch(err => {
        console.log("Error with POST", err);
        })
    };

    return (
        <div>
            <h2 className="add-friend-title">Add A Friend To The List</h2>
            <form onSubmit={submitHandler} className="add-friend-form">
                <label id="label" className="name-label">
                    Name:
                        <input 
                            id="input" 
                            type="text"
                            name="name"
                            onChange={changeHandler} />
                </label>
                <label id="label" className="age-label">
                    Age:
                        <input 
                            id="input" 
                            type="text"
                            name="age"
                            onChange={changeHandler} />
                </label>
                <label id="label" className="email-label">
                    E-mail:
                        <input 
                            id="input" 
                            type="text"
                            name="email"
                            onChange={changeHandler} />
                </label>
                <button className="submit-button">Add Friend</button>
            </form>
        </div>
    );
};

export default AddFriendForm;