var DragonRun = DragonRun || {};
DragonRun.Preload = function () { }
DragonRun.Preload.prototype = {
    preload: function () {
        this.game.stage.backgroundColor = '#3b9cfb';
        this.gameIcon = this.add.sprite(this.game.world.centerX, this.game.world.centerY - 50, 'game');
        this.gameIcon.anchor.setTo(0.5);

        this.preloadBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'preloadbar');
        this.preloadBar.anchor.setTo(0.5);
        this.preloadBar.scale.setTo(0.5);

        this.loadingText = this.add.text(this.game.world.centerX, this.game.world.centerY + 30, 'Loading...', {
            font:"18px Roboto",
            fill:"#000"
        });
        this.loadingText.anchor.setTo(0.5);

        this.load.setPreloadSprite(this.preloadBar);

        //load game assets
        /**
         * 1. backgrounds 1,2
         * 2. clouds
         * 3. castle
         * 4. trees
         * 5. UI Assets
         * 6. Player
         * 7. Enemies
         * 8.
         */
        
        this.load.image('background', 'assets/bg/bg.png');
        this.load.image('cloud1', 'assets/bg/cloud-1.png');
        this.load.image('cloud2', 'assets/bg/cloud-2.png');

        // this.load.image('grass','assets/floor.png');
        // this.load.image('player','assets/runner.png')
        // this.load.spritesheet('player_walk', 'assets/run.png',32,64,6);
        // this.load.spritesheet('food','assets/food.png',32,32,5);
        // this.load.image('crate', 'assets/crate-small.png');
        // this.load.image('stone', 'assets/mushroom.png');
        // this.load.image('bg','assets/bg.png');
    },
    create: function () {
        this.state.start('Game');   
    }
}