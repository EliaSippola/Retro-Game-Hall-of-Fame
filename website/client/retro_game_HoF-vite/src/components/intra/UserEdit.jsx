import { useEffect, useState } from 'react';
import './UserEdit.css';
import { deleteUser, getUser, updateUser } from '../../methods/userData';
import { Search } from '../common/Search';

export function UserEdit({users, setUpdate}) {

    const [tmpUser, setTmpUser] = useState({_id: "", username: "", password: "", permission_level: 0});
    const [current, setCurrent] = useState(-1);
    const [filter, setFilter] = useState("");

    const handleClick = (e) => {
        current == e.currentTarget.dataset.key ? setCurrent(-1) :
        setCurrent(e.currentTarget.dataset.key);

        setTmpUser({_id: e.currentTarget.dataset.id, username: e.currentTarget.dataset.username, password: e.currentTarget.dataset.password, permission_level: e.currentTarget.dataset.permission});
    }

    const handleChange = (e) => {
        setTmpUser({
            ...tmpUser,
            [e.currentTarget.dataset.type]: e.target.value
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await updateUser(getUser()._id, tmpUser);
        setUpdate(1);
        setCurrent(-1);
    }

    const handleDelete = async (e) => {
        const del = confirm("Are you sure you want to delete account " + e.currentTarget.dataset.username + " PERMAMENTY?");

        if (del) {
            await deleteUser(getUser()._id, e.currentTarget.dataset.id);
        }

        setCurrent(-1);
        setUpdate(1);
    }

    useEffect(() => {
        setCurrent(-1);
    }, [filter]);

    return (
        <div id="useredit">
            <Search value={filter} setValue={setFilter} />
            {users.filter((a) => {return a.username.includes(filter)}).map((user, i) => {
                return (
                    <div key={i} id="usercard">

                        <div className='userData' onClick={handleClick} data-key={i} data-id={user._id} data-username={user.username} data-password={user.password} data-permission={user.permission_level} >
                            <div>
                                <p>{user.username}</p>
                                <p>{user.permission_level == 0 ? "Normal User" : "Admin User"}</p>
                            </div>
                        </div>

                        {/* form data */}
                        <div className='hiddenForm' style={current == i ? {} : {display: "none"}} >
                        <form onSubmit={handleSubmit}>
                            <input type='text' value={tmpUser.username} onChange={handleChange} data-type="username" />
                            <input type='text' value={tmpUser.password} onChange={handleChange} data-type="password" />
                            <select name="permission_level" onChange={handleChange} data-type="permission_level" value={tmpUser.permission_level}>
                                <option value={0}>Normal user</option>
                                <option value={1}>Admin user</option>
                            </select>
                            <button type="submit" name="submit">Save</button>
                        </form>
                        <button name='delete' data-id={user._id} onClick={handleDelete} data-username={user.username} >Delete User</button>
                        </div>

                    </div>
                )
            })}
        </div>
    )

}