
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    code: {type: String, required: true},
    active: {type: Boolean, required: true }
})

const Users = mongoose.model("users",userSchema);

module.exports = Users