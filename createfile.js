const fs = require("fs");

fs.writeFile("hello.txt", "Hello Deep", (err) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log("File created successfully!");
});