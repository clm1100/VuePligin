const fs = require("fs");
const path = require("path");
fs.readdir("./img",(err,arr)=>{
    arr = arr.filter(e=>{
        return path.extname(e)===".jpg";
    });
    // console
    arr.forEach((e ,i)=> {
        fs.copyFile(path.join(__dirname,'img',e),path.join(__dirname,'image',`${i+1+path.extname(e)}`),(err)=>{
            console.log(err);
        })
    });
})