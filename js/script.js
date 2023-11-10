//Selecting body el
let bodyEl = document.querySelector("body");
//Changing bgcolor to black
bodyEl.style.backgroundColor = "black";

//creating main element
let mainEl = document.createElement("main");
document.body.appendChild(mainEl);
// selecting main container
let main = document.querySelector("main");
// Setting width n height
main.style.width = "800px";
main.style.height = "800px";
//Centering
main.style.margin = "auto";
// Flex with wrap for 4 divs inside
main.style.display = "flex";
main.style.flexWrap = "wrap";

//Parentbox Width and height
let boxWidthAndHeight = "50%";
//first number of HSL color thingie
let backgroundColorNumber = 0;

let outerboxes = 4;
let innerBoxes = 9;

// Create 4 parent divs with classname parents
for (let i = 0; i < outerboxes; i++) {
  let parents = document.createElement("div");
  parents.className = "parent";
  parents.style.width = boxWidthAndHeight;
  parents.style.height = boxWidthAndHeight;
  parents.style.position = "relative";
  // different background for each box +100 each
  parents.style.backgroundColor = `hsl(${backgroundColorNumber},70%,80%)`;

  main.appendChild(parents);

  // Selecting all parent divs
  let allParents = document.querySelectorAll(".parent");

  //Resets innerbox size to 90 everytime innerbox == 9
  let innerBoxWidthHeight = 90;

  // Background color
  let innerBoxbackgroundColorNumber = backgroundColorNumber;

  // For loop for creating 9 children
  for (let j = 0; j < innerBoxes; j++) {
    //creating child div
    let child = document.createElement("div");

    // css
    child.className = "child";
    child.style.height = `${innerBoxWidthHeight}%`;
    child.style.width = `${innerBoxWidthHeight}%`;
    child.style.position = "absolute";

    // color for innerboxes
    innerBoxbackgroundColorNumber += 36;
    child.style.backgroundColor = `hsl(${innerBoxbackgroundColorNumber},70%,80%)`;

    //checking what box is current box
    i == 1 || i == 2 
    ? (child.style.right = "0px") 
    : (child.style.left = "0px");

    //Checking if backgroundColorNumbers is bigger than 360
    innerBoxbackgroundColorNumber > 360
      ? (innerBoxbackgroundColorNumber = innerBoxbackgroundColorNumber - 360)
      : (innerBoxbackgroundColorNumber = innerBoxbackgroundColorNumber);

    // Instead of z-index,  im lazy
    innerBoxWidthHeight -= 10;
    allParents[i].appendChild(child);
  }

    // Backgroundcolor for outerboxes hsl +100 
  backgroundColorNumber += 100;
}


