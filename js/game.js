var DragonRun = DragonRun || {};
DragonRun.Game = function () { }
DragonRun.Game.prototype = {
    wrap: 0,
    gravity: 750, 
    jumpTimer:0,
    preload: function () {
    },
    create: function () {
        this.game.world.setBounds(0, 0, 35000, this.game.height);

        this.grass = this.add.tileSprite(0, this.game.height - 70, this.game.world.width, 70, 'grass');

        this.player = this.game.add.sprite( 20 , this.game.height - 120, 'player_walk');
        var walk = this.player.animations.add('walk');
        this.player.animations.play('walk', 12, true);

        this.game.physics.arcade.enable(this.player);
        this.game.physics.arcade.enable(this.grass);

        this.grass.body.immovable = true;
        this.grass.body.allowGravity = false;

        this.player.anchor.setTo(0.5, 1);

        this.game.camera.follow(this.player);
        
        this.player.body.velocity.x = 200;
        this.player.body.gravity.y = 500;
        this.player.isJumping = false;

        this.cursors = this.game.input.keyboard.createCursorKeys();
    },
    update: function () {
        this.game.physics.arcade.collide(this.player, this.grass, function () {
            this.player.isJumping = false;
        }, null, this);
        if (this.player.alive &&  !this.stopped ) {
            if (!this.wrapping && this.player.x < this.game.width) {
                this.wraps++;
                this.wrapping = true;

            } else if (this.player.x >= this.game.width) {
                this.wrapping = false;
            }

            if(( this.game.input.activePointer.isDown || this.cursors.up.isDown) && !this.player.isJumping){
                this.player.body.velocity.y = -200;
                this.player.isJumping = true;
            }
            
            this.game.world.wrap(this.player, -(this.game.width/2), false, true, false);
        }
    }
}