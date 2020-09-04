mongoimport --type csv -d hrsfsdc -c places --headerline --drop mongodb.csv

–type: The input format to import: json, csv, or tsv. We are using csv so that’s what we specify.
-d: Specifies what database to use. We used the test database.
-c: Specifies what collection to use. We used a collection called products.
–headerline: Specifies that the first row in our csv file should be the field names.
–drop: Specifies that we want to drop the collection before importing documents.

db.places.createIndex({id: 1})

db.setProfilingLevel(2)

db.runCommand( {
  dbStats: 1,
} )

db.places.find( { id: 8675309 } )
db.places.find( { id: 8675309 }).explain("executionStats")

db.places.find().explain("executionStats")

db.places.explain().find()
db.places.explain("executionStats").find( { id: 8675309} })

