const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schemaObject = JSON.parse('SCHEMA');

const nameSchema = new Schema(schemaObject, {
  timestamps: true,
});


module.exports = nameSchema;