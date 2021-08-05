// let fs = require("fs");
// let path = require("path");

// function tree(srcPath) {
//     console.log("tree Implemented");

//     if (srcPath === undefined)
//         srcPath = process.cwd();


//     let content = fs.readdirSync(srcPath);
//     let parentFolderName = path.basename(srcPath);

//     let str = parentFolderName + "|----\n";
//     for (let i = 0; i < content.length; i++) {
//         str = str + "\n\t\t|--------------" + content[i];
//     }

//     console.log(str);
// }


let fs = require("fs");
let path = require("path");
let fullPath="";
function tree(srcPath) {
    console.log("tree Implemented");

    if (srcPath === undefined)
        srcPath = process.cwd();


    let parentFolderName=path.basename(srcPath);
    getFullPath(srcPath, parentFolderName);
    // console.log(getPath);
    console.log(fullPath);

    // console.log(str);
}

function getFullPath(srcPath, parentFolderName){
  let state=fs.lstatSync(srcPath);
   if(state.isFile()){
   let basename=path.basename(srcPath);
   fullPath+="├──"+basename+"\n\t";
   return;
  }
  else{
      let getItemsList=fs.readdirSync(srcPath);
      let basename=path.basename(srcPath);
       fullPath+=basename+"\n\t"+"└── \n  ";
      for(let i=0;i<getItemsList.length;i++){
         
          let childPath=path.join(srcPath,getItemsList[i]);
          
          getFullPath(childPath,basename);
      }
  }




}















module.exports = {
    tree: tree
}