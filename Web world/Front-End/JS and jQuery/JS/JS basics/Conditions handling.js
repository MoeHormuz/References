//                               Conditions handling


// 1- Examples of conditional structure using if:

var age = 25,
    result = 14,
    attendance = 18;

if (age >= 20) {
    console.log("You are accepted");
}
///////////////////////////////////////////
if (result >= 10) {
    console.log("You succeed");
} else {
    console.log("You failed");
}
///////////////////////////////////////////
if (age >= 20 && age <= 50) {
    if (result >= 15) {
        console.log("You are accepted");
    } else {
        console.log("You are not accepted");
    }
} else {
    console.log("You are not accepted");
}
///////////////////////////////////////////
if (result >= 10 && attendance >= 15) {
    console.log("You succeed");
} else {
    console.log("You failed");
}
////////////////////////////////////////////
if (result >= 15 || attendance == 20) {
    console.log("You succeed");
} else {
    console.log("You failed");
}


// 2- Example of conitional structure using switch:

var x = 20,
    y = 10;

var operator = '/';

switch (operator) {
    case '+':
        console.log(x + y);
        break;
    case '-':
        console.log(x - y);
        break;
    case '*':
        console.log(x * y);
        break;
    case '/':
        console.log(x / y);
        break;
}




// Lesson 9 in JavaScript basics