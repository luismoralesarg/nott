const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const pipelineSchema = require('./pipeline');

const projectSchema = new Schema({
  repository: {
    type: String,
    required: true,
    trim: true,
    minlength: 3
  },
  user_name: {
    type: String,
    required: true,
    trim: true,
    minlength: 3
  },
  pipelines: [pipelineSchema]
}, {
  timestamps: true,
});


module.exports = projectSchema;
