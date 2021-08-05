
let fs=require("fs");
let path=require("path");

let types={
    media:["mp3","mp4","mkv"],
    archives:["7z","rar","zip","xz"],
    documents:["doc","pdf","xml","txt","docx","rtf"],
    image:["jpeg","jpg","png"],
}


function organize(srcPath){
    console.log("Organize Implemented");

    let getItems=fs.readdirSync(srcPath);
    let destPath=path.join(srcPath,"organized_folder");
    if(fs.existsSync(destPath)==false)
    fs.mkdirSync(destPath);

    for(let i=0;i<getItems.length;i++){
        let folderName=getFolderName(getItems[i]);
        // console.log(getItems[i],"will be copied to",folderName);
        // let completePath=path.join(srcPath,getItems[i],);
       let modulePath = createFolder(destPath,folderName);
       modulePath=path.join(modulePath,getItems[i]);
       let join=path.join(srcPath,getItems[i]);
       if(fs.lstatSync(join).isFile()){
        console.log(getItems[i],"being copied to",folderName); 
        fs.copyFileSync(join,modulePath);
        fs.unlinkSync(join);
    }
    }

}

function getFolderName(fileName){
    let extname=path.extname(fileName);
    extname=extname.slice(1);
    
    for(let key in types){
        let type=types[key];
        if(type.includes(extname.toLowerCase())||type.includes(extname.toUpperCase())){
            return key;
        }
    }
    return "others";
}

function createFolder(destPath,folderName){
let completePath=path.join(destPath,folderName);
if(fs.existsSync(completePath)==false){
    fs.mkdirSync(completePath);
}
return completePath;
}

module.exports={
    organize:organize
}


