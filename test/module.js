const ssdb = require('../index')



// Creates a query handler
var handle = new ssdb.QueryHandler({ route: "MyRouteFolder"});

// Starts the handler
handle.Begin();

// Send Messages from the query into the main console
handle.Print("Hello!");

handle.Add("test","Yo!");