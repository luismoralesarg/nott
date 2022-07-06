const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ssh_hostSchema = new Schema({
    host: {
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
    user: {
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
    password: {
        type: String,
        trim: true,
        minlength: 3
    },
    port: {
        type: Number,
        required: true,
    },
    ssh_key: {
        type: String,
    },
    passphrase: {
        type: String
    }
}, {
  timestamps: true,
});

module.exports = ssh_hostSchema;
