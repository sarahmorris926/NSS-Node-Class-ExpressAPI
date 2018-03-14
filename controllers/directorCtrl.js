const { getAll, getOne } = require('../models/Director');

module.exports.getDirectors = (req, res, next) => {
    getAll()
    .then( (direx) => {
        res.status(200).json(direx);
    })
    .catch( (err) => next(err));
}

module.exports.getOneDirector = (req, res, next) => {
    let queryID = req.params.id;
    getOne(queryID)
    .then( (director) => {
        res.status(200).json(director);
    })
    .catch( (err) => next(err));
}