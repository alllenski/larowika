
WIDTH = 600;
HEIGHT = 480;

XTILES = 50;
YTILES = 30;

TILEWIDTH = 12;
TILEHEIGHT = 16;

var keyW = false;
var keyA = false;
var keyS = false;
var keyD = false;
var keyG = false;

function setup(){
	createCanvas(WIDTH, HEIGHT);
}

function draw(){
		noStroke();
		drawMap();
		player.update();
}


function drawMap(){
	for(var i = 0; i < XTILES; i++){
		for(var j = 0; j < YTILES; j++){
			tile = cell(i, j);
			if(tile == 1){
				fill(255, 0, 0);
				rect(i * TILEWIDTH, j * TILEHEIGHT, TILEWIDTH, TILEHEIGHT);
			} else if(tile == 0){
				fill(255);
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
	}
}
