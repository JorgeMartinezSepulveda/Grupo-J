var DagorDagorath = DagorDagorath || {};
var button;
var cursors;
var image1;
var image_menu;
var mascara;
var mascaraFin;
var button1_menu_Pause;
var button2_menu_Pause;
var panel_Stats;
var tropa1;
var sprite;
var trasgos;
var enanos;
var dineroia = 2000;
var dineros = 2000;
var dineroTexto = 2000;
var enanotimer = 0;
var contadorenano = 0;
var monedas;
var enAtacando = 0;
var trasAtacando = 0;
var continua = 0;
var showDebug = true;
var barravidabg1;
var barravidabg2;
var barravida1;
var barravida2;
var base1;
var base2;
var bottonnivel;
var niveltropa = 1;
var lvl;
var textvida = 100;
var textdaño = 35;

var musica;
var button_final;

var flechas;
var flechas2;
var flecha;
var flecha2;
var tween;
var tween2;
var numeroEnanos = 0;
var cargaTropa;
var cargaTropa1;
var cargaAtaque;
var cargaAtaque1;
var flechatimer = 0;
var flechatimer2 = 0;
var ataque1;
var numeroEnemigos = 0;
var vidaTropa1;
var mostrarVida = false;
var vidaAliado1;
var mostrarVida2 = false;
var botonsonido;
var botonsonidoff;
var efectosSonido = true;
var musicaSonido = true;
var botonmusica;
var botonmusicaoff;
var textnombre;
var textcoste;
var textrecu;

var panel_Stats_flecha;
var textvida2;
var textrecu2;
var textdaño2;
var textnombre2;

var basetimer = 0;
var basetimer2 = 0;

var sonidoNavaja;
var sonidoHacha;

var tuto = false;
var tuto_pantalla;

var finJuego = false;

DagorDagorath.Game = function() {
};

