const mongoose = require("mongoose");

const WristwatchSchema = new mongoose.Schema({
    id: Number,
    name: String,
    model: String
});

const Wristwatch = mongoose.model('watches', WristwatchSchema);

module.exports = Wristwatch;

