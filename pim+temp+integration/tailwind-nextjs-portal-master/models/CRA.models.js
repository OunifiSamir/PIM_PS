const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CRASchema = new Schema({
    Project: {
        type: "String",
    },
    Activite: {
        type: "String",
    },
    DateR: {
        type: "String",
    },
    Nombreh: {
        type: "String",
    },
    Status: {
        type: "String",
    }
});


module.exports = CRA = mongoose.model('cra', CRASchema);