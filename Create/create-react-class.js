
var fs = require("fs");

let args = process.argv.slice(2)
console.log(args)

function createClass(pathname, classname) {

  let filename = "\\"+classname+".jsx"
  let fileLoc = pathname+ filename;

 console.log('inside')
  dataClass = "import React, { Component } from 'react';\n\nexport default class "+ classname+
  " extends React.Component {\n\n\t state = {\n\tdescription: 'This files was created by bot'\n}\n\n\trender() {\n\treturn <>\n\t <h1>Hello "+classname+
  "</h1>\n\t<h2>{this.state.description}</h2>\n\t<h2>Access props with {this.props.propname}</h2>\n</>\n\t}\n}"



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

createClass(args[0], args[1])