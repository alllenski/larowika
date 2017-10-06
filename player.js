player = {
	x:576,
	y:16,
	vx:0,
	vy:0,
	falling:false,
	jumping:false,

	update:function(){
		player.draw();
		player.move();
	},

	draw:function(){
		fill(255, 0, 0);
		rect(player.x, player.y, TILEWIDTH, TILEHEIGHT);
	},

	move:function(){

		player.vy = 0;
		player.vy = 9.8;

		if(keyA){
			player.vx = -4;
		} else if(keyD){
			player.vx = 4;
		} else {
			player.vx = 0;
		}

		fx = snap(player.x, TILEWIDTH);
		fy = snap(player.y, TILEHEIGHT);

		nx = player.x % TILEWIDTH;
		ny = player.y % TILEHEIGHT;

		centertile = cell(fx, fy);
		righttile = cell(fx + 1, fy);
		downtile = cell(fx, fy + 1);
		diagonaltile = cell(fx + 1, fy + 1);

		if (player.vy > 0) {
			if ((downtile && !centertile) || (diagonaltile && !righttile && nx)) {
				player.y = grid(fy, TILEHEIGHT);       
				player.vy = 0;
				player.falling = false;
				player.jumping = false;            
				ny = 0; 
			}
		} else if (player.vy < 0) {
			if ((centertile && !downtile ) || (righttile && !diagonaltile && nx)) {
				player.y = grid(fy + 1, TILEHEIGHT);
				player.vy = 0;
				centertile = downtile;
				righttile = diagonaltile;
				ny = 0;
			}
		}

		if (player.vx > 0) {
			if ((righttile && !centertile) || (diagonaltile  && !downtile  && ny)) {
				player.x = grid(fx, TILEWIDTH);
				player.vx = 0;
			}
		} else if (player.vx < 0) {
			if ((centertile     && !righttile) || (downtile  && !diagonaltile && ny)) {
				player.x = grid(fx + 1), TILEWIDTH;
				player.vx = 0;
			}
		}

		player.x += player.vx;
		player.y += player.vy;

		player.x = constrain(player.x, 0, WIDTH - 12);
		player.y = constrain(player.y, 0, HEIGHT - 16);
	}	
}