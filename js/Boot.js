var DragonRun = DragonRun || {};
DragonRun.Boot = function () { }
DragonRun.Boot.prototype = {
    preload: function () {
        this.load.image('preloadbar','assets/loading.jpg')
    },
    create: function () {
        this.game.stage.backgroundColor = '#5555ff';
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        //have the game centered horizontally
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;

        //physics system
        this.game.physics.startSystem(Phaser.Physics.ARCADE);

        this.state.start('Preload');
    }
}