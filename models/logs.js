const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const logsSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    entry: {
        type: String,
        required: true
    },
    shipIsBroken: {
        type: Boolean,
        required: true
    }
})

const Logs = mongoose.model('Logs', logsSchema)

module.exports = Logs