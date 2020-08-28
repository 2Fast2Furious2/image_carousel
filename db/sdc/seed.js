const fs = require('fs');

//db/sdc/seed.js

const reviews = [51, 130, 255, 42, 85, 352];

const name = ['The Foxes Den', 'Riverfront Getaway', 'The Real BatCave', 'Luxury Treehouse in the Redwoods', 'Modern Beach Pad', 'Juju Town Retreat', 'Sunny Bungalow']

const seedData = (entries) => {
  let dataString = 'id reviews';

  for (let i = 1; i < entries; i++) {
    dataString += `${i}`;
    dataString += `${reviews[i % 6]}`;
    dataString += `\n`;
  }

//wrap in quotes for csv -- system or code ways to get around v8 limit  break your table up into multiple files

  return new Promise((resolve, reject) => {

    fs.writeFile('./db/sdc/testdata.txt', dataString, (err, data) => {

      if (err) {
        reject(err)
      } else {
        resolve(data)
      }
    })
  })

}

seedData(10)
.then( () => {console.log('Success')})
.catch( () => {console.log('Error')})