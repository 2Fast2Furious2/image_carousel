const fs = require('fs');

//db/sdc/seed.js

const reviews = [51, 130, 255, 42, 85, 352];

const name = ['The Foxes Den', 'Riverfront Getaway', 'The Real BatCave', 'Luxury Treehouse in the Redwoods', 'Modern Beach Pad', 'Juju Town Retreat', 'Sunny Bungalow']

const rate = [425, 623, 89, 123, 342, 122, 456, 324, 144, 126];

const avgRating = [4.53, 3.75, 4.78, 3.25, 4.93, 4.23, 4.11, 4.42];

const postedDate = ['08/13/2020', '07/22/2020', '05/16/2020', '01/34/2020'];

const wasLiked = [true, false];



const seedData = (entries) => {
  let dataString = 'id reviews';

  for (let i = 1; i < entries; i++) {
    dataString += `${i},`;
    dataString += `${reviews[i % 6]},`;
    dataString += `${name[i % 6]},`;
    dataString += `${rate[i % 10]},`;
    dataString += `${avgRating[i % 8]},`;
    dataString += `${wasLiked[i % 2]},`;
    dataString += `${wasLiked[i % 2]},`;

    dataString += `\n`;
  }

//wrap in quotes for csv -- system or code ways to get around v8 limit  break your table up into multiple files

  return new Promise((resolve, reject) => {

    fs.writeFile('csvdata/testdata.csv', dataString, (err, data) => {

      if (err) {
        reject(err)
      } else {
        resolve(data)
      }
    })
  })

}

seedData(1000)
.then( () => {console.log('Success')})
.catch( () => {console.log('Error')})