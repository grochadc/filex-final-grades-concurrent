const parseCSV = require("./parseCSV");
const readline = require("readline");
const fs = require("fs");
const path = require("path");

const finalData = [];

const rl = readline.createInterface({
  input: fs.createReadStream(path.join(__dirname, "grades.csv"))
});

rl.on("line", line => finalData.push(parseCSV(line)));

rl.on("close", () =>
  fs.writeFile(
    path.join(__dirname, "../grades.json"),
    JSON.stringify(finalData),
    () => console.log("File written")
  )
);
