/* * * * * * * * * * * * * * * *
 * BOXER GAME                  *
 * Created by  John Hearn      *
 *             Max Jacobson    *
 *             Doug Popadince  *
 * CF201       Fall 2015       *
 * * * * * * * * * * * * * * * */

var mobile = false;
if ( mobile ) {
    var cellWidth = 16;
} else {
    var cellWidth = 32;
}

var listenToKeystrokes = true;

var wallURL = "img/RedBrick.png";
var floorURL = "img/FloorTile.png";
var crateURL = "img/WoodenCrate.png";
var crateOnDotURL = "img/WoodenCrateOnDot.png"
var dotsURL  = "img/DotTile.png";
var spriteURL = "img/Sprite.png";

// We want our coordinates to be 4-digit strings, so
// we need to pad single digits with a leading zero.
var pad = function (num, size) {
    var s = num+"";
    while (s.length < size) s = "0" + s;
    return s;
}


function User() {
    this.name;
    this.currentLevel;
    this.levelScores = { easy: [ ], hard: [ ] };
    this.difficulty = "easy";

    this.saveUserData = function() {
	localStorage.Name = this.username;
	localStorage.Level = this.currentLevel;
	localStorage.Scores = this.levelScores;
	localStorage.Difficulty = this.difficulty;
    }

    this.loadUserData = function() {
	this.name = localStorage.Name;
	this.currentLevel = localStorage.Level
    }
    
    this.promptForUserData = function() {
	this.name = prompt("What is your name?");
	this.currentLevel = 0;
	this.saveUserData();
    }

    this.init = function() {
	if (localStorage.Name) {
	    this.loadUserData();
	} else {
	    this.promptForUserData();
	}
    }
}

function Coord(tileType, tileURL) {
    this.$div = $( '<div></div>' );
    this.$img = $( '<img></img>' );
    this.tile = tileType;
    this.$img.attr( 'src', tileURL );
    this.$div.append( this.$img );
    this.hasCrate = false;

    this.isADot = function() {
	if ( this.tile == "dot" ) {
	    return true;
	} else {
	    return false;
	}
    }
}

function Crate( xy ) {
    this.x = xy[0] * cellWidth;
    this.y = xy[1] * cellWidth;
    this.onDot = false;
    this.$crateImg = $('<img></img>').attr('src', crateURL );
}

function Sprite( xy ) {
    this.x = xy[0] * cellWidth;
    this.y = xy[1] * cellWidth;
    this.$img = $('<img></img>').attr('src', spriteURL );
    this.stepCount = 0;
}

