import { useEffect, useState } from 'react';
import './UserEdit.css';
import { getUser, updateUser } from '../../methods/userData';

export function UserEdit({users}) {

    const [tmpUser, setTmpUser] = useState({_id: "", username: "", password: "", permission_level: 0});
    const [current, setCurrent] = useState(-1);

    const handleClick = (e) => {
        current == e.currentTarget.dataset.key ? setCurrent(-1) :
        setCurrent(e.currentTarget.dataset.key);

        setTmpUser({_id: e.currentTarget.dataset.id, username: e.currentTarget.dataset.username, password: e.currentTarget.dataset.password, permission_level: e.currentTarget.dataset.permission_level});
    }

    const handleChange = (e) => {

        setTmpUser({
            ...tmpUser,
            [e.currentTarget.dataset.type]: e.target.value
        });

    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(await updateUser(getUser()._id, tmpUser));
    }

    return (
        <div id="useredit">
            {users.map((user, i) => {
                return (
                    <div key={i} id="usercard">

                        <div className='userData' onClick={handleClick} data-key={i} data-id={user._id} data-username={user.username} data-password={user.password} data-permission_level={user.permission_level} >
                            <p>{user.username}</p>
                            <p>{user.permission_level == 0 ? "Normal User" : "Admin User"}</p>
                        </div>

                        {/* form data */}
                        <div className='hiddenForm' style={current == i ? {} : {display: "none"}} >
                        <form onSubmit={handleSubmit}>
                            <input type='text' value={tmpUser.username} onChange={handleChange} data-type="username" />
                            <input type='text' value={tmpUser.password} onChange={handleChange} data-type="password" />
                            <select name="permission_level" onChange={handleChange} data-type="permission_level" defaultValue={user.permission_level}>
                                <option value={0}>Normal user</option>
                                <option value={1}>Admin user</option>
                            </select>
                            <button type="submit" name="submit">Save</button>
                        </form>
                        <button name='delete' data-id={user._id}>Delete User</button>
                        </div>

                    </div>
                )
            })}
        </div>
    )

}