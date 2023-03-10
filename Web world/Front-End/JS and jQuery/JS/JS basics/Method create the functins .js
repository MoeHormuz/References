//                                  functions

/* There are two types of functions, one that executes commands,
    and one that executes commands and returns them to us */
// Examples:


// type 1:

function sayHello() {
    let userName = document.getElementById("txtName").value;
    alert("Welcome " + userName);
}



// type 2:

function sum(x, y) {
    return x + y;
}

// Example of using the type 2 function:

var firstNumber = 50,
    secondNumber = 100;

console.log(sum(firstNumber, secondNumber));






// Lesson 11 in JavaScript basics