function GameBoard() {
    this.winCondition = false;
    this.coordinates = [];
    this.crates = [];

    this.$canvasJQ = $('<canvas></canvas>');
    this.canvas = this.$canvasJQ[0];
    this.context = this.canvas.getContext("2d");

    	
    this.$elementJQ = $('<section></section>').attr( 'id', "container" );
    this.element = this.$elementJQ[0];
    this.element.style.position = "absolute";
    
    /* * * * * * * * * * * * * * * *
     * * * * Member Methods  * * * *
     * * * * * * * * * * * * * * * */
    this.clearTheBoard = function() {
	for ( var ii = 0; ii < this.coordinates.length; ii++ ) {
	    console.log("this is happening");
	    delete this.coordinates[ii];
	}
	this.coordinates = [];
	for ( var ii = 0; ii < this.crates.length; ii++ ) {
	    delete this.crates[ii];
	}
	this.crates = [];
	delete this.sprite;
	this.$elementJQ.empty();
	this.winCondition = false;
    }
    
    
    // Chrome needs me to access parameter arrays this way.
    this.updateCell = function( xy, tileType, tileURL, crateStatus) {
	this.coordinates[ xy[0] ][ xy[1] ].tile = tileType;
	this.coordinates[ xy[0] ][ xy[1] ].$img.attr( 'src', tileURL );
	this.coordinates[ xy[0] ][ xy[1] ].hasCrate = crateStatus;

    }

    this.init = function( levelData ) {
	this.boardData = levelData;
	this.boardDimensionInPixels = this.boardData.dimension * cellWidth;
	this.canvas.width = this.boardDimensionInPixels;
	this.canvas.height = this.boardDimensionInPixels;
	this.canvas.style.position = "absolute";
	this.canvas.style.left = 0;
	this.canvas.style.top = 0;
	this.canvas.style.zIndex = "10";
	
	this.element.style.left = 0;
	this.element.style.top = 0;
	this.element.style.zIndex = "0";

	// This is where we will change CSS element width and height


	
	// Clear any existing data
	this.clearTheBoard();
	
	for ( var ii = 0; ii < this.boardData.dimension; ii++ ) {
	    for ( var jj = 0; jj < this.boardData.dimension; jj++ ) {
		this.coordinates.push( [ ] );
		this.coordinates[jj].push( new Coord( "wall", wallURL ) );
		this.$elementJQ.append( this.coordinates[jj][ii].$div );
	    }
	}
	
	// update floor tiles
	for ( var ii = 0; ii < this.boardData.floor.length; ii++ ) {
	    this.updateCell(this.boardData.floor[ii], "floor", floorURL, false );
	}
	// update dot tiles
	for ( var ii = 0; ii < this.boardData.dots.length; ii++ ) {
	    this.updateCell(this.boardData.dots[ii], "dot", dotsURL, false );
	}
	
	// make our crates
	for ( var ii = 0; ii < this.boardData.crate.length; ii++ ) {
	    this.crates.push( new Crate( this.boardData.crate[ii] ) );
	    this.crates[ii].onDot =
		this.coordinates[ this.boardData.crate[ii][0] ][ this.boardData.crate[ii][1] ].isADot();
	    this.coordinates[ this.boardData.crate[ii][0] ][ this.boardData.crate[ii][1] ].hasCrate = true;
	    if ( this.crates[ii].onDot) {
		this.crates[ii].$crateImg.attr('src', crateOnDotURL );
	    }
	    
	}

	// make a sprite
	this.sprite = new Sprite( this.boardData.start );

	this.draw();
    }

    this.findCrate = function( xy ) {
	for (var ii = 0; ii < this.crates.length; ii++ ) {
	    if ( xy[0] == this.crates[ii].x && xy[1] == this.crates[ii].y ) {
		return ii;
	    }
	}
	console.log("Error: crate not found.");
    }

    this.checkWinCondition = function() {
	var onDotCounter = 0;
	for (var ii = 0; ii < this.crates.length; ii++ ) {
	    if ( this.crates[ii].onDot ) {
		onDotCounter++;
	    }
	}
	if ( onDotCounter == this.crates.length ) {
	    // win condition satisfied!!
	    // trigger end of level
	    console.log("You win!");
	    console.log("You used " + this.sprite.stepCount + " steps.");
	    return true;
	} else {
	    return false;
	}
    }

    this.updateCrateStatus = function(crateIndex, oldPosition, newPosition) {

	this.coordinates[ oldPosition[0] ][ oldPosition[1] ].hasCrate = false;
	this.coordinates[ newPosition[0] ][ newPosition[1] ].hasCrate = true;

	if ( this.coordinates[ newPosition[0] ][ newPosition[1] ].isADot() ){
	    this.crates[crateIndex].onDot = true;
	    this.crates[crateIndex].$crateImg.attr('src', crateOnDotURL );
	} else {
	    this.crates[crateIndex].onDot = false;
	    this.crates[crateIndex].$crateImg.attr('src', crateURL );
	}

	this.winCondition = this.checkWinCondition();
	

    }

    // draw our sprite and crates to the canvas
     this.draw = function() {
	 this.context.clearRect(0, 0, this.canvas.width, this.canvas.height );
	 for ( var ii = 0; ii < this.crates.length; ii++ ) {
	     this.context.drawImage( this.crates[ii].$crateImg[0], this.crates[ii].x, this.crates[ii].y );
	 }
	 this.context.drawImage(this.sprite.$img[0], this.sprite.x, this.sprite.y );
    }

    this.move = function(deltaXY, withCrate) {
	listenToKeystrokes = false;
	var x = this.sprite.x;
	var y = this.sprite.y;
	var self = this;
	var draw = this.draw.bind(this);
	var counter = 0;
	var frames = cellWidth;

	if ( withCrate ) {

	    var crateIndex = self.findCrate([ x + deltaXY[0]*cellWidth ,  y + deltaXY[1]*cellWidth ]);
	    var xCrate = self.crates[crateIndex].x;
	    var yCrate = self.crates[crateIndex].y;
	}

	function drawFrame(fraction) {
	    // This looks weird, but we'll be sure that the sprite ends in
	    // a valid location when setTimeout calls drawFrame(1)
	    self.sprite.x = x + ( cellWidth * deltaXY[0] * fraction );
	    self.sprite.y = y + ( cellWidth * deltaXY[1] * fraction );
	    if ( withCrate ) {
		self.crates[crateIndex].x = xCrate + ( cellWidth * deltaXY[0] * fraction );
		self.crates[crateIndex].y = yCrate + ( cellWidth * deltaXY[1] * fraction );
	    }
	    requestAnimationFrame(draw);
	}

	var interval = setInterval(function(){
	    counter++;
	    drawFrame(counter/frames);
	}, 256 / cellWidth );

	setTimeout(function(){
	    clearInterval(interval);
	    drawFrame(1);
	    if ( withCrate ) {
		self.updateCrateStatus(crateIndex,
				       [xCrate / cellWidth ,yCrate / cellWidth ],
				       [ xCrate/cellWidth + deltaXY[0] ,  yCrate/cellWidth + deltaXY[1] ] );
	    }
	    self.sprite.stepCount++;
	    listenToKeystrokes = true;
	}, 256);
    }

    this.tryToMove = function( xy, deltaXY ) {
	var x = xy[0];
	var y = xy[1];
	var dx = deltaXY[0];
	var dy = deltaXY[1];

	var nextLocation = this.coordinates[ x + dx ][ y + dy ];

	// Make sure two spaces away is on the board
	if ( ( 0 <= x + 2*dx && x + 2*dx < this.boardData.dimension ) &&
	     ( 0 <= y + 2*dy && y + 2*dy < this.boardData.dimension ) ) {
	    var twoAway = this.coordinates[ x + 2*dx ][ y + 2*dy ];
	    twoAway.exists = true;
	} else {
	    // Two spaces away would be off the board
	    var twoAway = {};
	    twoAway.exists = false;
	}

	if ( nextLocation.tile == "wall" ) {
	    return;
	} else if ( nextLocation.hasCrate ) {
	    if ( twoAway.exists && !twoAway.hasCrate && twoAway.tile != "wall" ) {
		// move with crate
		this.move(deltaXY, true);
	    }
	    return;
	} else if ( ( nextLocation.tile == "floor" ) ||
		    ( nextLocation.tile == "dot") ) {
	    this.move(deltaXY, false);
	    return;
	} else {
	    console.log("error");
	}
    }

}

