var Airtable = require('airtable');
var base = new Airtable({apiKey: 'keymHzzUdhNbLL8Nk'}).base('applqh1pzt2Df9pvp');


const getListOfGamess = () => {
var listOfGames = [];
var trackrecord = new Map();
base('BonusHunt').select({
    maxRecords: 50,
    view: "Grid view"
}).eachPage(function page(records, fetchNextPage) {
    records.forEach(function(record) {
        console.log("Spel: "+ record.get('Game'), "Insats: " + record.get('Insats'));
        console.log(record)
        listOfGames.push(record);
    });
    return listOfGames;
}, function done(err) {
    if (err) { console.error(err); return; }
});
}

const addGameToBonusHunt = (namn, spel, insats) => {
  base('BonusHunt').create([
    {
      "fields": {
        "namn": namn,
        "spel": spel,
        "insats": insats
      }
    }
  ], function(err, records) {
    if (err) {
      console.error(err);
      return;
    }
    records.forEach(function (record) {
      console.log(record.getId());
    });
  });
}

const updateGameBonusHunt = (namn, spel, insats) => {
  base('BonusHunt').update([
    {
      "id": "reclG2BEaAey4giY0",
      "fields": {
        "name": "Robert Hunt",
        "spel": "Reactoonz",
        "insats": 0.4,
        "vinst": 40
      }
    },
    {
      "id": "recnDZ3BKKFRcQk7o",
      "fields": {
        "name": "Robert Hunt",
        "spel": "Book of dead",
        "insats": 0.6,
        "vinst": 30
      }
    }
  ], function(err, records) {
    if (err) {
      console.error(err);
      return;
    }
    records.forEach(function(record) {
      console.log(record.get('name'));
    });
  });
}

function addItem(){
    var ul = document.getElementById("dynamic-list");
    var candidate = document.getElementById("candidate");
    var li = document.createElement("li");
    li.setAttribute('id',candidate.value);
    li.appendChild(document.createTextNode(candidate.value));
    ul.appendChild(li);
}

function removeItem(){
    var ul = document.getElementById("dynamic-list");
    var candidate = document.getElementById("candidate");
    var item = document.getElementById(candidate.value);
    ul.removeChild(item);
}


exports.addGameToBonusHunt = addGameToBonusHunt
exports.getListOfGames = getListOfGamess;
