const mongoose = require('mongoose'),
    config = require('./config');

module.exports = () => {
    mongoose
        .connect(config.mongo_uri, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log('MongoDb has been connected'))
        .catch(e => console.log("Mongoose connection failed:", e));
}