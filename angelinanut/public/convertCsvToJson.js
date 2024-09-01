import csv from 'csvtojson';
import fetch from 'node-fetch';
import fs from 'fs';

async function fetchAndConvertCSV() {
  const response = await fetch('https://docs.google.com/spreadsheets/d/1D09MsBTG5uTz8JeQOK78pisysWk8YOWWQUxBRUxhtCU/pub?gid=0&single=true&output=csv');
  const csvData = await response.text();

  const jsonArray = await csv().fromString(csvData);
  
  fs.writeFileSync('products.json', JSON.stringify(jsonArray, null, 2));
}

// node convertCsvToJson.js 

fetchAndConvertCSV();
