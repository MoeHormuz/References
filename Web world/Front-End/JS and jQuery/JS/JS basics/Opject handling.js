// Example of an object definition method:

let dreamCar = {
    name: 'Pontiac GTO',
    engine: 'LS2',
    'Is V8': true,
    year: 2006
};

/* this is the object, whose name is dreamCar,
    and inside the curly braces are the attributes of the object. */

//------------------------------------------------------------------------------------------

// To access the object attributes, there are two methods: 

/* 1- The first method is called Dot notation,
       which is to type in the console the name of the object and the name of the required attribute, */
// Example: 

console.log(dreamCar.engine);

// this will print (LS2) in the console, which is the value of the engine attribute,

/* 2- The second method is called bracket notation, and it is similar to the first method,
       but the difference is that we enter the name of the attribute in square brackets,
       and this method is used if there is a space in the attribute name, */
// Example:

console.log(dreamCar['Is V8']);

// this will print (true) in the console, which is the value of the 'Is V8' attribute,

//--------------------------------------------------------------------------------------------

// An example of how to programmatically change the value of a certain attribute:

dreamCar.engine = 'LS1';

// Now if you print the engine attribute in the console you will get the new value LS1.