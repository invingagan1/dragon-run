var DragonRun = DragonRun || {};
DragonRun.Game = function () { };

DragonRun.Game.prototype = {
    preload: function () {
    },
    create: function () {
        this.game.world.setBounds(0,0,3500, this.game.height);
        
        // add background
		this.addBackround();
        // add clouds
        this.addClouds();
        
        // add platform
        this.addPlatform();
        
        // add score section
        // add coins
        // add obstacles
        // add player
        this.addPlayer();
    },
    update: function () {
        
    },
	addBackround: function(){
//        this.back = this.game.add.tileSprite(0, this.game.height - 250, this.game.world.width, 70, 'background');
	},
    addPlatform: function() {
        this.platform = this.game.add.tileSprite(0, this.game.height - 70, this.game.world.width, 70, '')
    },
    addClouds: function() {
        this.cloud1 = this.game.add.sprite(50, 50, 'cloud1');
        this.cloud1.anchor.set(0.5);
        this.cloud1.scale.setTo(0.4);
        this.cloud2 = this.game.add.sprite(250, 150, 'cloud2');
        this.cloud2.anchor.setTo(0.5);
        this.cloud2.scale.setTo(0.2);
    },
    
    addPlayer: function() {
    },
    // Update methods
    updateCloud: function() {
        
    }
}
