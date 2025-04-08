const mongoose = require('mongoose');
const Trip = require('../models/travlr');
const Model = mongoose.model('trips');

const tripsList = async(req, res) => {
    const q = await Model
        .find({})
        .exec();
    if(!q) {
        return res
                .status(404)
                .json(err);
    } else {
        return res
            .status(200)
            .json(q);
    }    
};

// GET: /trips - list all the trips 
// Regardless of the outcome, response must include HTML status code
// and JSON message to the requiesting client

const tripsFindByCode = async(req, res) => {
    const q = await Model
        .find({'code' : req.params.tripCode})
        .exec();
    if(!q) {
        return res
                .status(404)
                .json(err);

    } else {
        return res
            .status(200)
            .json(q);
    }    
};
module.exports = {
    tripsList,
    tripsFindByCode
};
