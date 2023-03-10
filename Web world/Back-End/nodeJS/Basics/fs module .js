// fs Module:

const fs = require('fs')


let messages = ["message1", "message2", "message3", "message4",];
const content = messages.join(", ")

fs.writeFile('./newTst.txt', content, 'utf-8', err => {                  // This method creates a new file, and if the file exists, it replaces it.
    if (err) console.log(err);
    else console.log("File written");
});


let messages2 = ["message5", "message6", "message7", "message8",];
const content2 = "\n" + messages2.join(", ")

fs.appendFile('./newTst.txt', content2, 'utf-8', err => {               // This method creates a new file, and if the file exists, it adds to it.
    if (err) console.log(err);
    else console.log("File appended");
});


fs.rename('./newTst.txt', 'msgs.txt', err => {                          // This method renames the file.
    if (err) console.log(err);
    else console.log("Renamed");
})


fs.readFile('./msgs.txt', 'utf-8', (err, data) => {                     // This method reads files.
    if (err) console.log(err);
    else console.log(data);
})


fs.unlink('./msgs.txt', err => {                                        // This method deletes the file.
    if (err) console.log(err);
    else console.log("File Deleted");
})