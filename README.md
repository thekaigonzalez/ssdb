# SSDB
Advanced structuring and querying written in javascript.

```js
const ssdb = require('../index');

const datamodule1 = new ssdb.dataModule({ route: "helloworldapp"});



// Data Modules have their own Queries built in. You can push requests to the datamodules, and they'll handle
// the extra things.

datamodule1.Push("Hey!");

```

```js
const ssdb = require('../index')



// Creates a query handler
var handle = new ssdb.QueryHandler({ route: "MyRouteFolder"});

// Starts the handler
handle.Begin();

// Send Messages from the query into the main console
handle.Print("Hello!");

handle.Add("test","Yo!");
```

## SSDB_Doc
### QueryHandler
QueryHandler handles external methods. Inherited by DataModule.
#### QueryHandler.Begin();
Beings the queryhandler Search.
#### Print(string);
Prints a message from the anonymous directory.
#### Constructor(Options)
Constructs the queryHandler's route using the Options.Route Setting.
#### Add(structure, content)
Adds the given structure with content as it's body.
```yaml
structure: content
```
#### Format(line)
Formats [line] with YAML standard.
```text
hello
Format(hello)
```

```yaml
<approute>: <line>
```
The [approute] tag can be found above.
#### Remove();
Removes the data stored in the SSDB.
### DataModule
DataModules pre-build most assets of QueryHandlers.
#### Host(port)
. . .
#### Query(content)
Makes a sample Directory.
#### Print(msg)
[View SSDB.QueryHandler.Print(content)](#queryhandler)
#### Push(d)
Pushes [d] To the app.
#### asJson()
Returns the dB as a json.