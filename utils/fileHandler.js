const fs = require("fs");
const path = "./data.json";

function readData() {
  const data = fs.readFileSync(path);
  return JSON.parse(data);
}

function writeData(data) {
  fs.writeFileSync(path, JSON.stringify(data, null, 2));
}

module.exports = { readData, writeData };
