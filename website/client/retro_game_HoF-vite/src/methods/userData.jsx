let user = {_id: "", username: "", password: ""};

const baseUrl = import.meta.env.VITE_API_URL;

export function getUser() {
    return user;
}

export function setUser(id, name, password) {
    user = {_id: id, username: name, password: password};
}

export async function login(name, password) {

    const res = await fetch(baseUrl + "/users/login", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: name,
            password: password
        })
    })

    const values = await res.json();

    if (res.ok && values.login != null && values.login) {
        setUser(values._id, values.username, values.password);
        return true;
    } else {
        setUser('', '', '');
        return false;
    }

}

export async function getAllUsers(_id) {

    const res = await fetch(baseUrl + "/users", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            _id: _id
        })
    })

    if (res != null && res.status == 200) {
        return res.json();
    } else {
        return false;
    }

}

export async function createUser(userdata) {

    if (userdata.username && userdata.password) {

        const res = fetch(baseUrl + "/users/create", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: userdata.username,
                password: userdata.password,
                permission_level: 0
            })
        })

        if (res && res.status == 200) {
            return true;
        } else {
            return false;
        }

    } else {
        return false;
    }

}