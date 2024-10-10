import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './UserEdit.css';
import { changePass, createUser, getUser, login } from "../../methods/userData";

const UserEdit = () => {

    const [values, setValues] = useState({_id: "",username: "", password: ""});
    const [message, setMessage] = useState("");
    const navigate = useNavigate();
    const [oldPass, setOldPass] = useState("");

    useEffect(() => {
        handleUser();
    }, []);

    const handleUser = async () => {

        const tempValues = getUser();

        if (tempValues._id == '') {
            navigate('/unauthorized');
        } else {
            setValues({_id: "", username: tempValues.username, password: ''});
            setOldPass(tempValues.password);
        }

    }

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (await changePass(values._id, values.password, oldPass)) {
            navigate('/successful-pass-change');
        }
    }

    return (
        <div id="useredit">
            <h2>Change password</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <input type="text" name="username" value={values.username} placeholder="Username" disabled />
                    <input type="password" name="password" value={values.password}  placeholder="Password" onChange={handleChange} required />
                    <button type="submit" name="submit">Change</button>
                </div>
            </form>
            <p>{message}</p>
        </div>
    )
}

export default UserEdit;