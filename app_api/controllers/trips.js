const mongoose = require('mongoose');
const Trip = require('../models/travlr'); // Register model
const Model = mongoose.model('trips');

const tripsList = async(req, res) => {
    const q = await Model
        .find({}) // No filter, return all records 
        .exec();
    if(!q) { // Database returned no data
        return res
                .status(404)
                .json(err);
        } else { // Return resulting trip list
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
        .find({'code' : req.params.tripCode}) // Return single record
        .exec();


        // Uncomment the following line to show the results of querey
        // on console 
        // console.log(q);

    if(!q) { // Database returned no data
        return res
                .status(404)
                .json(err);
    } else { // Return resulting trip list
        return res
                .status(200)
                .json(q);

     

    }   
};
const tripsAddTrip = async(req, res) => {
  const q = await Model 
      .create({
        code: req.body.code,
        name: req.body.name, 
        length: req.body.length,
        start: req.body.start,
        resort: req.body.resort,
        perPerson: req.body.perPerson,
        image: req.body.image,
        description: req.body.description
      },
      (err, trip) => {
        if(err)
        {
          return res
              .status(400)
              .json(err);

        } else{
          return res
            .status(201)
            .json(trip);
        }
      });
};
//PUT:/trips/:tripCode-Adds a new Trip
// Regardless of outcome, response must include HTML status code
// and JSON message to the requesting client
const tripsUpdateTrip = async(req, res) => {
  // Ucomment for debugging

  console.log(req.params);
  console.log(req.body);

  const q = await Model
    .findOneAndUpdate(
      {'code':req.params.tripCode},
      {
        code: req.body.code,
        name: req.body.name,
        length: req.body.length,
        start: req.body.start,
        resort: req.body.resort,
        perPerson: req.body.perPerson,
        image: req.body.image,
        description: req.body.description
      }
    )
    .exec();
    if(!q)
    { // Database returned no data
      return res
        .status(400)
        .json(err);
        
    } else {
      return res  
        .status(201)
        .json(q);
    }
};
module.exports = {
    tripsList,
    tripsFindByCode,
    tripsAddTrip,
    tripsUpdateTrip
};
