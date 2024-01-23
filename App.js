// console.log(__dirname);

// setInterval(() => {
//   console.log("Hello Nodejs");
// }, 1000);
// const names = require("./3-names");

// const sayHi = require("./4-moduls");
// require("./5-sum");
// sayHi("Anshuman Singh");
// sayHi(names.tanuj);
// sayHi(names.shakti);

const { log } = require("console");
const os = require("os");
const path = require("path");

const { readFileSync, writeFileSync } = require("fs");
const { readFile, writeFile } = require("fs");

//info of current user

// const user = os.userInfo();
// console.log(user);
//System uptime

// console.log(`The system uptime is ${os.uptime()}`);

// const currentOS = {
//   name: os.type(),
//   release: os.release(),
//   arch: os.arch(),
//   totalMem: os.totalmem(),
//   freeMem: os.freemem(),
// };
// console.log(currentOS);

// console.log(path.sep);
// const filePath = path.join("/content", "subfolder", "text.txt");
// console.log(filePath);

// const base = path.basename(filePath);
// console.log(base);

//Read File System with sync

// const first = readFileSync("./content/first.txt", "utf8");
// const second = readFileSync("./content/Second.txt", "utf8");

// writeFileSync(
//   "./content/result.txt",
//   `Here is the Result : ${first}, ${second}`,
//   { flag: "a" }
// );

// console.log(first, second);

//Read File System with without sync

// readFile("./content/first.txt", "utf8", (err, result) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log(result);
// });
