const path = require('path');
const fs = require('fs');

module.exports = class Article {
    constructor() {
        if (!!Article.instance) {
            return Article.instance;
        }

        Article.instance = this;
        return this;
    }

    $dataBaseFile = path.resolve("./db.json");

    static async $getParsedData() { }
    static async $saveData() { }
    static async find({ limit, title }) { }
    static async add({ title, description, img, text }) { }
}