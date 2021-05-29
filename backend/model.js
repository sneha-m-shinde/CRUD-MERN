const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let CRUD = new Schema({
    name: {
        type: String
    },
    description: {
        type: String
    },
    contact: {
        type: Number
    },
    email: {
        type: String
    },
    logo: {
        type: String
    },
    state: {
        type: String
    },
    city: {
        type: String
    },
    completed: {
        type: Boolean
    }
});

module.exports = mongoose.model('CRUD', CRUD);