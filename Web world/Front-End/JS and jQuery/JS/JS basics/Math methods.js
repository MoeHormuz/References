/*
                                    Math methods




1- round:
    It convert the decimal number to its nearest integer.
    Syntax: Math.round(x);
    Examples:
*/
var r0 = Math.round(8.5); // will print 9
console.log(r0);

var r1 = Math.round(8.4); // will print 8
console.log(r1);

var r2 = Math.round(4.0001); // will print 4
console.log(r2);

var r3 = Math.round(-6.8); // will print -7
console.log(r3);

var r4 = Math.round(10 - 1.2); // will print 9 , Here the output is 8.8 but the round() method will make it 9
console.log(r4);

/*--------------------------------------------------------------------------------------------------

2- ceil:     
    It make the fractions increase until they become an integer.
    Syntax: Math.ceil(x); 
    Examples:
*/
var c0 = Math.ceil(8.5); // will print 9
console.log(c0);

var c1 = Math.ceil(8.4); // will print 9
console.log(c1);

var c2 = Math.ceil(4.0001); // will print 5
console.log(c2);

var c3 = Math.ceil(-6.8); // will print -6
console.log(c3);

var c4 = Math.ceil(10 - 1.2); // will print 9 , Here the output is 8.8 but the ceil() method will make it 9
console.log(c4);

/*--------------------------------------------------------------------------------------------------

3- floor:
    It make the fractions decrease until they become an integer (it remove fractions).
    Syntax: Math.floor(x);
    Examples:
*/
var f0 = Math.floor(8.5); // will print 8
console.log(f0);

var f1 = Math.floor(8.4); // will print 8
console.log(f1);

var f2 = Math.floor(4.0001); // will print 4
console.log(f2);

var f3 = Math.floor(-6.8); // will print -7
console.log(f3);

var f4 = Math.floor(10 - 1.2); // will print 8 , Here the output is 8.8 but the floor() method will make it 9
console.log(f4);

/*--------------------------------------------------------------------------------------------------

4- max:
    It extracts the highest value from the values.
    Syntax: Math.max(val, val, val, val, val);
    Example:
*/
var max = Math.max(10, 5, 99, -50, 99.50, -100); // will print 99.5 (Because it does not recognize zeros of fractions)
console.log(max);

/*--------------------------------------------------------------------------------------------------

5- min:
    It extracts the lowest value from the values.
    Syntax: Math.min(val, val, val, val, val);
    Example:
*/
var min = Math.min(10, 5, 99, -50, 99.50, -100); // will print -100
console.log(min);

/*--------------------------------------------------------------------------------------------------

6- random:
    It brings a random number from 0 to 0.9999999999999999.
    Syntax: Math.random();
    Examples:
*/
var ra0 = Math.random();
console.log(ra0); // Here printed 0.7579203818172862

var ra1 = Math.random();
console.log(ra1); // And here printed 0.3587859172748047

var ra2 = Math.random(),
    myPattern = 10;
console.log(Math.floor((ra2 * myPattern) + 1)); /* In this example, we put the floor() method to remove the fractions,
                                                        and we put the random() method inside it to choose a random number from 0 to 0.9999999999999999,
                                                        and we multiply the number by 10 to get the random number from 0 to 9,
                                                        and then we added 1 to the result to make the final result a random number from 1 to 10. */

/* And to make Range between Two numbers from min to max:
var z = Math.random();
console.log(     ( z * ( max - min ) )     + min ); */

// Example to make Range from 5 (min) to 10 (max): 
var z = Math.random();
console.log((z * (10 - 5)) + 5);

/*--------------------------------------------------------------------------------------------------

7- sqrt:
    It returns the square root for number.
    Syntax: Math.sqrt(x):
    Examples:
*/
var s0 = Math.sqrt(9); // will print 3
console.log(s0);

var s1 = Math.sqrt(64); // will print 8
console.log(s1);