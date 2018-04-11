var DragonRun = DragonRun || {};
DragonRun.Boot = function () {}

DragonRun.Boot.prototype = {
    preload: function () {
        console.log('Boot the phaser here');
    },
    create: function () {
        console.log('go to next scene')
    }
};