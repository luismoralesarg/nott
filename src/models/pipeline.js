const mongoose = require('mongoose');
const actionSchema = require('./action');
const hostSchema = require('./ssh_host');
const Schema = mongoose.Schema;

const HostModel = mongoose.model('Host', hostSchema);

const pipelineSchema = new Schema({
    name: {
        type: String,
        required: true,
        index: { unique: true },
        trim: true,
        minlength: 3
    },    
    branch: {
        type: String,
        required: true,
        index: { unique: true },
        trim: true,
        minlength: 3
    },
    trigger_mode: {
        type: String,
        enum : ['manual', 'commit', 'recurrently'],
        default: 'commit'
    },
    host: {type: mongoose.Types.ObjectId, ref: "HostModel"},
    actions: [actionSchema]
}, {
  timestamps: true,
});


module.exports = pipelineSchema;
