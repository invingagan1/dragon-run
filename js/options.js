var DragonRun = DragonRun || {};
DragonRun.Options = function(){}
DragonRun.Options.prototype = {
	create: function(){
		this.b = this.game.add.button(100,100,'button', function(){
			this.state.start('Game');
		}, this, 1,2,0);
		this.bt = this.game.add.text(100,125,'Play',{
			font:'24px Roboto',
			fill:'red'
		});
		this.bt.anchor.setTo(0.5);
		this.bt.x += 90;
	},
	update: function(){
		
	}
};