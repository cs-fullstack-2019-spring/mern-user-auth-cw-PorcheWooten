var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    username: String,
    password: {type: String, required: true},
    email: {type: String, required: ture}
});


module.exports = mongoose.model('user', UserSchema);