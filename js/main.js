var DragonRun = DragonRun || {};
DragonRun.game = new Phaser.Game(400, 300, Phaser.AUTO);
DragonRun.game.state.add('Boot', DragonRun.Boot);
DragonRun.game.state.add('Preload', DragonRun.Preload);
DragonRun.game.state.add('Game', DragonRun.Game);

DragonRun.game.state.start('Boot');