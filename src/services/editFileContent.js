const fs = require('fs');

const editFileContent = (file, replaced, replacement) => {

fs.readFile(file, 'utf8', (err,data) => {
    if (err) {
      return console.error(err);
    }

    var result = data.replace(replaced, replacement);
  
    fs.writeFile(file, result, 'utf8', function (err) {
       if (err) return console.error(err);
    });
  });

}
module.exports = editFileContent;