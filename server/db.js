const sqlite3 = require('sqlite3');
const { open } = require('sqlite');
const path = require('path');

const openDB = async function() {
  return open({
    filename: path.resolve(__dirname,'../chinook.db'),
    driver: sqlite3.Database
  });
}


module.exports = {openDB} ;