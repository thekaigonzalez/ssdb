const fs = require('fs')

module.exports = class {

    approute="";
    constructor(app) {
        try {
            this.approute = app.route;
            fs.mkdirSync(app.route)
        }
        catch (e) {
            console.log("Failed! App does not have a root directory, or a 'route' object in place.")
        }
    }
    Begin() {
        fs.writeFileSync("./" +this.approute + "/data", "# Data Goes under this line\n---------------------------------\n\n")
    }
    Add(struct, content)
    {
        fs.appendFileSync("./" + this.approute + "/data" , struct + ":" +  content);
    }
    Remove()
    {
        fs.rmdirSync('./' + this.approute + "/data");
    }
    Print(msg){
        console.log("From Data Route " + this.approute + ": " + msg)
    }
    Format(print)
    {
        return this.approute + ":" + print;
    }
    async SubData(data) {
        return new Promise((reg) => {
            try {
                reg = true
                fs.appendFileSync("./" + this.approute + "/data", data);
            }
            catch (e) {
                reg = false
            }
            return reg;
        })
    }
    On(T)
    {
        return T;
    }

}