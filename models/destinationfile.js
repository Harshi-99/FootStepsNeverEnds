const mongoose  = require('mongoose');

//schema
const  Schema = mongoose.Schema;
const destinationSchema = new Schema({
    stateIndia: String,
    place: String,
    traveltip: String,
    experience: String,
    image : String,
    current_date: String
});

//model
const destinationfile=mongoose.model('destination_details',destinationSchema);

module.exports= destinationfile;