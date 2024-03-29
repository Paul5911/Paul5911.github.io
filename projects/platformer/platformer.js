$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }
    //create walls
    createPlatform( -50, -50, canvas.width + 100, 50); //top
    createPlatform( -50, canvas.height  -10, canvas.width + 100, 200); //right
    createPlatform( -50, -50, -50, canvas.height + 500); //bottom
    createPlatform(canvas.width, -50, -50, canvas.height + 100);
  

    /**
     * Uncomment the loops below to add a "grid" to your platformer game's screen
     * The grid will place both horizontal and vertical platforms incremented 100 pixels apart
     * This can give you a better idea of where to create new platforms
     * Comment the lines out to remove the grid
     */

    // for (let i = 100; i < canvas.width; i += 100) {
    //   createPlatform(i, canvas.height, -1, -canvas.height);
    // }
    // for (let i = 100; i < canvas.height; i += 100) {
    //   createPlatform(canvas.width, i, -canvas.width, -1);
    // }

    /////////////////////////////////////////////////
    //////////ONLY CHANGE BELOW THIS POINT///////////
    /////////////////////////////////////////////////
createPlatform(200, 300, 300, 10); //
createPlatform(30, 210, 200, 10); // 
createPlatform(500, 200, 210, 10); // 
createPlatform(900, 200, 300, 10); //
createPlatform(1200, 300, 100, 10); //
createPlatform(30, 400, 1100, 10); //
createPlatform(1200, 400, 300, 10); //
    // TODO 1
    // Create platforms
    // You must decide the x position, y position, width, and height of the platforms
    // example usage: createPlatform(x,y,width,height)



    createCollectable("grace", 300, 200); // 
    createCollectable("max", 600, 100); // 
    createCollectable("max", 1000, 100); // 
    createCollectable("grace", 300, 200); // 
    createCollectable("max", 500, 300); // 
    createCollectable("grace", 1220, 200); // 
    createCollectable("grace", 900, 300); // 
    createCollectable("max", 600, 600); //
    // TODO 2
    // Create collectables
    // You must decide on the collectable type, the x position, the y position, the gravity, and the bounce strength
    // Your collectable choices are 'database' 'diamond' 'grace' 'kennedi' 'max' and 'steve'; more can be added if you wish
    // example usage: createCollectable(type, x, y, gravity, bounce)



    createCannon("left", 300, 1200); // 
    createCannon("top", 1300, 1200); //
    createCannon("left", 610, 1200); //
    // TODO 3
    // Create cannons
    // You must decide the wall you want the cannon on, the position on the wall, and the time between shots in milliseconds
    // Your wall choices are: 'top' 'left' 'right' and 'bottom'
    // example usage: createCannon(side, position, delay, width, height)




    /////////////////////////////////////////////////
    //////////ONLY CHANGE ABOVE THIS POINT///////////
    ///////////////////////////////////////////////// 
  }

  registerSetup(setup);
});
