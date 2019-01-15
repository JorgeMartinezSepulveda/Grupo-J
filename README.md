# Grupo-J-fase4-5-
Nuevo repositorio creado para la ultima fase del proyecto, debido a los numerosos problemas que hemos experimentado en el anterior repositorio.

# Grupo-J 
## "Dagor Dagorath: El legado de Iluvatar"

**- DESCRIPCIÓN DE LA HISTORIA -**

* La Dagor Dagorath es la batalla final en la que se enfrentaran Morgoth y su sequito de seres malignos (como Saurom, los nueve Nazgul, orcos, trolls, dragones, balrog...) contra los Valar junto a su ejército y los Pueblos Libres de la Tierra Media (Elfos, Hombres y Enanos). Según se cuenta en la leyenda original, los Valar conseguirán acabar con Morgoth y Saurom tras arduas batallas y Arda quedara destruida. Nuevamente los Ainur (los primeros seres que fueron creados por Iluvatar, espíritus inmortales cambiaforma que se dividen en Valar y Maiar) cantaran junto a Elfos y Hombres el tema que será conocido como Arda Redimida, creando así el nuevo mundo. 

* [Información extra del Dagor Dagorath](http://esdla.wikia.com/wiki/Dagor_Dagorath)

**- IN-GAME -**

* Hablando del juego y sus mecánicas, nuestro objetivo como jugador será destruir la base enemiga. Para ello contaremos con una serie de tropas las cuales costarán un valor x según la calidad de la tropa y tendrán un tiempo x de recarga que dependerá de la tropa de igual manera. Nosotros como jugador lo que podemos hacer es elegir la tropa que queremos lanzar al combate, administrar el dinero que ganamos y mejorar las tropas que tenemos, ya que el combate en si es automático, conforme nuestras tropas van encontrando adversarios van atacándose mutuamente. Podremos jugar en solitario o en línea contra otro jugador,
* La estetica del juego sera pixelart y las mejoras de las tropas cambiaran la apariencia de las mismas.

**- FAQ -**

***¿Podremos jugar con Morgoth y con los Valar?*** 

* En un principio solo podremos jugar con el bando de los Pueblos Libres y demostrar si somos capaces de derrotar a las fuerzas de Morgoth.  

* [Información extra de los Valar](http://esdla.wikia.com/wiki/Valar)
 

***¿Habrá más de una fase o edad, o solo se podrá jugar una misma batalla(fase)?*** 

* Podremos jugar una sola batalla, la batalla final en la que se decidirá el destino de Arda y de sus moradores. 

 

***¿Cuál será la moneda de cambio con la que se pagaran las tropas?***

* Aunque en Arda existan monedas de cobre, de hierro, de oro o de mithril, en el juego dispondremos de una moneda neutra con la que podremos comprar nuestras tropas y/o mejorarlas.  

 

***¿Habrá un ataque especial, en caso afirmativo, cual es el de cada uno?***

* Ataque especial como tal no habrá, pero si tendremos una tropa especial más fuerte y, por tanto, más cara, que podremos usar el número de veces que queramos, aunque limitado por el tiempo de carga de la tropa y del dinero del que dispongamos en ese momento. 

 

***¿Qué tropas tendrá cada ejército (jinete, espadachín y arquero)?***

* Para el ejercito que en un principio manejaremos nosotros, el de los Valar, tendremos un enano que blandirá un hacha (ataque cuerpo a cuerpo), un elfo que disparará un arco (ataque a distancia) y un rohirrim con lanza (humano a caballo). La tropa especial de nuestro ejército será un Ent (árbol inteligente capaz de desplazarse). 

* [Rohirrim](http://esdla.wikia.com/wiki/Rohirrim)

* [Ent](http://esdla.wikia.com/wiki/Ents)

* Para el ejército de Morgoth tendremos, primero un trasgo con espada (cuerpo a cuerpo), un haradrim, morador del desierto, con un arco (a distancia) y un orco montado en un huargo (ataca el huargo). La tropa especial del ejercito obscuro será un troll de las cavernas. 

* [Huargo](http://esdla.wikia.com/wiki/Huargos)

* [Troll de las cavernas](http://esdla.wikia.com/wiki/Troll_de_las_cavernas)
 

***¿Podremos mejorar nuestras tropas o, podremos desbloquear más tropas?***

* En principio podremos mejorar nuestras tropas. Usando monedas que vamos ganando durante la batalla, podremos subir los stats de nuestras tropas, tanto el ataque como la vida o el tiempo de carga de la tropa, por lo que tendrás que administrar bien tu dinero.
---
***- INTEGRANTES DEL EQUIPO DE DESARROLLO -***

|Nombre y Apellidos       |Correo de la universidad         |Cuenta de GitHub       |
|-------------------------|---------------------------------|-----------------------|
| Jorge Martinez Sepulveda|j.martinezse.2016@alumnos.urjc.es|JorgeMartinezSepulveda |
| Jesus Ayala Matarín     |j.ayala.2016@alumnos.urjc.es     |JesusAyalaMatarin      |
| Ruben Velasco Jimenez   |r.velasco.2016@alumnos.urjc.es   |rubenvj                |

## Fase 2

* En la esta segunda fase hemos implementado una parte del juego que permite al jugador controlas las tropas alidas de los Valar contra el ejercito del malvado Morgoth.
 Lo primer nada mas iniciar el juego es el menu principal donde se pueden observar tres opciones, jugar , online y controles. La funcion online aun no esta programada se usara para futuras fases en la parte de servidor.
 
 ![futyk](https://user-images.githubusercontent.com/43203256/48100780-f3b18e80-e224-11e8-8304-b74fe16c48b6.PNG)
 
 * El menu tiene una animacion de fondo con el mapa de arda moviendose por la pantalla, y tambien incluye la referencia al creador de la musica utilizada en el menu y la posterior animacion. (https://www.youtube.com/user/unholydoom23).
 
 * Al hacer click en controles se muestra una pestaña explicativa de los controles basicos.
 
 ![sadrh](https://user-images.githubusercontent.com/43203256/48100956-a5e95600-e225-11e8-8bd3-54dcc7b2c596.PNG)
 
 * Al pulsar jugar, empezara una animacion con una pequeña descripcion de la historia del juego, esta animacion see puede saltar en case de no querer verla, en la flecha situada en la parte superior derecha de la pantalla.
 
 ![sdfgh](https://user-images.githubusercontent.com/43203256/48101069-185a3600-e226-11e8-9a55-6f59c686f389.PNG)

 * Una vez termina la animacion, o el jugador la salta, empieza el juego. El escenario tiene un estilo pixel art como los personajes y tiene representa las dos fortalezas, la aliada de los Valar (Minas Tirith) y la enemiga de Morgoth (Minas Morgul).
 
 Minas Tirith

![erh](https://user-images.githubusercontent.com/43203256/48100580-2dce6080-e224-11e8-83d0-4f5321ddc0cf.PNG)

Minas Morgul

![shd](https://user-images.githubusercontent.com/43203256/48101254-ac2c0200-e226-11e8-873c-df57ac30269b.PNG)

* En esta version del juego solo es posible existen dos tropas, los enanos del bando de los Valar y los trasgos de parte de Morgoth.

![enano_andando_sheet](https://user-images.githubusercontent.com/43203256/48101676-24df8e00-e228-11e8-9f6e-f621002fa3a9.png)

![trasgo_andando_sheet](https://user-images.githubusercontent.com/43203256/48101756-8142ad80-e228-11e8-8153-5f71fa2d312a.png)

* En la ventana de juego se puede apreciar un boton de pause que lleva al menu principal y permite reiniciar la partida, el dinero del que dispone le jugador, que usara para sacar tropas y mejorarlas, un boton para comprar enanos y otro para mejorarlos, y si pone el cursor encima de una base indicara su vida.

![rwtj](https://user-images.githubusercontent.com/43203256/48101424-42f8be80-e227-11e8-84e5-9b605963ea61.PNG)

* La musica durante el juego es:
Canción: Dark Ages (Choir)-Extreme Music
Artista: Nick Phoenix / Thomas Bergersen
Álbum: Nemesis Vol.1 Action
(https://www.youtube.com/watch?v=rl7i_YxDl-8)

* En futuras fases se pretende mejorar el sitema de combate para que sea mas fluido y ampliar el numero de tropas del juego (tanto de los Valar como de Morgoth).

## Fase 3

* Lo primero que mostramos es el menu principal en el que hay tres botones, uno para jugar el juego en offline, otro que abre la interfaz del modo online y el ultimo para ver los controles:

![futyk](https://user-images.githubusercontent.com/43203256/48100780-f3b18e80-e224-11e8-8304-b74fe16c48b6.PNG)

 * Al pulsar en controles se muestra una pestaña explicativa de los controles basicos.
 
 ![sadrh](https://user-images.githubusercontent.com/43203256/48100956-a5e95600-e225-11e8-8bd3-54dcc7b2c596.PNG)
 
 * Al pulsar jugar, empezara una animacion con una pequeña descripcion de la historia del juego, esta animacion see puede saltar en case de no querer verla, en la flecha situada en la parte superior derecha de la pantalla.
 
 ![sdfgh](https://user-images.githubusercontent.com/43203256/48101069-185a3600-e226-11e8-9a55-6f59c686f389.PNG)

* Cuando acaba (o lo salta el jugador) llega al estado Game donde se puede jugar en modo un jugador

![rwtj](https://user-images.githubusercontent.com/43203256/48101424-42f8be80-e227-11e8-84e5-9b605963ea61.PNG)

* Al pulsar en Online nos llevara a una interfaz donde escogeremos un bando y nos preguntara por nuestro nombre y nuestra elecion del bando con el que queremos luchar. El servidor muestra los jugadores conectados, el bando al que pertenezen, y notifica si el servidor se encuentra disponible o no y permite a los jugadores entren en partida, notificando si alguno de los mismos abandona en mitad de la partida. Tambien el servidor puede leer el un fichero con informacion relevante del juego para mostrala a los jugadores.

![whatsapp image 2018-11-28 at 00 20 11](https://user-images.githubusercontent.com/43203256/49118205-b7150800-f2a3-11e8-8069-a631b06b8f97.jpeg)

* Añadido Diagrama de Navegacion por los estados del juego

![diagramanavegacion](https://user-images.githubusercontent.com/43203217/48812164-52046400-ed31-11e8-810c-07ba2e286900.png)

# Diagrama de Clases

* En la implementacion de nuestro servidor hemos usado 3 clases: 

![diagramaclases](https://user-images.githubusercontent.com/43203217/49114096-9cd52d00-f297-11e8-8ef1-23a5b6599c0a.png)

## Fase 4
* En la cuarta fase he implementado el uso de WebSockets para especialmente el uso "In-Game". Con esto me refiero a que he respetado el codigo de api-rest que ya habia para la conexion previa al juego y he añadido los websockets para el juego en si. A demas se ha ampliado api-rest para introducir una contraseña y poder logear un nombre con cierta seguridad.
Cuando entramos al juego, usamos los mensajes de websocket para trasmitir cuando un jugador clicka en uno de sus botones (lanzar tropa o ataque especial) y:

   * En el caso de la tropa, enviamos un mensaje al servidor con el nombre de "tropa_En" o "tropa_Tras" el cual lo enviara a su vez al        jugador contricante, este lo recibira e instantaneamente lanzara una tropa contricante.
   * En el caso del ataque especial es un poco mas complejo, primero envia un mensaje de confirmacion que indica que se ha usado el          ataque especial al jugador contrincante, y despues, va enviando mensajes que contienen la posicion del jugador que se ha de              eliminar, ya que la funcion del ataque selecciona un numero de enemigos al azar, por lo tanto mandamos la posicion del enemigo que      ha matado, y como es la misma que la del jugador contrincante, eliminara el mismo numero de enemigos y en la misma posicion.

* Pantalla final del Lobby Online (sin logear y con user de ejemplo logeado):

![pantalla online](https://user-images.githubusercontent.com/43203179/51147270-f1d5fe00-1859-11e9-9e25-961edbbec1b2.png)
(Las mejoras seran comentadas en la fase 5)

![pantalla online2](https://user-images.githubusercontent.com/43203179/51147478-ab34d380-185a-11e9-8bfa-2aa0c189a48d.png)


* Pantalla de juego online:

![pantalla online3](https://user-images.githubusercontent.com/43203179/51148886-22209b00-1860-11e9-874b-34e90c9efefa.png)

# Diagrama de Clases (actualizado):


## Fase 5
* Para la fase cinco opcional, se ha subido el videojuego offline a itch.io, el cual podra encontrar en el siguiente enlace:

[Dagor Dagorath](https://heavydrummer.itch.io/dagor-dagorath)

* En primer lugar, realice una serie de mejoras al juego offline y online:

    * 1. Se añadio un nuevo ataque especial para tanto jugador como la IA
    * 2. Se añadieron unas barras de carga para las tropas y conocer el tiempo que le queda para poder lanzarla de nuevo
    * 3. Se añadieron barras de vida para los personajes que estan siendo atacados.
    * 4. Se arreglo el combate de manera reseñable y satisfactoria, sin generar problemas de colision de ninguna manera
    * 5. Se añadio ataque a las bases para que no nos veamos desprotegidos aun que no tengamos tropas (tambien para la IA)
    * 6. Se añadieron efectos de sonido al combate
    * 7. Se añadieron botones a la pausa para poder activar o desactivar tanto la musica como los efectos añadidos
    * 8. se creo una IA real, que tiene en cuenta su dinero, el del jugador, el numero de aliados del jugador y su numero de aliados;            teniendo en cuenta esto, actuara.
    * 9. Se añadio una pantalla inicial de tutorial para guiar al jugador en el primer contanto con el juego
    
 Ejemplos de lo expuesto:
 
 (pantalla tutorial)
 ![pantalla offline](https://user-images.githubusercontent.com/43203179/51150418-834b6d00-1866-11e9-803f-4fdcbc42c803.png)
 
 
 (pantalla pausa)
 ![pantalla offline2](https://user-images.githubusercontent.com/43203179/51150436-9cecb480-1866-11e9-8db4-a9ad423665c4.png)

 
 (panel de tropas y ataques)
 ![pantalla offline3](https://user-images.githubusercontent.com/43203179/51150459-aece5780-1866-11e9-9fe5-cae32cc522a0.png)
 
 
 * Estas fueron unas primeras implementaciones que se realizaron de cara a la fase cinco. Tras subir un primer prototipo a itch.io en modod restringido, se compartio el enlace con varias personas para hacer la parte del Beta-Testing, y se encontraron numerosos bugs:
    
    * Mensaje textual: 'otra cosa que me ha pasado es que unos enanos despues de atacar en vez de andar iban deslizandose jajaja'
    * Mensaje textual: 'creo que cuando hago unos 9/8 enanos dejan de aparecer orcos'
    * Mensaje textual: 'creo que hay otro bug, que lanza las flechas solas'
    * Mensaje de voz: 'el mismo problema de los 8/9 enanos, pero cuando se han ido muriendo y ha llegado a seis, la ia se ha puesot a         sacar orcos pero tambien ha tirado el ataque especial, y al morir todos los enanos, los enemigos se han bugeao y me ha crasheao'
    
Todos estos son mensajes reales que me comunicaron los jugadores por mensajes privados, ya que solo lo comparti con dos/tres             personas de relacion intima para que me comunicasen los errores, tras esto, procedi a arreglar los errores. Casi todos eran             generados por dos cosas: 
    
   * La primera fue por que el codigo no contemplana en su totalidad la subida de nivel de los enanos, por lo tanto al subirlos, habia         problemas con las colisiones y la IA
   * La siguiente es que la IA solo contemplaba si habia entre 0 a 6 enanos en juego, si habia mas, no hacia nada, por lo tanto si se         sacaban mas enanos la IA no hacia nada
    
* Todos los errores que me fueron comentados han sido arreglados mas otros, como que si se lanzaba nuestro ataque especial sin que hubiese mas de tres enemigos, una funcion entraba en bucle y crasheaba el juego, pero esto tambien ha sido arreglado.

# Instrucciones precisas para ejecutar la aplicación

* Para compilar se correra el archivo DagorDagorathApplication.java como una aplicación de java y esto iniciará el servidor. Para ejecutar el jar escribiremos en el simbolo del sistema la linea java -jar dagorDagorath-0.0.1-SNAPSHOT.jar desde el directorio target de nuestro proyecto. Cada vez que se inicia el servidor se ha de usar localhost:8090 para aceder al juego, si es el ordenador que esta corriedo el servidor.

