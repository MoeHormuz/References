//                                 (fs module functions)

// fs means file system build-in module;

// To use the fs module and its functions, we must invoke it as follows:
const fs = require('fs');

// Often we will use the path module with the fs module in order to avoid differences between different operating systems, so we will invoke it as well
const path = require('path');


// Hint: All functions listed below have synchronous type (Sync)


/* 1- Read Directory:
    fs.readdir(path[, options], callback)
    This function reads the directory and the files in it through the path you specify for it */

/* 2- Read File:
    fs.readFile(path[, options], callback)
    This function reads the file whose path you give it */

/* 3- Create File:
    fs.writeFile(fileName, data[, options], callback)
    This function creates a new file with the name and data that you specify through the parameters, Hint: If the file name you entered already exists, its data will be deleted and replaced with the new data you put in the function */

/* 4- Update File:
    fs.appendFile(fileName, data[, options], callback)
    This function adds data to a pre-existing file without deleting the previous data, Hint: If you want to add a new line, use \n */

/* 5- Rename:
    fs.rename(oldPath, newPath, callback)
    This function changes the name of the file or folder by specifying its path */

/* 6- Delete:
    fs.unlink(path, callback)
    This function deletes the path you specify for it */

/* 7- All:
    fs.open(path, flags[, mode], callback)
    This function can replace any of the above functions by specifying the flag for it, (not preferred to use) */

/* 8- File Monitoring:
    fs.watchFile(fileName[, options], listener)
    This function listens for the file you specify for it and when any modification occurs in the file, it performs a callback function */






// Lesson 5 in Node.js course (برمجيات حسان)