DagorDagorath.Game.prototype = {
	create : function() {
		musica = this.game.add.audio('isengard', 0.04, true);
		if(musicaSonido == true)
		{
			musica.play();
		}
		
		// Dimensiones del mundo
		this.game.world.setBounds(0, 0, 2000, 667);

		this.game.physics.startSystem(Phaser.Physics.ARCADE);
		
		sonidoNavaja = this.game.add.audio('stab', 0.2, false);//slash
		sonidoHacha = this.game.add.audio('slash', 0.1, false);//
		// Fondo del estado
		this.background = this.game.add.tileSprite(0, 0, 2000, 667, 'back');

		this.base = this.game.add.group();
		this.base.enableBody = true;
		this.base.physicsBodyType = Phaser.Physics.ARCADE;

		base1 = this.base.create(0, 336, 'base1');
		base1.vida = 2000;
		base1.body.setSize(368, 300, 0, 0);
		base1.inputEnabled = true;
		base1.body.immovable = true;

		base2 = this.base.create(1694, 136, 'base2');
		base2.vida = 2000;
		base2.body.setSize(300, 400, 0, 267);
		base2.inputEnabled = true;
		base2.body.immovable = true;
		
		this.flechas = this.game.add.group();
		this.flechas.createMultiple(50, ['flecha'],0,true);
		this.flechas.setAll('y', -50);
		
		this.flechas2 = this.game.add.group();
		this.flechas2.createMultiple(50, ['flecha'],0,true);
		this.flechas2.setAll('y', -50);
		
		flecha = this.game.add.sprite(300, 340, 'flecha');
		flecha.alpha= 0;
		
		flecha2 = this.game.add.sprite(1720, 340, 'flecha');
		flecha2.alpha= 0;
		
		barravidabg1 = this.game.add.sprite(50, 630, 'barravidabg');
		barravida1 = this.game.add.sprite(50, 630, 'barravida');
		barravidabg1.alpha = 1;
		barravida1.alpha = 1;
		marcobarravidabg1 = this.game.add.sprite(50, 630, 'marcobarravida');
		
		barravidabg2 = this.game.add.sprite(1750, 630, 'barravidabg');
		barravida2 = this.game.add.sprite(1750, 630, 'barravida');
		barravidabg2.alpha = 1;
		barravida2.alpha = 1;
		marcobarravidabg2 = this.game.add.sprite(1750, 630, 'marcobarravida');

		dineroTexto = this.add.text(100, 20, '2000', {
			fontSize : '30px',
			fill : '#EBE54C'
		});
		dineroTexto.fixedToCamera = true;

		monedas = this.game.add.sprite(70, 25, 'monedas');
		monedas.fixedToCamera = true;

		image1 = this.game.add.sprite(760, 15, 'fondotropas');// image_menu
		image1.width = 225;
		image1.height = 75;
		image1.fixedToCamera = true;
		
		cargaTropa = this.game.add.sprite(780, 22, 'barravidabg');
		cargaTropa.angle = 90;
		cargaTropa.width = 60;
		cargaTropa.height = 6;
		cargaTropa.fixedToCamera = true;
		
		cargaTropa1 = this.game.add.sprite(780, 22, 'barracarga');
		cargaTropa1.angle = 90;
		cargaTropa1.width = 60;
		cargaTropa1.height = 6;
		cargaTropa1.fixedToCamera = true;
		
		marcocargatropa= this.game.add.sprite(780, 22, 'marcobarravida');
		marcocargatropa.angle = 90;
		marcocargatropa.width = 60;
		marcocargatropa.height = 6;
		marcocargatropa.fixedToCamera = true;

		bottonnivel = this.game.add.button(855, 55, 'boton_tropa_nivel', this.subirNivel, this, 1, 0);
		bottonnivel.fixedToCamera = true;

		cargaAtaque = this.game.add.sprite(895, 22, 'barravidabg');
		cargaAtaque.angle = 90;
		cargaAtaque.width = 60;
		cargaAtaque.height = 6;
		cargaAtaque.fixedToCamera = true;
		
		cargaAtaque1 = this.game.add.sprite(895, 22, 'barracarga');
		cargaAtaque1.angle = 90;
		cargaAtaque1.width = 60;
		cargaAtaque1.height = 6;
		cargaAtaque1.fixedToCamera = true;
		
		marcocargataque= this.game.add.sprite(895, 22, 'marcobarravida');
		marcocargataque.angle = 90;
		marcocargataque.width = 60;
		marcocargataque.height = 6;
		marcocargataque.fixedToCamera = true;
		
		tropa1 = this.game.add.button(787, 22, 'Boton_Tropa_Enano',this.actionOnClick1, this, 1, 0);
		tropa1.width = 60;
		tropa1.height = 60;
		tropa1.fixedToCamera = true;
		tropa1.inputEnabled = true;
		
		ataque1 = this.game.add.button(902, 22, 'Boton_Tropa_Flechas',this.ataqueEspecial, this, 1, 0);
		ataque1.width = 60;
		ataque1.height = 60;
		ataque1.fixedToCamera = true;
		ataque1.inputEnabled = true;

		cursors = this.game.input.keyboard.createCursorKeys();

		// Definicion Grupos de Tropas/////////////////////////////////////////////////////////////////
		this.trasgos = this.game.add.group();
		this.trasgos.enableBody = true;
		// this.trasgos.physicsBodyType = Phaser.Physics.ARCADE;
		this.game.physics.arcade.enable(this.trasgos);

		this.enanos = this.game.add.group();
		this.enanos.enableBody = true;
		// this.enanos.physicsBodyType = Phaser.Physics.ARCADE;
		this.game.physics.arcade.enable(this.enanos);
		// ////////////////////////////////////////////////////////////////////////////////////////////

		panel_Stats = this.game.add.sprite(430, 15, 'Panel_Stats_Enano');
		panel_Stats.width = 310;
		panel_Stats.height = 161;
		panel_Stats.fixedToCamera = true;
		panel_Stats.alpha = 0;
		
		panel_Stats_flecha = this.game.add.sprite(430, 15, 'Panel_Stats_Flecha');
		panel_Stats_flecha.width = 310;
		panel_Stats_flecha.height = 161;
		panel_Stats_flecha.fixedToCamera = true;
		panel_Stats_flecha.alpha = 0;

		// Texto de panel stats////////////////////////////////////////////////////////////////////////
		lvl = this.add.text(640, 108, 'Nivel:  1', {fontSize : '17px',fill : '#EEE8AA'});
		lvl.alpha = 0;
		lvl.fixedToCamera = true;
		
		textvida = this.add.text(552, 73, 'Vida: 100', {fontSize : '17px',fill : '#EEE8AA'});
		textvida.alpha = 0;
		textvida.fixedToCamera = true;
		
		textrecu = this.add.text(552, 143,'Regeneración en: 3s', {fontSize : '17px',fill : '#EEE8AA'});
		textrecu.alpha = 0;
		textrecu.fixedToCamera = true;

		textdaño = this.add.text(552, 108, 'Daño: 35', {fontSize : '17px',fill : '#EEE8AA'});
		textdaño.alpha = 0;
		textdaño.fixedToCamera = true;
		
		textcoste = this.add.text(640, 73, 'Coste: 100', {fontSize : '17px',fill : '#EEE8AA'});
		textcoste.alpha = 0;
		textcoste.fixedToCamera = true;
		
		textnombre = this.add.text(453, 33, 'ENANO -  Cuerpo a cuerpo', {fontSize : '20px',fill : '#000000'});
		textnombre.alpha = 0;
		textnombre.fixedToCamera = true;
		textnombre.stroke = '#EEE8AA';
		textnombre.strokeThickness = 2.5;
		// Texto de panel stats////////////////////////////////////////////////////////////////////////
		
		// Texto de panel stats////////////////////////////////////////////////////////////////////////
		textvida2 = this.add.text(552, 73, 'Coste: 800', {fontSize : '17px',fill : '#EEE8AA'});
		textvida2.alpha = 0;
		textvida2.fixedToCamera = true;
		
		textrecu2 = this.add.text(552, 143,'Regeneración en: 24s', {fontSize : '17px',fill : '#EEE8AA'});
		textrecu2.alpha = 0;
		textrecu2.fixedToCamera = true;

		textdaño2 = this.add.text(552, 108,'Daño: 3 o + enemigos', {fontSize : '17px',fill : '#EEE8AA'});
		textdaño2.alpha = 0;
		textdaño2.fixedToCamera = true;

		textnombre2 = this.add.text(446, 33, 'LLUVIA FLECHAS - Especial', {fontSize : '20px',fill : '#000000'});
		textnombre2.alpha = 0;
		textnombre2.fixedToCamera = true;
		textnombre2.stroke = '#EEE8AA';
		textnombre2.strokeThickness = 2.5;
		// Texto de panel stats////////////////////////////////////////////////////////////////////////
		
		vidaTropa = this.game.add.sprite(780, 555, 'barravidabg');
		vidaTropa.width = 30;
		vidaTropa.height = 5;
		vidaTropa.alpha = 0;
		
		vidaTropa1 = this.game.add.sprite(780, 555, 'barracarga');
		vidaTropa1.width = 30;
		vidaTropa1.height = 5;
		vidaTropa1.alpha = 0;
		
		marcovidaTropa= this.game.add.sprite(780, 555, 'marcobarravida');
		marcovidaTropa.width = 30;
		marcovidaTropa.height = 5;
		marcovidaTropa.alpha = 0;
		
		vidaAliado = this.game.add.sprite(780, 535, 'barravidabg');
		vidaAliado.width = 30;
		vidaAliado.height = 5;
		vidaAliado.alpha = 0;
		
		vidaAliado1 = this.game.add.sprite(780, 535, 'barracarga');
		vidaAliado1.width = 30;
		vidaAliado1.height = 5;
		vidaAliado1.alpha = 0;
		
		marcovidaAliado= this.game.add.sprite(780, 535, 'marcobarravida');
		marcovidaAliado.width = 30;
		marcovidaAliado.height = 5;
		marcovidaAliado.alpha = 0;

		mascara = this.game.add.sprite(0, 0, 'Mascara_Menu_Pausa');
		mascara.alpha = 0;
		mascara.fixedToCamera = true;

		button = this.game.add.button(15, 15, 'Boton_Menu_Pausa', this.actionOnClick, this, 1, 0);
		button.width = 50;
		button.height = 50;
		button.fixedToCamera = true;

		image_menu = this.game.add.sprite(180, 100, 'Menu_Pausa');
		image_menu.width = 640;
		image_menu.height = 462;
		image_menu.fixedToCamera = true;
		image_menu.alpha = 0;

		mascaraFin = this.game.add.sprite(0, 0, 'Mascara_Menu_Pausa');
		mascaraFin.alpha = 0;
		mascaraFin.fixedToCamera = true;

		mascarafinal1 = this.game.add.sprite(180, 100,'Pantalla_Final_Victoria');
		mascarafinal1.width = 640;
		mascarafinal1.height = 462;
		mascarafinal1.alpha = 0;
		mascarafinal1.fixedToCamera = true;

		mascarafinal2 = this.game.add.sprite(180, 100, 'Pantalla_Final_Derrota');
		mascarafinal2.width = 640;
		mascarafinal2.height = 462;
		mascarafinal2.alpha = 0;
		mascarafinal2.fixedToCamera = true;

		button1_menu_Pause = this.game.add.button(-300, -300,'Boton_Vuelta_A_Inicio', this.backToMenu, this, 1, 0);
		button1_menu_Pause.width = 220;
		button1_menu_Pause.height = 100;
		button1_menu_Pause.alpha = 0;
		button1_menu_Pause.fixedToCamera = true;

		button2_menu_Pause = this.game.add.button(-300, -300, 'Boton_Reinicio',this.restart, this, 1, 0);
		button2_menu_Pause.width = 220;
		button2_menu_Pause.height = 100;
		button2_menu_Pause.alpha = 0;
		button2_menu_Pause.fixedToCamera = true;
		
		botonsonido = this.game.add.button(-100, 0, 'sonido', this.sonido, this, 1, 0);
		botonsonido.width = 50;
		botonsonido.height = 50;
		botonsonido.fixedToCamera = true;
		
		botonsonidoff = this.game.add.button(-100, 0, 'sonido_off', this.sonido, this, 1, 0);
		botonsonidoff.width = 50;
		botonsonidoff.height = 50;
		botonsonidoff.fixedToCamera = true;
		
		botonmusica  = this.game.add.button(-100, 0, 'sonido', this.sonidoMusica, this, 1, 0);
		botonmusica.width = 50;
		botonmusica.height = 50;
		botonmusica.fixedToCamera = true;
		
		botonmusicaoff  = this.game.add.button(-100, 0, 'sonido_off', this.sonidoMusica, this, 1, 0);
		botonmusicaoff.width = 50;
		botonmusicaoff.height = 50;
		botonmusicaoff.fixedToCamera = true;
		
		tuto_pantalla = this.game.add.sprite(0, 0, 'Mascara_Tuto');
		tuto_pantalla.alpha = 1;
		tuto_pantalla.fixedToCamera = true;

		//this.game.time.events.loop(3000,this.desinteligenciaArtificial, this); //this.game.rnd.integerInRange(3000, 8000)
		
		this.game.time.events.loop(500,this.comprobarVida, this);
		this.game.time.events.loop(500,this.comprobarVida2, this);
		
		this.game.input.onDown.add(this.unpause, this);

	},
	
	sonido: function()
	{
		if(efectosSonido == true)
		{
			botonsonidoff.x = botonsonido.x;
			botonsonidoff.y = botonsonido.y;
			
			botonsonido.x = -200;
			botonsonido.y = -200;
			
			efectosSonido = false;
		}
		else if(efectosSonido == false)
		{
			botonsonido.x = botonsonidoff.x;
			botonsonido.y = botonsonidoff.y;
			
			botonsonidoff.x = -200;
			botonsonidoff.y = -200;
			
			efectosSonido = true;
		}
	},
	
	sonidoMusica: function()
	{
		if(musicaSonido == true)
		{
			musica.pause();
			
			botonmusicaoff.x = botonmusica.x;
			botonmusicaoff.y = botonmusica.y;
			
			botonmusica.x = -200;
			botonmusica.y = -200;
			
			musicaSonido = false;
		}
		else if(musicaSonido == false)
		{
			musica.play();
			
			botonmusica.x = botonmusicaoff.x;
			botonmusica.y = botonmusicaoff.y;
			
			botonmusicaoff.x = -200;
			botonmusicaoff.y = -200;
			
			musicaSonido = true;
		}
	},

	restart : function() {
		dineros = 2000;
		dineroTexto = 2000;
		dineroia = 2000;
		enanotimer = 0;
		numeroEnanos = 0;
		enAtacando = 0;
		trasAtacando = 0;
		continua = 0;
		showDebug = true;
		niveltropa = 1;
		textvida = 100;
		textdaño = 25;
		
		tuto = false;
		tuto_pantalla.alpha = 1;
		numeroEnemigos = 0;
		flechatimer = 0;
		flechatimer2 = 0;
		basetimer = 0;
		basetimer2 = 0;
		mostrarVida2 = false;
		mostrarVida = false;

		musica.pause();
		musica.destroy();

		this.game.paused = false;
		this.state.start('Game');
	},

	backToMenu : function() {
		dineros = 2000;
		dineroTexto = 2000;
		dineroia = 2000;
		enanotimer = 0;
		numeroEnanos = 0;
		enAtacando = 0;
		trasAtacando = 0;
		continua = 0;
		showDebug = true;
		niveltropa = 1;
		textvida = 100;
		textdaño = 40;
		numeroEnemigos = 0;
		
		tuto = false;
		tuto_pantalla.alpha = 1;
		flechatimer = 0;
		flechatimer2 = 0;
		efectosSonido = true;
		musicaSonido = true;
		basetimer = 0;
		basetimer2 = 0;
		
		musica.pause();
		musica.destroy();

		this.game.paused = false;
		this.state.start('MainMenu');
	},

	unpause : function(event) 
	{
		if (this.game.paused == true) 
		{
			if(tuto == false)
			{
				tuto = true;
				tuto_pantalla.alpha = 0;
				this.game.paused = false;
			}
		} 
		else 
		{
			console.log("Menu despausado");
		}
	},

	update : function() 
	{
		if(tuto == true)
		{
			this.game.paused = false;
		} 
		else if(tuto == false)
		{
			this.game.paused = true;
		}
		
		// movimiento de camara con raton
		if ((this.game.input.mousePointer.x > 940) && (this.game.input.mousePointer.y > 90))
		{
			this.game.camera.x += 6;
		} 
		else if ((this.game.input.mousePointer.x < 60) && (this.game.input.mousePointer.y > 85))
		{
			this.game.camera.x -= 6;
		}

		if (tropa1.input.pointerOver()) 
		{
			panel_Stats.alpha = 1;
			textvida.alpha = 1;
			textdaño.alpha = 1;
			textnombre.alpha = 1;
			textcoste.alpha = 1;
			lvl.alpha = 1;
			textrecu.alpha = 1;
		} 
		else 
		{
			panel_Stats.alpha = 0;
			textdaño.alpha = 0;
			textvida.alpha = 0;
			textnombre.alpha = 0;
			textcoste.alpha = 0;
			lvl.alpha = 0;
			textrecu.alpha = 0;
		}
		
		if (ataque1.input.pointerOver()) 
		{
			panel_Stats_flecha.alpha = 1;
			textvida2.alpha = 1;
			textrecu2.alpha = 1;
			textdaño2.alpha = 1;
			textnombre2.alpha = 1;
		} 
		else 
		{
			panel_Stats_flecha.alpha = 0;
			textvida2.alpha = 0;
			textrecu2.alpha = 0;
			textdaño2.alpha = 0;
			textnombre2.alpha = 0;
		}
		//panel_Stats_flecha
		
		// movimiento de camara con teclado
		if (cursors.left.isDown) 
		{
			this.game.camera.x -= 6;
		} 
		else if (cursors.right.isDown) 
		{
			this.game.camera.x += 6;
		}
		
		if(enanotimer == 1)
		{
			cargaTropa1.width += 0.339;
		}
		else if(enanotimer == 0)
		{
			cargaTropa1.width = 60;
		}
		
		if(flechatimer == 1)
		{
			cargaAtaque1.width += 0.0420;
		}
		else if(flechatimer == 0)
		{
			cargaAtaque1.width = 60;
		}
		
		if(mostrarVida == true)
		{
			var enem = this.trasgos.getFirstExists();
			var trX = enem.x;
			
			vidaTropa.x = trX + 18;
			vidaTropa1.x = trX + 18;
			marcovidaTropa.x = trX + 18;
		}
		
		if(mostrarVida2 == true)
		{
			var aliad = this.enanos.getFirstExists();
			var enX = aliad.x;
			
			vidaAliado.x = enX + 15;
			vidaAliado1.x = enX + 15;
			marcovidaAliado.x = enX + 15;
		}
		
		if(basetimer == 0)
		{
			if(this.enanos.getFirstExists() == undefined)
			{
				if(this.trasgos.getFirstExists() != undefined)
				{
					var trast = this.trasgos.getFirstExists();
					
					if((trast.x <= 430)&&(trast.vida >0))
					{
						this.disparaBase(trast.x);
						
						basetimer = 1;
						
						this.game.time.events.add(Phaser.Timer.SECOND * 0.45,
								function() 
								{
									trast.vida -= 25
									if((trast.vida <=0))
									{
										trast.kill();
										trasAtacando = 0;
										numeroEnemigos--;
										dineros+= 80;
										dineroTexto.setText(dineros);
										
										mostrarVida = false;
										vidaTropa1.alpha = 0;
										vidaTropa.alpha = 0;
										marcovidaTropa.alpha = 0;
										
										vidaTropa1.width = 30;
										this.continua();
									}
								}, this);
						
						this.game.time.events.add(Phaser.Timer.SECOND * 3,
								function() 
								{
									basetimer = 0;
								}, this);
					}
				}
			}
		}
		
		if(basetimer2 == 0)
		{
			if(this.enanos.getFirstExists() != undefined)
			{
				if(this.trasgos.getFirstExists() == undefined)
				{
					var enan1 = this.enanos.getFirstExists();
					
					if((enan1.x >= 1600)&&(enan1.vida > 0))
					{
						this.disparaBase1(enan1.x);
						
						basetimer2 = 1;
						
						this.game.time.events.add(Phaser.Timer.SECOND * 0.45,
								function() 
								{
									enan1.vida -= 25
									
									if((enan1.vida <=0))
									{
										enan1.kill();
										enAtacando = 0;
										numeroEnanos--;
										dineroia+= 80;
										
										mostrarVida2 = false;
										vidaAliado1.alpha = 0;
										vidaAliado.alpha = 0;
										marcovidaAliado.alpha = 0;
										
										vidaAliado1.width = 30;
										this.continua();
									}
								}, this);
						
						this.game.time.events.add(Phaser.Timer.SECOND * 3,
								function() 
								{
									basetimer2 = 0;
								}, this);
					}
				}
			}
		}
		
		this.game.physics.arcade.collide(this.enanos, this.trasgos,this.pruebaColision, null, this);
		this.game.physics.arcade.overlap(this.enanos, this.enanos, this.colisionMismoGrupo, null, this);
		this.game.physics.arcade.overlap(this.trasgos, this.trasgos,this.colisionMismoGrupo2, null, this);
		this.game.physics.arcade.collide(this.enanos, this.base,this.colisionconbase, null, this);
		this.game.physics.arcade.collide(this.trasgos, this.base,this.colisionconbase2, null, this);

	},
	
	comprobarVida:function()
	{
		var trasg = this.trasgos.getFirstExists();
		if(numeroEnemigos != 0)
		{
			if (trasg.vida != 75)
			{
				mostrarVida = true;
				vidaTropa1.alpha = 1;
				vidaTropa.alpha = 1;
				marcovidaTropa.alpha = 1;
				vidaTropa1.width = ((30*trasg.vida)/75);
			}
			else
			{
				mostrarVida = false;
				vidaTropa1.alpha = 0;
				vidaTropa.alpha = 0;
				marcovidaTropa.alpha = 0;
				vidaTropa1.width = 30;
			}
		}
		
	},
	
	comprobarVida2:function()
	{
		var trasg = this.trasgos.getFirstExists();
		var enon = this.enanos.getFirstExists();
		if((numeroEnanos != 0)&&(enon != undefined))
		{
			if (enon.vida != 100)
			{
				mostrarVida2 = true;
				vidaAliado1.alpha = 1;
				vidaAliado.alpha = 1;
				marcovidaAliado.alpha = 1;
				vidaAliado1.width = ((30*enon.vida)/100);
			}
			else
			{
				mostrarVida2 = false;
				vidaAliado1.alpha = 0;
				vidaAliado.alpha = 0;
				marcovidaAliado.alpha = 0;
				vidaAliado1.width = 30;
			}
		}
		
	},

	render : function() 
	{
		this.game.debug.bodyInfo(this.enanos, 500, 300);
		this.game.debug.body(this.enanos.getAll());
	},

	subirNivel : function() 
	{
		if ((dineros > 1000) && (niveltropa == 1)) 
		{
			dineros -= 1000;
			dineroTexto.setText(dineros);
			niveltropa = 2;
			lvl.setText('lvl = ' + niveltropa);
			textvida.setText('vida = ' + 110);
			textdaño.setText('daño = ' + 45);
		}
	},

	generateEnanos : function() 
	{
		console.log(dineros);
		if (niveltropa == 1) 
		{
			var en;
			en = this.enanos.create(370, 535, 'momia');
			en.width = 55.25;
			en.height = 75;
			
			en.vida = 100;
			en.daño = 40;
			en.parado = false;
			
			en.animations.add('walk');
			en.animations.play('walk', 7.5, true);
			en.body.velocity.x = 30;
			
			dineros -= 100;
			dineroTexto.setText(dineros);
			
			enanotimer = 1;
			
			en.body.setSize(50, 91, 5, 5);
			numeroEnanos++;
		} 
		else if (niveltropa == 2) 
		{
			var en2;
			en2 = this.enanos.create(370, 535, 'enanolvl2');
			en2.width = 55.25;
			en2.height = 75;
			
			en2.vida = 110;
			en2.daño = 45;
			
			en2.animations.add('andar');
			en2.animations.play('andar', 7.5, true);
			en2.body.velocity.x = 30;
			
			dineros -= 100;
			dineroTexto.setText(dineros);
			
			enanotimer = 1;
			en2.body.setSize(50, 91, 5, 5);
			numeroEnanos++;
		}
	},

	generateTrasgos : function() 
	{
		numeroEnemigos++;
		dineroia -= 100;
		console.log(dineroia);
		
		var tras;
		tras = this.trasgos.create(950, 561, 'Trasgo_Andando_Sheet'); //1600
		
		tras.width = 70;
		tras.height = 50;
		
		tras.vida = 75;
		tras.daño = 20;
		tras.parado = false;
		
		tras.animations.add('walk');
		tras.animations.play('walk', 7, true);
		
		tras.body.velocity.x = -30;
		tras.body.setSize(50, 50, 5, 5);
	},
	
	desinteligenciaArtificial: function()
	{
		console.log(numeroEnanos);
		
		if(dineroia >= 100)
		{
			switch(numeroEnanos) 
			{
			  case 0:
				  if((dineroia >= 500)&&(numeroEnemigos <= 2)&&(dinero >= 500))
				  {
					  this.generateTrasgos();
				  }
			    break;
			  case 1:
				  if(numeroEnemigos < 1)
				  {
					  this.generateTrasgos();
					  
					  if((dinero > 500)&&(dineroia >= 800))
					  {
						  this.game.time.events.add(Phaser.Timer.SECOND * 1.5,this.generateTrasgos, this);  
					  }
				  }
			    break;
			  case 2:
				  if(numeroEnemigos < 1)
				  {
					  this.generateTrasgos();
					  
					  if((dinero >= 500)&&(dineroia >= 500))
					  {
						  this.game.time.events.add(Phaser.Timer.SECOND * 2,this.generateTrasgos, this);  
					  }
				  }
			    break;
			  case 3:
				  if(numeroEnemigos < 2)
				  {
					  this.generateTrasgos();
					  
					  if(dineroia >= 100)
					  {
						  this.game.time.events.add(Phaser.Timer.SECOND * 1,this.generateTrasgos, this);  
					  }
				  }
				  else if(numeroEnemigos == 2)
				  {
					  if(dineroia >= 700)
					  {
						  this.game.time.events.add(Phaser.Timer.SECOND * 1,this.generateTrasgos, this);  
					  }
				  }
			    break;
			  case 4:
				  if(numeroEnemigos < 3)
				  {
					  this.generateTrasgos();
					  
					  if(dineroia >= 500)
					  {
						  this.game.time.events.add(Phaser.Timer.SECOND * 1,this.generateTrasgos, this);  
					  }
				  }
				  else if(numeroEnemigos == 3)
				  {
					  if(dineroia >= 500)
					  {
						  this.game.time.events.add(Phaser.Timer.SECOND * 1,this.generateTrasgos, this);  
					  }
				  }
			    break;
			  case 5:
				  if(numeroEnemigos < 4)
				  {
					  this.generateTrasgos();
					  
					  if((dineroia >= 900)&&(numeroEnemigos < 3))
					  {
						  this.ataqueEspecial2();
					  }
					  
					  if(dineroia >= 500)
					  {
						  this.game.time.events.add(Phaser.Timer.SECOND * 1,this.generateTrasgos, this);  
					  }
					  
				  }
				  else if(numeroEnemigos == 4)
				  {
					  if(dineroia >= 700)
					  {
						  this.game.time.events.add(Phaser.Timer.SECOND * 1,this.generateTrasgos, this);  
					  }
				  }
			    break;
			  case 6:
				  if(numeroEnemigos < 5)
				  {
					  if((dineroia >= 900)&&(numeroEnemigos < 2))
					  {
						  this.ataqueEspecial2();
					  }
					  
					  this.generateTrasgos();
					  
					  if(dineroia >= 500)
					  {
						  this.game.time.events.add(Phaser.Timer.SECOND * 1,this.generateTrasgos, this);  
					  }
					  
				  }
			    break;
			}
		}
	},
	
	flechadora: function()
	{
		for(var i = 0; i < 50; i++)
		{
			var flech = this.flechas.getAt(i);
			flech.x = 360 + (i*30);
			flech.y = -60;
			flech.angle = 180;
			
			tween = this.game.add.tween(flech).to({y: 600}, this.game.rnd.integerInRange(1700, 2000), Phaser.Easing.Quadratic.In, true);   
			tween.start();
		}
	},
	
	disparaBase: function(ex)
	{
		flecha.alpha= 1;
		
		var xo = ex + 45;
		flecha.angle = 180 - ((Math.tan((xo - 300)/240)) * (180/Math.PI));
		
		tween = this.game.add.tween(flecha).to({x: xo}, 450, Phaser.Easing.Linear.None, true);   
		tween.start();
		tween = this.game.add.tween(flecha).to({y: 580}, 450, Phaser.Easing.Linear.None, true);   
		tween.start();
		
		tween.onComplete.add(function(){flecha.alpha = 0; flecha.x = 300; flecha.y = 340;}, this);
	},
	
	disparaBase1: function(ex)
	{
		flecha2.alpha= 1;
		
		var xo = ex + 45;
		flecha2.angle = 180 - ((Math.tan((xo - 300)/240)) * (180/Math.PI));
		
		tween2 = this.game.add.tween(flecha2).to({x: xo}, 450, Phaser.Easing.Linear.None, true);   
		tween2.start();
		tween2 = this.game.add.tween(flecha2).to({y: 580}, 450, Phaser.Easing.Linear.None, true);   
		tween2.start();
		
		tween2.onComplete.add(function(){flecha2.alpha = 0; flecha2.x = 1720; flecha2.y = 340;}, this);
	},
	
	ataqueEspecial: function()
	{
		if((dineros >= 800)&&(flechatimer == 0))
		{
			ataque1.alpha = 0.3;
			flechatimer = 1;
			cargaAtaque1.width = 0;
			
			this.flechadora();
			
			dineros -= 800;
			dineroTexto.setText(dineros);
			
			this.game.time.events.add(Phaser.Timer.SECOND * 24,this.flechastimer , this);
			
			var muertes = this.game.rnd.integerInRange(3, numeroEnemigos-1);
			console.log("MUERTES A MATAR: " + muertes);
			this.game.time.events.add(Phaser.Timer.SECOND * 2.15,
					function() 
					{
						this.flechas.setAll('y', -60);
						
						for(var i = 0; i < muertes; i++)
						{
							var enemigo = this.trasgos.getFirstExists();
							var enemigo1 = this.trasgos.getRandomExists();
							
							if((enemigo1 != undefined)&&(enemigo1 != enemigo))
							{
								enemigo1.kill();
								numeroEnemigos--;
							}
						}
					}, this);
		}
	},
	
	flechadora2: function()
	{
		for(var i = 0; i < 50; i++)
		{
			var flech = this.flechas2.getAt(i);
			flech.x = 360 + (i*30);
			flech.y = -60;
			flech.angle = 180;
			
			tween2 = this.game.add.tween(flech).to({y: 600}, this.game.rnd.integerInRange(1700, 2000), Phaser.Easing.Quadratic.In, true);   
			tween2.start();
		}
	},
	
	ataqueEspecial2: function()
	{
		if((dineroia >= 800)&&(flechatimer2 == 0))
		{
			flechatimer2 = 1;

			this.flechadora2();
			
			dineroia -= 800;
			
			this.game.time.events.add(Phaser.Timer.SECOND * 24, this.flechastimer2, this);
			
			var muertes = this.game.rnd.integerInRange(3, numeroEnanos-1);
			
			this.game.time.events.add(Phaser.Timer.SECOND * 2.15,
					function() 
					{
						this.flechas2.setAll('y', -60);
						
						for(var i = 0; i < muertes; i++)
						{
							var enemigo = this.enanos.getFirstExists();
							var enemigo1 = this.enanos.getRandomExists();
							
							if((enemigo1 != undefined)&&(enemigo1 != enemigo))
							{
								enemigo1.kill();
								numeroEnanos--;
							}
						}
					}, this);
		}
	},
	
	enanostimer : function() 
	{
		enanotimer = 0;
		tropa1.alpha = 1;
	},
	
	flechastimer : function() 
	{
		flechatimer = 0;
		ataque1.alpha = 1;
	},
	
	flechastimer2 : function() 
	{
		flechatimer2 = 0;
	},

	pelea : function(ena, trasga) 
	{
		if (trasga.vida > 0) 
		{
			if((enAtacando == 0)&&(ena.vida - trasga.daño >0)) 
			{
				enAtacando = 1;
				
				if (niveltropa == 1) 
				{
					ena.loadTexture('enanopegando', 0);
					ena.animations.add('pegar');
					ena.animations.play('pegar', 5, true);
				}
				else if (niveltropa == 2) 
				{
					ena.loadTexture('enanolvl2pegando', 0);
					ena.animations.add('pegarlvl2');
					ena.animations.play('pegarlvl2', 5, true);
				}

				this.game.time.events.add(Phaser.Timer.SECOND * 0.60,
						function() {
					
							trasga.vida -= ena.daño;
							if(efectosSonido == true)
							{
								sonidoHacha.play();
							}
							
							console.log('vida trasgos' + trasga.vida);
							if (trasga.vida <= 0) 
							{
								trasga.kill();
								numeroEnemigos--;
								
								mostrarVida = false;
								vidaTropa1.alpha = 0;
								vidaTropa.alpha = 0;
								marcovidaTropa.alpha = 0;
								vidaTropa1.width = 30;
								
								dineros += 80;
								dineroTexto.setText(dineros);
								
								enAtacando = 0;
								trasAtacando = 0;
								
								ena.body.velocity.x = 30;
								
								this.continua();
							}
							else
							{
								this.game.time.events.add(Phaser.Timer.SECOND * 1.40,
										function() 
										{
											enAtacando = 0;
											ena.body.velocity.x = 1;
											
										}, this);
							}
						}, this);
			}
		}
		
		if (ena.vida > 0) 
		{
			if (trasAtacando == 0)
			{
				trasAtacando = 1;
				
				trasga.loadTexture('Trasgo_Pegando', 0);
				trasga.animations.add('pegar');
				trasga.animations.play('pegar', 10, true);
				
				if(efectosSonido == true)
				{
					sonidoNavaja.play();
				}
				
				this.game.time.events.add(Phaser.Timer.SECOND * 0.3,
						function() 
						{
							ena.vida -= trasga.daño;
							console.log('vida enano: ' + ena.vida);
							if (ena.vida <= 0)
							{
								ena.kill();
								numeroEnanos--;
								
								mostrarVida2 = false;
								vidaAliado1.alpha = 0;
								vidaAliado.alpha = 0;
								marcovidaAliado.alpha = 0;
								vidaAliado1.width = 30;
								
								dineroia += 80;
								
								trasAtacando = 0;
								enAtacando = 0;
								
								trasga.body.velocity.x = -30;
								this.continua();
							}
							else
							{
								this.game.time.events.add(Phaser.Timer.SECOND * 0.7,
										function() 
										{
											trasAtacando = 0;
											trasga.body.velocity.x = -1;
											
										}, this);
							}
						}, this);
				
				
			}
		}
	},

	continua : function() 
	{
		console.log('0 0 0 0 0 0 0 0 ');
		
		this.enanos.setAll('body.velocity.x', 30);
		this.enanos.setAll('parado', false);
		
		if (niveltropa == 1) 
		{
			this.enanos.callAll('loadTexture', null, 'momia', 0);
			this.enanos.callAll('play', null, 'walk', 7.5, true);
		}
		else if (niveltropa == 2) 
		{
			this.enanos.callAll('loadTexture', null, 'enanolvl2', 0);
			this.enanos.callAll('play', null, 'andar', 7.5, true);
		}
		
		this.trasgos.setAll('body.velocity.x', -30);
		this.trasgos.setAll('parado', false);
		this.trasgos.callAll('loadTexture', null, 'Trasgo_Andando_Sheet', 0);
		this.trasgos.callAll('play', null, 'walk', 7, true);
	},

	pruebaColision : function(enan, trasg) 
	{
		if((enAtacando == 0)&&(enan.parado == false))
		{
			console.log('* * * * * * * * *');
			enan.animations.stop(null, true);
			enan.body.velocity.x = 0;
			enan.parado = true
		}
		
		if((trasAtacando == 0)&&(trasg.parado == false))
		{
			trasg.animations.stop(null, true);
			trasg.body.velocity.x = 0;
			trasg.parado = true;
		}

		this.pelea(enan, trasg);
	},

	colisionMismoGrupo : function(grupo, grupo1) 
	{
		if((grupo.parado == true)&&(grupo1.parado == false))
		{
			console.log('------------------------');
			grupo1.animations.stop(null, false);
			grupo1.body.velocity.x = 0;
			grupo1.parado = true;
			
			grupo.body.velocity.x = 0;
		}
		else if((grupo.parado == false)&&(grupo1.parado == true))
		{
			console.log('++++++++++++++++++++++++');
			grupo.animations.stop(null, false);
			grupo.body.velocity.x = 0;
			grupo.parado = true;
			
			grupo1.body.velocity.x = 0;
		}
	},

	colisionMismoGrupo2 : function(grupo, grupo1) 
	{
		if((grupo.parado == true)&&(grupo1.parado == false))
		{
			console.log('------------------------');
			grupo1.animations.stop(null, false);
			grupo1.animations.frame = 1;
			grupo1.body.velocity.x = 0;
			grupo1.parado = true;
			
			grupo.body.velocity.x = 0;
		}
		else if((grupo.parado == false)&&(grupo1.parado == true))
		{
			console.log('++++++++++++++++++++++++');
			grupo.animations.stop(null, false);
			grupo.animations.frame = 1;
			grupo.body.velocity.x = 0;
			grupo.parado = true;
			
			grupo1.body.velocity.x = 0;
		}
		
	},

	colisionconbase : function(tropa, base) {
		// tropa.animations.stop(null, true);
		console.log('APOSJDPASJDPASODJPASODJAPSDJASPDJASPDJASPDKJASPDKJASPDIJASD');
		tropa.body.velocity.x = 0;
		tropa.parado = true;
		this.peleabase(tropa, base);
	},

	peleabase : function(tropa, base) 
	{
		console.log('AQUI SI ');
		if ((enAtacando == 0)&&(base.vida > 0))
		{
			console.log('AQUI NO');
			enAtacando = 1;
			
			if (niveltropa == 1) {
				tropa.loadTexture('enanopegando', 0);
				tropa.animations.add('pegar');
				tropa.animations.play('pegar', 5, true);
			}
			else if (niveltropa == 2) {
				tropa.loadTexture('enanolvl2pegando', 0);
				tropa.animations.add('pegarlvl2');
				tropa.animations.play('pegarlvl2', 5, true);
			}
			
			this.game.time.events.add(Phaser.Timer.SECOND * 0.60, function()
			{
				if(efectosSonido == true)
				{
					sonidoHacha.play();
				}
				
				base.vida -= tropa.daño;
				barravida2.width -= (tropa.daño/10);

				this.game.time.events.add(Phaser.Timer.SECOND * 1.40, function() 
						{
							enAtacando = 0;
							tropa.body.velocity.x = 1;
						}, this);
				
			}, this);
		}
		
		if (base.vida <= 0) {
			tropa.animations.stop(null, true);
			this.finalpartida1();
		}
	},

	colisionconbase2 : function(tropa, base) {
		// tropa.animations.stop(null, true);
		tropa.body.velocity.x = 0;
		tropa.parado = true;
		this.peleabase2(tropa, base);
	},

	peleabase2 : function(tropa, base) 
	{
		if((trasAtacando == 0)&&(base.vida > 0)) 
		{
			trasAtacando = 1;
			
			tropa.loadTexture('Trasgo_Pegando', 0);
			tropa.animations.add('pegar');
			tropa.animations.play('pegar',10, true);
			
			this.game.time.events.add(Phaser.Timer.SECOND * 0.30, function() 
			{
				base.vida -= tropa.daño;
				barravida1.width -= (tropa.daño/10);

				this.game.time.events.add(Phaser.Timer.SECOND * 0.70, function() 
						{
							trasAtacando = 0;
							tropa.body.velocity.x = -1;
						}, this);
				
			}, this);
		}
		
		if (base.vida <= 0) 
		{
			tropa.animations.stop(null, true);
			this.finalpartida2(this);
		}
	},

	actionOnClick : function() // Boton, provisional, para volver al menu de inicio
	{
		if (this.game.paused === true)
		{
			this.game.paused = false;
			image_menu.alpha = 0;
			mascara.alpha = 0;
			
			if(efectosSonido == false)
			{
				botonsonidoff.x = -200;
				botonsonidoff.y = -200;
			}
			else if(efectosSonido == true)
			{
				botonsonido.x = -200;
				botonsonido.y = -200;
			}
			
			if(musicaSonido == false)
			{
				botonmusicaoff.x = -200;
				botonmusicaoff.y = -200;
			}
			else if(musicaSonido == true)
			{
				botonmusica.x = -200;
				botonmusica.y = -200;
			}
			//musicaSonido
			
			button1_menu_Pause.x = -200;
			button1_menu_Pause.y = -200;
			button1_menu_Pause.alpha = 0;

			button2_menu_Pause.x = -200;
			button2_menu_Pause.y = -200;
			button2_menu_Pause.alpha = 0;
		} 
		else 
		{
			this.game.paused = true;
			image_menu.alpha = 1;
			mascara.alpha = 1;

			if(efectosSonido == false)
			{
				botonsonidoff.x = image_menu.x + 110;
				botonsonidoff.y = image_menu.y + 215;
			}
			else if(efectosSonido == true)
			{
				botonsonido.x = image_menu.x + 110;
				botonsonido.y = image_menu.y + 215;
			}
			
			if(musicaSonido == false)
			{
				botonmusicaoff.x = image_menu.x + 110;
				botonmusicaoff.y = image_menu.y + 150;
			}
			else if(musicaSonido == true)
			{
				botonmusica.x = image_menu.x + 110;
				botonmusica.y = image_menu.y + 150;
			}
			
			button1_menu_Pause.x = image_menu.x + 100;
			button1_menu_Pause.y = image_menu.y + 280;
			button1_menu_Pause.alpha = 1;

			button2_menu_Pause.x = image_menu.x + 320;
			button2_menu_Pause.y = image_menu.y + 280;
			button2_menu_Pause.alpha = 1;
		}
	},
	
	finalpartida1 : function() 
	{
		mascarafinal1.alpha = 1;
		mascaraFin.alpha = 1;
		musica.stop();

		this.game.time.events.add(Phaser.Timer.SECOND * 5, this.backToMenu,this);
	},

	finalpartida2 : function() 
	{
		mascarafinal2.alpha = 1;
		mascaraFin.alpha = 1;
		musica.stop();
		finJuego = true;

		this.game.time.events.add(Phaser.Timer.SECOND * 5, this.backToMenu, this);
	},

	actionOnClick1 : function() // Prueba de spawn de tropas aliadas
	{
		if (dineros >= 100 && enanotimer == 0) 
		{
			this.generateEnanos();
			tropa1.alpha = 0.3;
			cargaTropa1.width = 0;
			this.game.time.events.add(Phaser.Timer.SECOND * 3, this.enanostimer, this);
			
		}
	}
};