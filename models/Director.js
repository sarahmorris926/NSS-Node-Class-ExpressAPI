
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/mediaStore.sqlite');

module.exports.getAll = () => {
    return new Promise( (resolve, reject) => {
        db.all(`SELECT * FROM directors`, (err, direx) => {
            if (err) reject(err);
            resolve(direx);
        })
    })
}

module.exports.getOne = (dirId) => {
    return new Promise( (resolve, reject) => {
        db.get(`SELECT directors.*, movies.name AS "Movie Name"
                FROM directors
                JOIN movies ON dir_id = movies.director_id
                WHERE dir_id=${dirId}`, (err, director) => {
            if (err) return reject(err);
            resolve(director)
        })
    })
}