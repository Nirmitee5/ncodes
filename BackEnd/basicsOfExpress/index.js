
// depedencies is the code written by some really smart folks which is reusable in your own codespace as well
// DO NOT PUSH YOUR NODEMODULES TO GITHUB or while sharing the code to anyother person the package.json has the dependencies listed so the person has to do npm install and it will work really fast 
const { program } = require('commander');
const fs = require("fs")

program // recicve== a file path here okay 
  .option('--count-type <type>');
program.parse(process.argv);

const options = program.opts();

if (options.countType) {
    fs.readFile(`${options.countType}`,"utf-8",function(err,data){
        if(err){
            console.log("eror");
            return;
        }
        else {
            console.log("the lenght of the data is : " + data.length);
        }
    })
}
