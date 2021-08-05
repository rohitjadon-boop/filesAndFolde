let fs = require("fs");

let helpObj = require("./commands/help");
let treeObj = require("./commands/tree");
let organizeObj = require("./commands/organize");

let inputArray = process.argv.slice(2);
let cmd = inputArray[0];

let srcPath = inputArray[1];

switch (cmd) {
    case "help":
        helpObj.help();
        break;
    case "tree":
        treeObj.tree(srcPath);
        break;
    case "organize":
        organizeObj.organize(srcPath);
        break;
    default:
        console.log("👏 Wrong Command , Kindly Enter help for More Commands");
}
