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

    static $dataBaseFile = path.resolve("models","db.json");

    static async $getParsedData() {
        return new Promise((resolve, reject) =>
            fs.readFile(this.$dataBaseFile, "utf8", (err, data) => {
                //Handle errors
                if (err) reject(err);
                //Handle result
                resolve(JSON.parse(Buffer.from(data).toString()));
            })
        )
    }
    static async $saveData(data) {
        let fullData = await this.$getParsedData();
        fullData = JSON.stringify([...fullData, data]);
        return new Promise((resolve, reject) =>
            fs.writeFile(this.$dataBaseFile, fullData, err => {
                //Handle errors
                if (err) reject(err);
                //Handle success
                resolve(true);
            })
        )
    }
    static async find({ limit, id }) {
        const fullData = await this.$getParsedData();
        //Find articles
        const result = id ? fullData.find(article => article.id === id) : fullData;
        //Handle limit
        (limit && result.length > limit) && (result.length = limit);
        return result;
    }
    static async add({ title, description, img, text }) {
        return await this.$saveData({
            title, description, img, text, id: Date.now()
        })
    }
}