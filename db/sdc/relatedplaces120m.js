
const fs = require('fs');



var relatedPlaceID = [3,456,7895,34567,3225,35006,486974,596,38694];

const numratings = [51, 130, 255, 42, 85, 352];



const rate = [425, 623, 89, 123, 342, 122, 456, 324, 144, 126];



writeNTimes = (writer, min, max, callback) => {

  const writeFile = () => {
    let ok = true;

    var relatedPlaceID1 = Math.ceil(Math.random()*max);
    var relatedPlaceID2 = Math.ceil(Math.random()*max);
    var relatedPlaceID3 = Math.ceil(Math.random()*max);
    var relatedPlaceID4 = Math.ceil(Math.random()*max);
    var relatedPlaceID5 = Math.ceil(Math.random()*max);
    var relatedPlaceID6 = Math.ceil(Math.random()*max);
    var relatedPlaceID7 = Math.ceil(Math.random()*max);
    var relatedPlaceID8 = Math.ceil(Math.random()*max);
    var relatedPlaceID9 = Math.ceil(Math.random()*max);
    var relatedPlaceID10 = Math.ceil(Math.random()*max);
    var relatedPlaceID11 = Math.ceil(Math.random()*max);
    var relatedPlaceID12 = Math.ceil(Math.random()*max);

    do {

        var dataString = `${min},`+`${relatedPlaceID1}`+`\n`;
        dataString += `${min},`+`${relatedPlaceID2}`+`\n`;
        dataString += `${min},`+`${relatedPlaceID3}`+`\n`;
        dataString += `${min},`+`${relatedPlaceID4}`+`\n`;
        dataString += `${min},`+`${relatedPlaceID5}`+`\n`;
        dataString += `${min},`+`${relatedPlaceID6}`+`\n`;
        dataString += `${min},`+`${relatedPlaceID7}`+`\n`;
        dataString += `${min},`+`${relatedPlaceID8}`+`\n`;
        dataString += `${min},`+`${relatedPlaceID9}`+`\n`;
        dataString += `${min},`+`${relatedPlaceID10}`+`\n`;
        dataString += `${min},`+`${relatedPlaceID11}`+`\n`;
        dataString += `${min},`+`${relatedPlaceID12}`+`\n`;


      if (min % max === 0) {

        writer.write(dataString, 'utf-8', callback);
      } else {
        ok = writer.write(dataString, 'utf-8')
      }
      min++;
    } while (min <= max && ok);
    if (min <= max) {
      writer.once('drain', writeFile)
    }
  }
  writeFile();
}


const writeStream = fs.createWriteStream('./csvdata/120mpostgresdata.csv')

const line1 = 'primaryPlaceID,relatedPlaceID\n';
writeStream.write(line1);
writeNTimes(writeStream, 1, 10000, ()=>{
  console.log('written!')
})