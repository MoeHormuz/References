//                                  loops



// 1- (for) loop:

/* The (for) loop consists of 3 main sections, these sections are separated by a semicolon (;),
    in the first section we define the loop variable,
    in the second section we define the condition,
    as long as the condition is met, the loop will repeat,
    and in the third section we modify the value of the variable we defined in the first section,
    until change with each iteration To reach the end of the condition for the loop to stop */
//  Examples:

for (let i = 0; i < 10; i++) {
    console.log(i);
}

for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) console.log(i);
}


for (let i = 10; i > 0; i--) {
    console.log(i);
}

// We can replace the variable let with the variable var. Example:

for (var i = 0; i < 10; i++) {
    console.log(i);
}

// And we can dispense with typing (let , var) because they are defined by default. Example:

for (i = 0; i < 10; i++) {
    console.log(i);
}

// And we can dispense with the corrugated brackets if we have one implementation process. Example:

for (i = 0; i < 10; i++) console.log(i);




// 2- (while) loop:

/* The (while) loop consists of one main section,
    which is a condition that must be met in order for the loop to continue,
    the while loop does the same thing as the for loop,
    but the difference between it and the (for) loop is:
    1- through which we can create a continuous loop, that is, it has no end,
    2- it receives a variable from outside it because there is no variable inside it */
// Examples:

let i = 0;

while (i < 10) {
    console.log(i);
    i++;
}

let i2 = 10;

while (i2 > 0) {
    console.log(i2);
    i2--;
}

/* And to make the loop continuous, that is, without end,
    we remove the last condition that changes the value of the variable
    and makes it reach the end of the first condition, until the loop stops, */
// Example:

// Before removing the condition:

while (i < 10) {
    console.log(i);
    i++            // <-- This is the condition that if we remove it, the loop will become infinite,
}

// After removing the condition:

while (i < 10) {
    console.log(i);
}




// 3- (do while) loop:

/* The (do) loop is the same as the (while) loop, but the difference between them is
    that (do) starts executing commands first and then checks the condition,
    while (while) checks the condition first and then executes the commands,
    This means that (do) commands will be executed once if the condition is not true,
    while (while) commands will not be executed at all if the condition is not true, */
// Example:

let i3 = 0;

do {
    console.log(i3);
    i3++;
} while (i3 < 10);






// Lesson 10 in javaScript basics