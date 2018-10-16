var DagorDagorath = DagorDagorath || {};
var button;
var tween;
var tween2;
var tween3;

var tierra;
var marco;
var letras;
var olas;
var texto1;
var texto1_2;
var texto2;
var texto3;

var alrededores;
var morgoth;
var nazguls;

DagorDagorath.Cinematic = function(){};

DagorDagorath.Cinematic.prototype = {
	create: function() {

		//Dimensiones del mundo
		this.game.world.setBounds(0, 0, 1000, 667);

		//Fondo
		this.background = this.game.add.tileSprite(0, 0, 1000, 667, 'Fondo');

		//Cinematica 1//////////////////////////////////////////////////////////////////////////////////////
		olas = this.game.add.sprite(0,0,'Ilustracion1_Olas');

		marco = this.game.add.sprite(0,0, 'Ilustracion1_Marco');
		marco.width = 1000;
		marco.height = 667;

		tierra = this.game.add.sprite(65,85, 'Ilustracion1_Tierra');
		tierra.width = 860;
		tierra.height = 500;

		texto1 = this.game.add.sprite(330,450, 'Texto_1');
		texto1.width = 280;
		texto1.height = 118;

		texto1_2 = this.game.add.sprite(412.5,563.5, 'Texto_1_2'); //563.5
		texto1_2.width = 111.7;
		texto1_2.height = 33;

		texto2 = this.game.add.sprite(330,450, 'Texto_2');
		texto2.width = 280;
		texto2.height = 155;


		tierra.alpha = 1;
		olas.alpha = 1;
		texto1.alpha = 0;
		texto1_2.alpha = 0;
		texto2.alpha = 0;
		////////////////////////////////////////////////////////////////////////////////////////////////////


		//Cinematica 2//////////////////////////////////////////////////////////////////////////////////////
		alrededores = this.game.add.sprite(0,0,'Ilustracion2_Marco');
		alrededores.width = 1000;
		alrededores.height = 667;
		alrededores.alpha = 0;

		morgoth = this.game.add.sprite(-580,20,'Ilustracion2_Morgoth');
	 	morgoth.width = 580;
		morgoth.height = 667;

	 	nazguls = this.game.add.sprite(150,-120,'Ilustracion2_Nazguls');
	 	nazguls.width = 250;
		nazguls.height = 102;

		texto3 = this.game.add.sprite(375,385, 'Texto_3');
		texto3.width = 385;
		texto3.height = 126;
		texto3.alpha = 0;
		////////////////////////////////////////////////////////////////////////////////////////////////////
		  

		//Animacion entrada textos1/////////////////////////////////////////////////////////////////////////
		tween3 = this.game.add.tween(texto1).to( { alpha: 1 }, 6000,  Phaser.Easing.Quartic.Out, true);
		tween3.start();
		tween3 = this.game.add.tween(texto1_2).to( { alpha: 1 }, 6000,  Phaser.Easing.Quartic.Out, true);
		tween3.start();
		tween3.onComplete.add(this.desapareceTexto1, this);
		////////////////////////////////////////////////////////////////////////////////////////////////////


		//Animacion primera escena//////////////////////////////////////////////////////////////////////////
		tween = this.game.add.tween(olas).to({x: -500}, 20000, Phaser.Easing.Linear.None);   
		tween.start(); 
		tween = this.game.add.tween(tierra.scale).to({x: 0.55, y: 0.55}, 20000, Phaser.Easing.Linear.None);
		tween.start();
		tween = this.game.add.tween(tierra).to({x: -120, y: -100}, 20000, Phaser.Easing.Linear.None);
		tween.start();
		tween = this.game.add.tween(tierra).to( { alpha: 0 }, 20000,  Phaser.Easing.Quadratic.In, true);
		tween.start();

		tween.onComplete.add(this.actionOnClick, this); 
		////////////////////////////////////////////////////////////////////////////////////////////////////


		//Definicion de boton para saltar la cinematica/////////////////////////////////////////////////////
		button = this.game.add.button(925, 20, 'BotonAvance', this.saltar, this,0,1);
		button.width = 55;
		button.height = 40;

		button.alpha = 0.7;
		////////////////////////////////////////////////////////////////////////////////////////////////////

	},

	saltar: function(){
		this.game.state.start('Game');
	},

	desapareceTexto1: function() 
	{
		tween3 = this.game.add.tween(texto1).to( { alpha: 0 }, 2000,  Phaser.Easing.Quartic.Out, true);
		tween3.start();
		tween3.onComplete.add(this.desapareceTexto1_2, this);
	},

	desapareceTexto1_2: function()
	{
		tween3 = this.game.add.tween(texto1_2).to( { alpha: 0 }, 2000,  Phaser.Easing.Quartic.In, true);
		tween3.start();
		tween3.onComplete.add(this.apareceTexto2, this);
	},

	apareceTexto2: function()
	{
		tween3 = this.game.add.tween(texto2).to( { alpha: 1}, 5000,  Phaser.Easing.Quartic.Out, true);
		tween3.start();
		tween3.onComplete.add(this.desapareceTexto2, this);
	},

	desapareceTexto2: function() 
	{
		tween3 = this.game.add.tween(texto2).to( { alpha: 0 }, 5000,  Phaser.Easing.Quadratic.In, true);
		tween3.start();
		//tween3.onComplete.add(this.desapareceTexto1_2, this);
	},

	actionOnClick: function () 
	{
		tween = this.game.add.tween(olas).to( { alpha: 0 }, 2000,  Phaser.Easing.Linear.None, true);
		tween.start();
		tween2 = this.game.add.tween(olas).to({x: -1000}, 20000, Phaser.Easing.Linear.None);   
		tween2.start();
		tween.onComplete.add(this.cinematica2, this);
	},

	cinematica2: function()
	{

		tween = this.game.add.tween(alrededores).to( { alpha: 1 }, 3000,  Phaser.Easing.Linear.None, true);
		tween.start();

		tween.onComplete.add(this.entradaMorgoth, this);

	},

	entradaMorgoth: function()
	{
		tween = this.game.add.tween(morgoth).to({x: 0}, 5000, Phaser.Easing.Quadratic.Out, true);   
		tween.start();
		tween3 = this.game.add.tween(texto3).to( { alpha: 1}, 5000,  Phaser.Easing.Quartic.In, true);
		tween3.start();

		tween.onComplete.add(this.entradaNazguls, this);

	},

	entradaNazguls: function()
	{
		tween = this.game.add.tween(nazguls).to({x:270, y:60}, 2000, Phaser.Easing.Bounce.In);   
		tween.start();
		tween2 = this.game.add.tween(nazguls.scale).to({x: 0.30, y: 0.30}, 2000, Phaser.Easing.Cubic.In);
		tween2.start();

		tween2.onComplete.add(this.salidaNazguls, this);
	},

	salidaNazguls: function()
	{
		tween = this.game.add.tween(nazguls).to({x:410, y:-260}, 2000, Phaser.Easing.Bounce.Out);   
		tween.start();
		tween2 = this.game.add.tween(nazguls.scale).to({x: 0.40, y: 0.40}, 2000, Phaser.Easing.Cubic.Out);
		tween2.start();

		tween2.onComplete.add(this.entradaNazguls2, this);
	},

	entradaNazguls2: function()
	{
		tween = this.game.add.tween(nazguls).to({x:535, y:45}, 2000, Phaser.Easing.Cubic.Out);   
		tween.start();
		tween2 = this.game.add.tween(nazguls.scale).to({x: 0.50, y: 0.50}, 2000, Phaser.Easing.Cubic.Out);
		tween2.start();

		//tween2.onComplete.add(this.saltar, this);
	}

}