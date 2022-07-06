const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const actionSchema = new Schema({
    name: {
        type: String,
        required: true,
        index: { unique: true },
    },
    order: {
        type: Number,
        min: 1
    },
    script: {
        type: [String]
    },
}, {
  timestamps: true,
});


module.exports = actionSchema;
