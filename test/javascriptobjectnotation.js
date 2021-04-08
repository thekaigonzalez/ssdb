const ssdb = require('../index')



const client = new ssdb.dataModule({
    route: "MyRouteFolder"
})

console.log(client.asJson());