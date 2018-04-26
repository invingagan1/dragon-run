var DragonRun = DragonRun || {};
DragonRun.Game = function () { }
DragonRun.Game.prototype = {
    wrap: 0,
    velocityX: 250,
    velocityY: 200,
    gravity: 500,
    jumpTimer: 0,
    count : 0,
    preload: function () {
    },
    create: function () {
        this.game.world.setBounds(0, 0, 35000, this.game.height);

        this.grass = this.add.tileSprite(0, this.game.height - 70, this.game.world.width, 70, 'grass');

        this.player = this.game.add.sprite(20, this.game.height - 150, 'player_walk');
        
        this.scoreCoin = this.game.add.sprite(this.game.x + 20, 16, 'food');
        this.score = this.game.add.text(this.game.x + 52, 20, '', {
            font: "24px Arial",
            fill: "#FF0000"
        });
        var walk = this.player.animations.add('walk');
        this.player.animations.play('walk', 12, true);

        //crate
        this.crates = this.game.add.group();
        for (var i = 1; i < 300; i = i + 3) {
            this.crates.create(300 * i, this.game.height - 94, 'crate');
            this.crates.create(300 * i + 24, this.game.height - 94, 'crate');
            this.crates.create(300 * i + 48, this.game.height - 94, 'crate');
        }
        this.crates.setAll('ancher', 0.5);

        //coins
        this.coins = this.game.add.group();
        for (var i = 0; i < 120;) {
            var x = 400 * ((i + 6) / 6);
            for (var j = 0; j < 3; j++) {
                this.coins.create(x + (j * 24), this.game.height - 124, 'food');
                i++;
            }
        }
        this.coins.callAll('animations.add', 'animations', 'spin', [0, 1, 2, 3, 4], 6, true);
        this.coins.callAll('animations.play', 'animations', 'spin');


        this.game.physics.arcade.enable(this.player);
        this.game.physics.arcade.enable(this.grass);
        this.game.physics.arcade.enable(this.crates);
        this.game.physics.arcade.enable(this.coins);

        this.grass.body.immovable = true;
        this.grass.body.allowGravity = false;

        this.crates.setAll('body.immovable', true);
        // this.coins.setAll('body.immovable', true);

        // this.player.anchor.setTo(0.5, 1);


        this.game.camera.follow(this.player);

        this.player.body.velocity.x = this.velocityX;
        this.player.body.gravity.y = this.gravity;
        this.player.isJumping = false;

        this.cursors = this.game.input.keyboard.createCursorKeys();
    },
    update: function () {
        this.game.physics.arcade.collide(this.player, this.grass, function () {
            this.player.isJumping = false;
        }, null, this);

        this.game.physics.arcade.collide(this.player, this.crates, function () {
            this.player.isJumping = false;
            this.player.body.velocity.x = this.velocityX;

        }, null, this);
        this.game.physics.arcade.collide(this.player, this.coins, function (player, coin) {
            coin.kill();
            this.count++;
            this.player.body.velocity.x = this.velocityX;
        }, null, this);

        if (this.player.alive && !this.stopped) {
            if (!this.wrapping && this.player.x < this.game.width) {
                this.wraps++;
                this.wrapping = true;

            } else if (this.player.x >= this.game.width) {
                this.wrapping = false;
            }

            if ((this.game.input.activePointer.isDown || this.cursors.up.isDown) && !this.player.isJumping) {
                this.player.body.velocity.y = this.velocityY * -1;
                this.player.isJumping = true;
            }

            this.game.world.wrap(this.player, -(this.game.width / 2), false, true, false);
        }
        this.scoreCoin.x = (this.game.world.x * -1) + 20;
        this.score.x = (this.game.world.x * -1) + 52;
        this.score.text = this.count;
    }
}