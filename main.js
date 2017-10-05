document.addEventListener('DOMContentLoaded', function(){
	var body = document.getElementById('body');
	var drops = [];
	var s = -1;
	function Drop(_x, _y, _z) {		
		this.x = _x;
		this.y = _y;
		this.z = _z;
		this.speed;
		this.len;
		this.thick;
		this.fall = function(i){
			s++;
			var drop = document.createElement('div');
			drop.id = s;
			drop.className = 'drop';
			drop.style.left = this.x + 'px';
			drop.style.top = this.y + 'px';
			body.appendChild(drop);
			setInterval(function(){				
					drop = document.getElementById(i);
					this.y = window.innerHeight;
					drop.style.visibility = 'visible';
					drop.style.top = this.y + 'px';
					setTimeout(function(){
						drop.style.visibility = 'hidden';
						setTimeout(function(){
							var nz = Math.floor(Math.random() * 20);
							var nx = Math.floor(Math.random() * window.innerWidth);
							var ny = Math.floor(Math.random() * -1000) - 10;
							this.x = nx;
							this.y = ny;							
							drop.style.left = this.x + 'px';
							drop.style.top = this.y + 'px';
						}, 1);						
					}, 10)
			}, 1000);
		}
	}
	for (var i = 0; i < 1000; i++) {
		var z = Math.floor(Math.random() * 20);
		var x = Math.floor(Math.random() * window.innerWidth);
		var y = Math.floor(Math.random() * -1000) - 10;

		drops[i] = new Drop(x, y, z);
		drops[i].fall(i);
	}

	// function draw(){
	// 	for (var i = 0; i < drops.length; i++) {
			
	// 	}
	// }

	// setInterval(draw, 30);
});
