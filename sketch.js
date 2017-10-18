
WIDTH = 1080;
HEIGHT = 480;

VIEWWIDTH = 600;
VIEWHEIGHT = 480;

XTILES = 30;
YTILES = 10;

TILEWIDTH = 36;
TILEHEIGHT = 48;

var keyW = false;
var keyA = false;
var keyS = false;
var keyD = false;
var keyG = false;

var tickCount = 0;
var tpf = 3;
var current = 0;

var sceneCount = 0;

var offsetX = 0;
var offsetY = 0;

function preload(){
	stand = loadImage("assets/stand.png");
	jump = loadImage("assets/jump.png");
	walk1 = loadImage("assets/Walk1.png");
	walk2 = loadImage("assets/Walk2.png");
	walk3 = loadImage("assets/Walk3.png");
	walk4 = loadImage("assets/Walk4.png");
	walk5 = loadImage("assets/Walk5.png");
	walk6 = loadImage("assets/Walk6.png");
	walk7 = loadImage("assets/Walk7.png");
	walk8 = loadImage("assets/Walk8.png");
	walk9 = loadImage("assets/Walk9.png");
	walk10 = loadImage("assets/walk10.png");
	walk11 = loadImage("assets/walk11.png");
	walk12 = loadImage("assets/Walk12.png");
	ascroll = loadImage("assets/ascroll.png");
	dscroll = loadImage("assets/dscroll.png");
	wscroll = loadImage("assets/wscroll.png");
	gscroll = loadImage("assets/gscroll.png");
	woodtopleft = loadImage("assets/woodtopleft.png");
	woodtop = loadImage("assets/woodtop.png");
	woodtopright = loadImage("assets/woodtopright.png");
	woodmiddleleft = loadImage("assets/woodmiddleleft.png");
	woodmiddle = loadImage("assets/woodmiddle.png");
	woodmiddleright = loadImage("assets/woodmiddleright.png");
	woodbottomleft = loadImage("assets/woodbottomleft.png");
	woodbottom = loadImage("assets/woodbottom.png");
	woodbottomright = loadImage("assets/woodbottomright.png");
	woodtopleftcorner = loadImage("assets/woodtopleftcorner.png");
	woodtoprightcorner = loadImage("assets/woodtoprightcorner.png");
	woodbottomleftcorner = loadImage("assets/woodbottomleftcorner.png");
	woodbottomrightcorner = loadImage("assets/woodbottomrightcorner.png");
	woodbg = loadImage("assets/woodbg.png");
	sky = loadImage("assets/sky.png");
	scroll = loadImage("assets/scroll.png");
	font = loadFont("font/pixelart.ttf");
}

function setup(){
	createCanvas(VIEWWIDTH, VIEWHEIGHT);
	frameRate(60);
	wSpr = [walk1, walk2, walk3, walk4, walk5, walk6, walk7, walk8, walk9, walk10, walk11, walk12];
	textFont(font);
	eventX = 180;
	eventY = 384;
	loadLevel(tutorialmap);
}

function draw(){
	noStroke();
	offsetX = VIEWWIDTH / 2 - player.x;
	push();
	translate(offsetX, offsetY);
	rect(-offsetX, -offsetY, 600, 480);
	drawMap();
	image(ascroll, 72, 144);
	image(dscroll, 216, 144);
	image(wscroll, 432, 144);
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

function loadLevel(map){
	tiles = map;
}

function drawMap(){
	for(var i = 0; i < XTILES; i++){
		for(var j = 0; j < YTILES; j++){
			tile = cell(i, j);
			var x = i * TILEWIDTH;
			var y = j * TILEHEIGHT;
			switch(tile){
				case tileid.woodtopleft:
				image(woodtopleft, x, y);
				break;
				case tileid.woodtop:
				image(woodtop, x, y);
				break;
				case tileid.woodtopright:
				image(woodtopright, x, y);
				break;
				case tileid.woodtopleftcorner:
				image(woodtopleftcorner, x, y);
				break;
				case tileid.woodtoprightcorner:
				image(woodtoprightcorner, x, y);
				break;
				case tileid.woodmiddleleft:
				image(woodmiddleleft, x, y);
				break;
				case tileid.woodmiddle:
				image(woodmiddle, x, y);
				break;
				case tileid.woodmiddleright:
				image(woodmiddleright, x, y);
				break;
				case tileid.woodbottomleftcorner:
				image(woodbottomleftcorner, x, y);
				break;
				case tileid.woodbottomrightcorner:
				image(woodbottomrightcorner, x, y);
				break;
				case tileid.woodbottomleft:
				image(woodbottomleft, x, y);
				break;
				case tileid.woodbottom:
				image(woodbottom, x, y);
				break;
				case tileid.woodbottomright:
				image(woodbottomright, x, y);
				break;
				case tileid.woodbg:
				image(woodbg, x, y);
				break;
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
	if(tile == tileid.woodbg){
		return false;
	} else {
		return true;
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
