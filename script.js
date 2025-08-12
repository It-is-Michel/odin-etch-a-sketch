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