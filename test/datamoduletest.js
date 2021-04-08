const ssdb = require('../index');

const datamodule1 = new ssdb.dataModule({ route: "helloworldapp"});



// Data Modules have their own Queries built in. You can push requests to the datamodules, and they'll handle
// the extra things.

datamodule1.Push("Hey!");
