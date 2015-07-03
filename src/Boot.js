var BasicGame = {}; //declare the object that will hold all game states
var clicks = 0;     // basic global variables
var playmusic = true;  //global toggle to control music play across states
 
BasicGame.Boot = function (game) {  //declare the boot state
 
};
 
BasicGame.Boot.prototype = {
 
	preload: function () {
		//load assets for the loading screen
		alert("Si que salta");

	},

	create: function () {

		if (this.game.device.desktop) {
			this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL; //always show whole game
			this.scale.pageAlignHorizontally = true; //align horizontally
		}
		else {
			alert("putada");
		}
	this.scale.setScreenSize(true);

	//physics system for movement
	this.game.physics.startSystem(Phaser.Physics.ARCADE);
	this.state.start('Preload');
	}
}