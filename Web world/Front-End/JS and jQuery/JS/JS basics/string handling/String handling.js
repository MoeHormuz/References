var academy = "hsoub";

// for Get character by index  (In other words, Get the character by its index number):
console.log(academy.charAt(3)); // will print 'u'
console.log(academy[3]); // will print 'u'

// for Get index of text (In other words, To see where the index of the selected text starts):
console.log(academy.indexOf("oub")); // will print '2'

// for Get string length (In other words, To see the number of characters or numbers for the values):
console.log(academy.length); // This function prints integer, not index

// for Extract a part of string:
console.log(academy.slice(1, 4)); // will print 'sou'
console.log(academy.substring(1, 4)); // will print 'sou'
console.log(academy.substr(1, 3)); // will print 'sou'

// for Upper & Lower case:
console.log(academy.toUpperCase()); // will print 'HSOUB'
console.log(academy.toLowerCase()); // will print 'hsoub'

// for Replace string:
console.log(academy.replace("hsoub", "hsoub academy")); // will print 'hsoub academy'


// Lesson 7 in JavaScript basics