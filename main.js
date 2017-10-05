document.addEventListener('DOMContentLoaded', function(){
	var drops = [];
	function Drop(_z) {
		this.z = _z;
		this.x;
		this.y;
		this.speed;
		this.len;
		this.thick;		
		this.fall = function(){

		}
	}
	for (var i = 0; i < 500; i++) {
		var z = Math.floor(Math.random() * 20);

		drops[i] = new Drop(z);
	}
});
