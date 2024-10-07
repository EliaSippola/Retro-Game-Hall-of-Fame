import './UserEdit.css';

export function UserEdit({users}) {

    return (
        <div id="useredit">
            {users.map((user, i) => {
                return (
                    <div key={i} id="usercard">
                        <p>id: {user._id}</p>
                        <p>Username: {user.username}</p>
                        <p>password: {user.password}</p>
                        <p>permission_level: {user.permission_level}</p>
                    </div>
                )
            })}
        </div>
    )

}