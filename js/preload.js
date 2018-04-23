var DragonRun = DragonRun || {};
DragonRun.Preload = function () { }
DragonRun.Preload.prototype = {
    preload: function () {
        this.preloadBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'preloadbar');
        this.preloadBar.anchor.setTo(0.5);
        this.preloadBar.scale.setTo(0.5);

        this.load.setPreloadSprite(this.preloadBar);

        //load game assets
        this.load.image('grass','assets/floor.png');
        this.load.image('player','assets/runner.png')
        this.load.spritesheet('player_walk', 'assets/run.png',32,64,6);
    },
    create: function () {
        this.state.start('Game');   
    }
}