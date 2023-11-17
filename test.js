window.testMod = {};

////////////////////////////////////////////////////////////////////
// RUNCODEBEFORE
////////////////////////////////////////////////////////////////////

window.testMod.runCodeBefore = function() {
  // Check if snakeGame is defined
  if (window.snakeGame) {
    this.currentBoardWidth = 17;
    this.currentBoardHeight = 15;
    this.pixelList = [];

    document.addEventListener('keydown', function(e) {
      if (e.key === 'e' || e.key === 'E') {
        // Spawn an apple at a random position on the board
        const randomX = Math.floor(Math.random() * window.testMod.currentBoardWidth);
        const randomY = Math.floor(Math.random() * window.testMod.currentBoardHeight);

        window.snakeGame.pixelList.push({
          x: randomX,
          y: randomY,
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
