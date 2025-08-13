// Create and add tiles to a grid
function addTilesToGrid(grid, howManyRows, howManyColumns) {
  // Set tile size in terms of parent's size
  const tileSize = `${100 / howManyRows}%`;
  // Calculate how many tiles the grid has
  const howManyTiles = howManyRows * howManyColumns;
  
  // Iterate (howManyRows * howManyColumns) times
  for (let i = 0; i < howManyTiles; i++) {
    // Create a tile
    const tile = createTile(tileSize);
    // Add tile to grid    
    grid.appendChild(tile);
  }

  // Return tiles NodeList
  return grid.children;
}

function createTile(size) {
  // Create an element for the tile
  const tile = document.createElement("div");
  // add a css class
  tile.classList.add("tile");
  // and set the size
  tile.style.width = size;
  // paint black on hover
  const paintTileBlack = (tile) => tile.style.backgroundColor = "black"; 
  tile.addEventListener("mouseover", event => paintTileBlack(event.target));
  return tile;
}

// Get the grid
const flexGrid = document.querySelector("#grid");
// Set how many rows and columns
let numOfGridRows = 16;
let numOfGridColumns = 16;
// Add tiles to the grid
const flexGridTiles = addTilesToGrid(flexGrid, numOfGridRows, numOfGridColumns);

// Modify the rows and columns of a grid
function modifyGrid(grid, howManyRows, howManyColumns) {
  console.log(grid, howManyRows, howManyColumns)
  // Get the tiles of the grid
  let gridTiles = Array.from(grid.children);
  // Remove each child
  for (let child of gridTiles) {
    child.remove()
  };
  // Fill the grid with the new size
  addTilesToGrid(grid, howManyRows, howManyColumns);
}

// Add a button to set the grid size
// Get the button
const setGridSizeButton = document.querySelector("button#set-grid-size");
// when it's clicked, ask user the new size
setGridSizeButton.addEventListener("click", () => {
  // Ask user for a valid number between the limits
  function getNumberFromUser(min, max, message) {
    let userInput;
    while (true) {
      userInput = prompt(message);
      // Valid input
      let isNumber = !isNaN(userInput)
      let isInRange = userInput >= 1 && userInput <= 100;
      let isValid = isNumber && isInRange;
      if (isValid) {
        // Return valid input
        userInput = Number(userInput);
        return userInput;
      } else if (userInput === null) {
        // Return null
        return userInput;
      } else {
        // Ask user to type in a valid input
        alert(`${userInput} is not valid. Please, type in a number between ${min} and ${max} (inclusive).`);
      };
    };
  };
  // Ask user for the new size of the grid
  const howManyRows = getNumberFromUser(1, 100, "How many rows?");
  if (howManyRows === null) return;
  const howManyColumns = getNumberFromUser(1, 100, "How many columns?");
  if (howManyColumns === null) return;
  // Modify the grid to the user's specification
  modifyGrid(flexGrid, howManyRows, howManyColumns);
})