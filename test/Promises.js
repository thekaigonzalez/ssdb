const ssdb = require('../index')



const db = new ssdb.dataModule({ route: "Folder"})


db.SubData(db.Format("Hello!")).then(isPassed => {
    if (isPassed) {
        console.log("success!")
    }
    else {
        console.log("failed")
    }
});