var BOXER_GAME_MODULE = (function() {
    var my = {};
    my.$anchor = $( "#gameBoard" );
    my.user = new User();
    my.game = new GameBoard( );
    
    my.initializeGameBoard = function() {
	my.$anchor.empty();
	my.user.init();
	my.game.init( levelData[my.user.difficulty][my.user.currentLevel] );
	my.$anchor.append( my.game.$elementJQ );
	my.$anchor.append( my.game.$canvasJQ );
	$('#game').css( { 'width': my.game.boardDimensionInPixels - 10,
			  'height': my.game.boardDimensionInPixels - 25 } );
	$('#container').css( 'width', my.game.boardDimensionInPixels );
    }

    // I don't really understand window.onload behavior
    // so I'm probably doing this wrong.
    window.onload = function () {
	my.initializeGameBoard();
    }
    
    
    my.advanceTheUser = function () {
	if( my.user.currentLevel < ( levelData[my.user.difficulty].length - 1 ) ) {
	    my.user.currentLevel++;
	} else if( my.user.difficulty == "easy"
		    && my.user.currentLevel == levelData[my.user.difficulty] -1) {
	    my.user.difficulty = "hard";
	    my.user.currentLevel = 0;
	} else if( my.user.difficulty == "easy"
		    && my.user.currentLevel == levelData[my.user.difficulty] - 1 ) {
	    console.log("CONGRATULATIONS: You beat all the levels!" );
	} else {
	    console.log("Error: level index out of bounds");
	}
	my.user.levelScores[my.user.difficulty].push( my.game.sprite.stepCount );
	my.user.saveUserData();
    }
    
    my.processInput = function(key) {
	var keyvalue = key.keyCode;
	var xy = [ (my.game.sprite.x / cellWidth), (my.game.sprite.y / cellWidth) ];
	
	// Keep key input from scrolling
	key.preventDefault();

	if ( my.game.winCondition ) {
	    my.advanceTheUser();
	    my.initializeGameBoard();
	} else if ( listenToKeystrokes ) {
	    if (keyvalue == 37) {
		console.log("left");
		deltaXY = [ -1, 0 ];
	    } else if (keyvalue == 38) {
		console.log("up");
		deltaXY = [ 0, -1 ];
	    } else if (keyvalue == 39) {
		console.log("right");
		deltaXY = [ 1, 0 ];
	    } else if (keyvalue == 40) {
 		console.log("down");
		deltaXY = [ 0, 1 ];
	    } else {
		return;
	    }
	    my.game.tryToMove( xy, deltaXY );
	}

    }

    my.scaleGameBoard = function() {
	var buffer = ( $('header').height() + $('footer').height() ) * 2;
	var frameHeight = $(window).height() - buffer;
	var frameWidth = $(window).width();
	var frameSize = Math.min( frameHeight, frameWidth );
	var scale;

	if ( my.game.boardDimensionInPixels < frameSize ) {
	    scale =  1;
	} else {
	    scale = ( frameSize / my.game.boardDimensionInPixels ).toFixed(2);
	    my.$anchor.parent().css( 'transform', 'scale( ' + scale + ', ' + scale + ')');
	}
    }
    
    my.scaleGameBoard();

    my.eventListeners= function() {
	window.addEventListener("keydown", my.processInput, false);
	window.addEventListener("resize",  my.scaleGameBoard, false );
    }
    my.eventListeners();

    return my;
})();
