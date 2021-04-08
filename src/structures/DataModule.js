const datarunner = require('./AwaitDataRun')
const QueryMethod = require('./QueryHandler')
const fs = require("fs");

module.exports = class DataModule extends QueryMethod
{

    constructor(opts) {
        super(opts);

    }

    //. . .
    Host(port)
    {
        if (typeof port !== "string") return new TypeError("The Port must be of type string. Got " + typeof port);
        console.log("Connected to port " + port);
    }
    //. . .
    Query(content) {
        let query = new QueryMethod({
            route: "./sample"
        });
        query.Begin();
    }
    Print(req)
    {
        console.log(req)
    }
    Push(d) {
        fs.appendFileSync("./" + this.approute + "/data", "new-data:\n\tfrom: localhost\n\tcontent: " + d)
    }
    asJson() {
        const database = {
            Methods: null,
            newScale: 0,
            extras: [],
            db: fs.readFileSync('./' + this.approute + "/data")
        }
        return JSON.stringify(database)

    }
}