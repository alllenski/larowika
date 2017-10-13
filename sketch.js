
WIDTH = 1080;
HEIGHT = 480;

VIEWWIDTH = 600;
VIEWHEIGHT = 480;

XTILES = 30;
YTILES = 10;

TILEWIDTH = 36;
TILEHEIGHT = 48;

LIGHTGREEN = [60, 140, 80];
DARKGREEN = [40, 80, 50];
DARKBLUE = [15, 40, 85];

var keyW = false;
var keyA = false;
var keyS = false;
var keyD = false;
var keyG = false;

var tickCount = 0;
var tpf = 4;
var current = 0;

var sceneCount = 0;

var offsetX = 0;
var offsetY = 0;

function preload(){
	stand = loadImage("stand.png");
	walk00 = loadImage("walk00.png");
	walk01 = loadImage("walk01.png");
	walk02 = loadImage("walk02.png");
	walk03 = loadImage("walk03.png");
	walk04 = loadImage("walk04.png");
	walk05 = loadImage("walk05.png");
	walk06 = loadImage("walk06.png");
	walk07 = loadImage("walk07.png");
	walk08 = loadImage("walk08.png");
	walk09 = loadImage("walk09.png");
	walk10 = loadImage("walk10.png");
	walk11 = loadImage("walk11.png");
	font = loadFont("pixelart.ttf");
}

function setup(){
	createCanvas(VIEWWIDTH, VIEWHEIGHT);
	frameRate(60);
	eventX = 396;
	eventY = 288;
	wSpr = [walk00, walk01, walk02, walk03, walk04, walk05, walk06, walk07, walk08, walk09, walk10, walk11]
	textFont(font);
}

function draw(){
	noStroke();
	offsetX = VIEWWIDTH / 2 - player.x;
	push();
	translate(offsetX, offsetY);
	rect(-offsetX, -offsetY, 600, 480);
	drawMap();
	fill(0, 0, 255);
	rect(eventX, eventY, TILEWIDTH, TILEHEIGHT);
	pop();
	var fps = frameRate();
	fill(0);
	text("FPS: " + fps, 0, 10);
	text("x: " + player.x, 0, 25);
	text("y: " + player.y, 0, 40);
	player.update();
}

function drawMap(){
	for(var i = 0; i < XTILES; i++){
		for(var j = 0; j < YTILES; j++){
			tile = cell(i, j);
			if(tile == 2){
				fill(LIGHTGREEN);
				rect(i * TILEWIDTH, j * TILEHEIGHT, TILEWIDTH, TILEHEIGHT);
			} else if(tile == 1){
				fill(DARKGREEN);
				rect(i * TILEWIDTH, j * TILEHEIGHT, TILEWIDTH, TILEHEIGHT);
			}
		}
	}
}

function grid(a, w){
	return a * w;
}

function snap(a, w){
	return floor(a/w);
}

function cell(x, y){
	return tiles[x + (y * XTILES)]
}

function ccell(x, y){
	tile = cell(x, y);
	if(tile == 2){
		return true;
	} else {
		return false;
	}
}

function collide(x1, y1, w1, h1, x2, y2, w2, h2){
	if(x1 < x2 + w2 && x2 < x1 + w1 && y1 < y2 + h2 && y2 < y1 + h1){
		return true;
	} else {
		return false;
	}
}


function keyPressed(){
	switch(keyCode){
		case 87:
		keyW = true;
		break;
		case 83:
		keyS = true;
		break;
		case 65:
		keyA = true;
		break;
		case 68:
		keyD = true;
		break;
		case 71:
		keyG = true;
		break;
	}
}


function keyReleased(){
	switch(keyCode){
		case 87:
		keyW = false;
		break;
		case 83:
		keyS = false;
		break;
		case 65:
		keyA = false;
		break;
		case 68:
		keyD = false;
		break;
		case 71:
		keyG = false;
		break;
	}
}
