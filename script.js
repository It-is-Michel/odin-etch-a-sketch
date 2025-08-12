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
  tile.style.aspectRatio = "1/1";
  return tile;
}

// Get the grid
const flexGrid = document.querySelector("#flex-grid");
// Set how many rows and columns
let numOfGridRows = 16;
let numOfGridColumns = 16;
// Add tiles to the grid
const flexGridTiles = addTilesToGrid(flexGrid, numOfGridRows, numOfGridColumns);