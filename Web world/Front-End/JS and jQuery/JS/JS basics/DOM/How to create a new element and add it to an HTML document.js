
// An example of how to create a new HTML element:

const variable1 = document.createElement("h3");

// An example of how to add content to a new HTML element:

variable1.innerHTML = "<span style = 'color:red'>This the content of the newly created element</span>";

// An example of how to add a new HTML element to an HTML document(page):

let variable2 = document.getElementById("id-Name");        // <---- Here we brought the parent element in which we want to put the new element,
variable2.appendChild(variable1);                    // <---- And here we added the new element inside the element we brought,










// Lesson 12 in JavaScript basics