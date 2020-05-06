const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const convertedTime = () => {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth();
    return `${day < 10 ? '0' + day : day}.${month < 10 ? '0' + month : month}.${date.getFullYear()}`;
}

const postSchema = new Schema({
    title: {
        type: Schema.Types.String,
        required: true,
    },
    description: {
        type: Schema.Types.String,
        required: true,
    },
    author: {
        type: Schema.Types.String,
        required: true,
    },
    text: {
        type: Schema.Types.String,
        required: true,
    },
    createDate: {
        type: Schema.Types.Date,
        default: Date.now
    },
    time: {
        type: String,
        default: convertedTime
    }
});

module.exports = mongoose.model("post", postSchema);
