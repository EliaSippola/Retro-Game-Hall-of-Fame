import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './LoginForm.css';
import { login } from "../../methods/userData";

const LoginForm = () => {

    const [values, setValues] = useState({username: "", password: ""});
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (await login(values.username, values.password)) {
            navigate('/');
        } else {
            setMessage("Wrong username or password!");
        }
    }

    return (
        <div id="loginform">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <input type="text" name="username" value={values.username} placeholder="Username" onChange={handleChange} required />
                    <input type="password" name="password" value={values.password}  placeholder="Password" onChange={handleChange} required />
                    <button type="submit" name="submit">Login</button>
                </div>
            </form>
            <p>{message}</p>
        </div>
    )
}

export default LoginForm;