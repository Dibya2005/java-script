
// Create a new paragraph element
var paragraph = document.createElement("p");

// Create text node
var text = document.createTextNode("This is a dynamically added paragraph.");

// Append text node to paragraph element
paragraph.appendChild(text);

// Append paragraph to the body element
document.body.appendChild(paragraph);