import data from './../assets/games.json';

export function getAllGameData() {

    const obj = JSON.parse(JSON.stringify(data));
    return obj;

}

export function getOneGameData(id) {

    const obj = JSON.parse(JSON.stringify(data))

    const game = obj.games.filter(function(e) {
        return e.ID == id;
    });
    return game;

}