const Airtable = require('airtable');
const http = require('http');
const bonushunt = require('./bonushunt.js')
const hostname = '127.0.0.1';
const port = 3000;
const express = require('express')
const app = express()

app.listen(port, hostname, () => {
  console.log("Started!!!");
});

app.get('/getBonusHuntList', function (req, res) {
  res.send(bonushunt.getListOfGames())
})

app.get('/test', function (req, res) {
  //spel insats
  var test = res.send(bonushunt.addGameToBonusHunt("Johan Hunt", "Reactoonz", 0.4))
  console.log("WEWA " + test);
})
app.get('/getBonusHuntList', function (req, res) {
  res.send(bonushunt.getListOfGames())
})
/*
"fields": {
  "Name": name,
  "spel": spel,
  "insats": insats
}
*/
