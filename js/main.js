var DragonRun = DragonRun || {};
var config = {
    width: 400,
    height: 300,
    type: Phaser.AUTO
};
DragonRun.game = new Phaser.Game(config);

DragonRun.game.scene.add('boot',DragonRun.Boot);
DragonRun.game.scene.start('boot');