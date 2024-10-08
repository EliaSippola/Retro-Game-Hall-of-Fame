import React, { useState } from "react";
import './UserCreate.css';
import { createUser, getUser } from "../../methods/userData";

const UserCreate = ({ setUpdate }) => {

    const [values, setValues] = useState({username: "", password: "", permission_level: "0"});
    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        });

        if (message != "") {
            setMessage("");
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (await createUser(getUser()._id, values)) {
            setMessage("Succesfully created user");
            setUpdate(1);
        } else {
            setMessage("Could not create user");
        }
    }

    return (
        <div id="usercreate">
            <h2>Create user</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <input type="text" name="username" value={values.username} placeholder="Username" onChange={handleChange} required />
                    <input type="password" name="password" value={values.password}  placeholder="Password" onChange={handleChange} required />
                    <select name="permission_level" onChange={handleChange}>
                        <option value={0}>Normal user</option>
                        <option value={1}>Admin user</option>
                    </select>
                    <button type="submit" name="submit">Create</button>
                </div>
            </form>
            <p>{message}</p>
        </div>
    )
}

export default UserCreate;