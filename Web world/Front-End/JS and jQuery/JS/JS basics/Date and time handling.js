//                                  ( Date opject )

// To define a Date opject:

var x = new Date();

/* Now if we print the variable x in the console we will get the date, time and timezone
    for the moment the print command was executed, Example: */

console.log(x);

// And to specify the date in the Date object, we pass the date as parameters, Example:

/*1   2   3*/
var x = new Date(2001, 3, 29);

// In parameter 1 we put the full year number,
/* In parameter 2 we put the month number, And here the month starts from 0 to 11,
    that is: the first month of the year = 0 and second = 1 and so on */
// In parameter 3 we put the day number,

// And to specify the time also, we putting 3 other parameter, Example:

/*1   2   3 , 4   5   6*/
var x = new Date(2001, 3, 29, 04, 20, 30);

// In parameter 4 we put the hour number,    -
// In parameter 5 we put the minutes number, -    ( Note: time is like months, starting at 0 )
// In parameter 6 we put the seconds number, -

/* And we can specify the date and time in a second way,
    which is to write a single parameter of type string, Examples */

var x = new Date("2001-4-29");           // -  ( Note: the months and times of the string parameter
var x = new Date("2001-4-29 04:20:30");  // -           do not start at 0, start at 1 )


// Functions of a Date opject:

var E = new Date();

// 1- To get only the year number, use the function .getFullYear(), Examples:
E.getFullYear();
console.log(E.getFullYear());


// 2- To get only the month number, use the function .getMonth(), Examples:
E.getMonth();
console.log(E.getMonth());


// 3- To get only the day number of the month, use the function .getDate(), Examples:
E.getDate();
console.log(E.getDate());


// 4- To get only the day number of the week, use the function .getDay(), Examples:
E.getDay();
console.log(E.getDay());


// 5- To get the full date number without the clock, use the function .toLocaleDateString() or .toDateString(), Examples:
E.toLocaleDateString();
console.log(E.toLocaleDateString());
// or
E.toDateString();
console.log(E.toDateString());


// 6- To get the full date number with the full clock number in 12 format, use the function .toLocaleString(), Examples:
E.toLocaleString();
console.log(E.toLocaleString());


// 7- To get the full clock number in 12 format without the date, use the function .toLocaleTimeString(), Examples:
E.toLocaleTimeString();
console.log(E.toLocaleTimeString());


// 8- To get the hour number only, use the function .getHours(), Examples:
E.getHours();
console.log(E.getHours());


// 9- To get UNIX Timestamp seconds, use the function .getTime(), Examples:
E.getTime();
console.log(E.getTime());
    /* With UNIX Timestamp we can compare dates very accurately,
and the comparison is by using the function getTime() ,
And this function is useful for writing programs that require working with dates*/