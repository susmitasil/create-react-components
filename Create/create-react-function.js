
var fs = require("fs");

let args = process.argv.slice(2)
console.log(args)

function createFunction(pathname, funcname) {

  let filename = "\\"+funcname+".jsx"
  let fileLoc = pathname+ filename;
  let state = {
      description: "This files was created by bot",
      type: "This is a stateful component"
}

 console.log('inside')
  dataClass = "import React, { useState } from 'react';\n\nconst "+ funcname+
  " = (props) => {\n\n\t const[description"+","+"setDescription] = useState('This files was created by bot')\n\n\t\n\treturn <>\n\t <h1>Hello "+
  funcname+"</h1>\n\t<h2>{description}</h2>\n\t<h2>Access props with {props.propname}</h2>\n</>\n\t}\n"



  if (fs.existsSync(pathname)) {
    // Do something
    console.log('exists')
}
else{
    fs.mkdir(pathname, (err) => {
        if (err) {
            return console.error(err);
        }
        console.log('Directory created successfully!');
    });
}
  fs.stat(fileLoc, function(err, stat) {
   
    if(err == null) {
        console.log('File exists');
    } else if(err.code === 'ENOENT') {
        // file does not exist
        console.log('hi')
       
        fs.writeFile(fileLoc, dataClass,  (err) => {
            if (err) throw err;
            console.log("File saved!");
          });
    } else {
        console.log('Some other error: ', err.code);
    }
});


  return;
};


createFunction(args[0], args[1])