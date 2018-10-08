var DagorDagorath = DagorDagorath || {};

//loading the game assets
DagorDagorath.Preload = function(){};

DagorDagorath.Preload.prototype = {
  preload: function() {
  	//show loading screen
  	this.splash = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'logo');
    this.splash.anchor.setTo(0.5);

    this.preloadBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY + 128, 'preloadbar');
    this.preloadBar.anchor.setTo(0.5);

    this.load.setPreloadSprite(this.preloadBar);

  	//load game assets
    this.load.image('titulo', 'images/titulo4.png');
    this.load.spritesheet('Boton1', 'images/boton.png',296,143);
    this.load.spritesheet('Boton2', 'images/boton_2.png',296,143);
    this.load.spritesheet('Boton3', 'images/boton3.png',296,143);
    this.load.image('background', 'images/dagor.png');
    this.load.image('background2', 'images/dagor_escalada.png');
    
  },
  create: function() {
  	this.state.start('MainMenu');
  }
};