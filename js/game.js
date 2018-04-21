var DragonRun = DragonRun || {};
DragonRun.Game = function () { }
DragonRun.Game.prototype = {
    velocity: 250,
    gravity: 750,
    wraps: 0,
    preload: function () {
        this.game.time.advanceTiming = true;
    },
    create: function () {
        //Setup background
        this.game.world.setBounds(0, 0, 35000, this.game.height);
        this.grass = this.add.tileSprite(0, this.game.height - 70, this.game.world.width, 70, 'grass');
        this.player = this.game.add.sprite(this.game.width / 2, this.game.height - 70, 'player');

        this.game.physics.arcade.enable(this.player);
        this.game.physics.arcade.enable(this.grass);

        this.grass.body.immovable = true;
        this.grass.body.allowGravity = false;

        this.player.anchor.setTo(0.5, 1);
        this.player.scale.setTo(0.2);

        this.game.camera.follow(this.player);

        this.cursors = this.game.input.keyboard.createCursorKeys();
        this.swipe = this.game.input.activePointer;
    },
    update: function () {
        this.game.physics.arcade.collide(this.player, this.grass, function () {
            console.log('collision happed');
            this.player.body.gravity.y = 0;
        }, null, this);

        if (this.player.alive &&  !this.stopped ) {
            console.log('player is alive and moving');
            this.player.body.velocity.x = this.velocity;
            if (!this.wrapping && this.player.x < this.game.width) {
                this.wraps++;
                this.wrapping = true;

            } else if (this.player.x >= this.game.width) {
                this.wrapping = false;
            }

            //keyboard handling
            if(this.cursors.up.isDown){
                this.player.body.gravity.y = this.gravity * (-1);
            }else{
                this.player.body.gravity.y = this.gravity;
            }
            this.game.world.wrap(this.player, -(this.game.width/2), false, true, false);
        }

    }
}