const data = './AnnihilationTweets.csv'
const csv = require('csvtojson')
const fs = require('fs');
csv({
  checkType:true
})
.fromFile(data)
.then((jsonObject) => {
    let jsonString = JSON.stringify(jsonObject, null, "  ");
    fs.writeFileSync('./src/AnnihilationTweets.json', jsonString);
})