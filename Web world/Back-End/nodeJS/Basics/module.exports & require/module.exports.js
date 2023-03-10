function carName(car) {
    console.log("My dream car is " + car)
};

function colorName(color) {
    console.log("My favorite color is " + color)
};

// There are two methods to make module.exports :

/* Method one:
    Type module.exports. Then put a name, then type = and put the name of the function
     or variable you want to export,
    Examples */

module.exports.dreamCar = carName;

module.exports.favoriteColor = colorName;

/* Hint:
    The name you will put after exports.
     it is the one you will use in place of the name of the function or variable */


/* Method two: 
    The second method is called json and it is as follows:
    Type module.exports = then open the curly braces and in it type the name of key
     and then the name of the function or variable you want to export,
     as if you were writing json data,
    Example: */

module.exports = {
    "dreamCar": carName,
    "favoriteColor": colorName
};

/* Hint:
    The name of the key you will put,
     it is the one you will use in place of the name of the function or variable */

     
//------------------------------------------------------------------------------------------------


// The function can also be created inside the module.exports , Examples:

// method one :

module.exports.dreamCar = function (car) {
    console.log("My dream car is " + car)
};

module.exports.favoriteColor = function (color) {
    console.log("My favorite color is " + color)
};

// method two :

module.exports = {
    "dreamCar": function (car) {
        console.log("My dream car is " + car)
    },
    "favoriteColor": function (color) {
        console.log("My favorite color is " + color)
    }
};