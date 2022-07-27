import fs from "fs";

fs.writeFile("my-file.txt", "Hey there!", function (err) {
  if (err) {
    return console.log(err);
  }
  console.log("The file was saved!");
});

// Or
fs.writeFileSync("/tmp/test-sync", "Hey there!");
