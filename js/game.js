var DragonRun = DragonRun || {};
DragonRun.Game = function () { };

DragonRun.Game.prototype = {
    preload: function () {
    },
    create: function () {
    	this.game.world.setBounds(0, 0, 3500, this.game.height);

    	// create background
    	this.createBackground();

    },
    update: function () {
        
    },
    createBackground: function(){
        alert('cloud added');
    	// this.bg = this.add.tileSprite(0, 0, this.game.world.width, this.game.world.height,'background');
    	this.cloud1 = this.add.sprite(0,0,'cloud1');
    }
}
