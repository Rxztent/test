window.testMod = {};

////////////////////////////////////////////////////////////////////
// RUNCODEBEFORE
////////////////////////////////////////////////////////////////////

window.testMod.runCodeBefore = function() {
  // Check if snakeGame is defined
  if (window.snakeGame) {
    // Initialize pixelList if not already defined
    window.snakeGame.pixelList = window.snakeGame.pixelList || [];

    document.addEventListener('keydown', function(e) {
      if (e.key === 'e' || e.key === 'E') {
        // Spawn an apple
        window.snakeGame.pixelList.push({
          x: Math.floor(window.snakeGame.currentBoardWidth * 3 / 4),
          y: Math.floor(window.snakeGame.currentBoardHeight / 2),
          category: 'apple',
          type: 0
        });
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
