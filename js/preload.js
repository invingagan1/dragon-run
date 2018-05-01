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

        this.loadingText = this.add.text(this.game.world.centerX, this.game.world.centerY + 30, '', {
            font:"18px Roboto",
            fill:"#000"
        });
        this.loadingText.anchor.setTo(0.5);

        this.load.setPreloadSprite(this.preloadBar);

        
    },
    create: function () {
        
        this.game.load.onLoadStart.add(this.startLoading, this);
        this.game.load.onFileComplete.add(function(progress, cacheKey, success, totalLoaded, totalFiles){
            this.loadingText.setText(`Loading ${progress}%`);
        }, this);
        this.game.load.onLoadComplete.add(this.loadingFinished, this);

        this.startLoading();
    },
    startLoading: function() {
        //load game assets
        
        // Background
        this.load.image('background', 'assets/bg/bg.png');
        this.load.image('cloud1', 'assets/bg/cloud-1.png');
        this.load.image('cloud2', 'assets/bg/cloud-2.png');

        //Player
        this.load.image('grass','assets/floor.png');
        this.load.spritesheet('player_run','assets/player/walk.png', 32,64,6);
        this.load.spritesheet('player_jump', 'assets/player/spinjump.png',32,64,11);
        this.load.spritesheet('food','assets/food.png',32,32,5);

        //Enemy
        this.load.image('enemy', 'assets/enemy/enemy.png');

        //UI
        this.load.spritesheet('button','assets/ui-elements/button-sprite.png',190, 49,2);


        this.game.load.start();

        this.loadingText.setText('Loading...');
    },
    loadingFinished: function() {
        this.state.start('Options');
    }
}