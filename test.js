window.testMod = {};

////////////////////////////////////////////////////////////////////
// RUNCODEBEFORE
////////////////////////////////////////////////////////////////////

window.testMod.runCodeBefore = function() {
  this.pixelList = [];
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
