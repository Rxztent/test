window.testMod = {};

////////////////////////////////////////////////////////////////////
// RUNCODEBEFORE
////////////////////////////////////////////////////////////////////

window.testMod.runCodeBefore = function() {
  if (window.snakeGame) {
    this.currentBoardWidth = 17;
    this.currentBoardHeight = 15;
    this.pixelList = [];

    document.addEventListener('keydown', function(e) {
      if (e.key === 'e' || e.key === 'E') {
        // Use level editor's function to place an apple randomly
        placeRandomApple();
      }
    });
  } else {
    console.error('snakeGame is undefined. Make sure the game is properly loaded.');
  }
}

////////////////////////////////////////////////////////////////////
// ALTERSNAKECODE
////////////////////////////////////////////////////////////////////

window.testMod.alterSnakeCode = function(code) {
  // You can modify the game code here if needed
  return code;
}

////////////////////////////////////////////////////////////////////
// RUNCODEAFTER
////////////////////////////////////////////////////////////////////

window.testMod.runCodeAfter = function() {
  // Add any code that should run after the game code
}

// Function to place an apple randomly using the level editor code
function placeRandomApple() {
  // Access the level editor's pixelList array
  const levelEditorPixelList = customPresetManager.pixelList;

  // Get the board dimensions
  const boardWidth = customPresetManager.currentBoardWidth;
  const boardHeight = customPresetManager.currentBoardHeight;

  // Generate random coordinates within the board dimensions
  const randomX = Math.floor(Math.random() * boardWidth);
  const randomY = Math.floor(Math.random() * boardHeight);

  // Add an apple to the level editor's pixelList
  levelEditorPixelList.push({
    x: randomX,
    y: randomY,
    category: 'apple',
    type: 0
  });

  // Redraw the level editor canvas
  customPresetManager.draw();
}
