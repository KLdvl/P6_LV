const mongoose = require ('mongoose');
const mongooseErrorHandler = require('mongoose-validation-error-message-handler');
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true}
});
userSchema.plugin(uniqueValidator);
userSchema.plugin(mongooseErrorHandler);
module.exports = mongoose.model('User', userSchema);
