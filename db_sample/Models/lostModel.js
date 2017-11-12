const mongoose = require('mongoose');
const LostSchema = mongoose.Schema({
    name: String,
    imageUrl: String,
    where: String,
    contact: String,
    reward: String
});

const LostModel = mongoose.model('lost', LostSchema);
module.exports = LostModel;
