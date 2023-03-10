//                              DOM (Document Opject Model)




// 1- For access the HTML element by id, use the function .getElementById() , Example:

    let variable1 = document.getElementById("id-Name");

  // And if we print the variable in the console, we'll get one element, Example:

    console.log(variable1);

  /* And to change the content of the HTML element we fetched:
     We write the name of the variable that we put the HTML element inside,
     then we write .innerHTML = "Here we put the new content" , Examples*/

    variable1.innerHTM = "Demo text";

    variable1.innerHTM = "<u><i>Demo text</i></u>";

    variable1.innerHTM = "<big style = 'color: red'>Demo text</big>";



// 2- For access the HTML elements by class name, use the function .getElementsByClassName() , Example:

    let variable2 = document.getElementsByClassName("class-Name");

/*  And if we print the variable in the console,
    We will get a collection of elements in the form of an array, Example: */

    console.log(variable2);

  /* And to change the content of the HTML elements we fetched:
     We write the name of the variable in which we put the HTML elements,
     then we put the parentheses of an array and put the index of the element whose content we want to change,
     then we write .innerHTML = "here we put the new content" , Examples:*/

    variable2[0].innerHTML = "Demo text";

    variable2[0].innerHTML = "<u><i>Demo text</i></u>";

    variable2[0].innerHTML = "<big style = 'color: red'>Demo text</big>";



// 3- For access the HTML elements by tag name, use the function .getElementsByTagName() , Example:

    let variable3 = document.getElementsByTagName("h1");

/*  And if we print the variable in the console,
    We will get a collection of elements in the form of an array, Example: */

   console.log(variable3);

  /* And to change the content of the HTML elements we fetched:
     We write the name of the variable in which we put the HTML elements,
     then we put the parentheses of an array and put the index of the element whose content we want to change,
     then we write .innerHTML = "here we put the new content" , Examples:*/

    variable3[1].innerHTML = "Demo text";

    variable3[1].innerHTML = "<u><i>Demo text</i></u>";

    variable3[1].innerHTML = "<big style = 'color: red'>Demo text</big>";

    






// Lesson 12 in JavaScript basics