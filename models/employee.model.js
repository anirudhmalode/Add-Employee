const mongoose = require('mongoose');

var employeeSchema = new mongoose.Schema({
    fullName: {
        type: String
    },
    email: {
        type: String
    },
    contact: {
        type: String
    },
    address: {
        type: String
    }
});

mongoose.model('Employee', employeeSchema);