// import data from './../assets/games.json';

// export async function getAllGameData() {

//     const obj = JSON.parse(JSON.stringify(data));
//     return obj;

// }

// export async function getOneGameData(id) {

//     const obj = JSON.parse(JSON.stringify(data))

//     const game = obj.games.filter(function(e) {
//         return e.ID == id;
//     });
//     return game;

// }

// from server

const baseUrl = import.meta.env.VITE_API_URL;

export const getGames = async () => {

    const res = await fetch(baseUrl + '/games');

    if (res == null) {
        return JSON.parse({});
    }

    return res.json();

}

export const getOneGame = async (id) => {

    const res = await fetch(baseUrl + '/games/' + id);

    if (res == null) {
        return JSON.parse({});
    }

    return res.json();

}

export const getPhoto = async (file) => {
    const res = await fetch(baseUrl + "/files/" + file);

    if (!res.ok || res.status == 204) {
        return null;
    }

    const imageBlob = await res.blob();
    const imageObjectUrl = URL.createObjectURL(imageBlob);
    return imageObjectUrl;
}