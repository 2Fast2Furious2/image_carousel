COPY persons(first_name, last_name, dob, email)
FROM 'C:\sampledb\persons.csv'
DELIMITER ','
CSV HEADER;

SELECT *
FROM relatedplaces
WHERE primaryplaceid=101;

COPY place(id, place_name, place_description, avgrating, numberofratings, place_image, rate, wasliked, posteddate, longitude, latitude, category, superhost)
FROM '/Users/danieldepaoli/Desktop/HRSeniorProjects/image_carousel/csvdata/10mpostgresdata.csv'
DELIMITER ','
CSV HEADER;

COPY relatedplaces(primaryplaceid, relatedplaceid)
FROM '/Users/danieldepaoli/Desktop/HRSeniorProjects/image_carousel/csvdata/120mpostgresdata.csv'
DELIMITER ','
CSV HEADER;




const client = new Client({
  user: 'dbuser',
  host: 'database.server.com',
  database: 'mydb',
  password: 'secretpassword',
  port: 3211,
})
client.connect()
client.query('SELECT NOW()', (err, res) => {
  console.log(err, res)
  client.end()
})