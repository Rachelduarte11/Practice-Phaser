


/* START OF COMPILED CODE */
export default class MainScene extends Phaser.Scene {

    constructor() {
        super("MainScene");

        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }

    preload() {
        // Carga el tilemap JSON
        this.load.tilemapTiledJSON("twelve", "assets/tilemaps/twelve.json", null, Phaser.Tilemaps.TILED_JSON);

        // Carga las imágenes del tileset
        this.load.image("tileset-offices", "assets/tilesets/tileset-offices.png");
        this.load.image("tematic", "assets/tilesets/tematic.png");

        // Carga los sprites para los niveles y personajes
        this.load.image("level-1", "assets/field/level-1.png");
        this.load.image("level-2", "assets/field/level-2.png");
        this.load.image("level-3", "assets/field/level-3.png");
        this.load.image("rest", "assets/field/rest.png");

        // Character One Animations
        this.load.json('one_map', 'assets/character_one/character_one_anim.json');
        this.load.atlas('character_one', 'assets/sprites/character_second.png', 'assets/character_one/character_one_atlas.json');
    }
    /** @returns {void} */


    editorCreate() {

        // twelve
        const twelve = this.add.tilemap("twelve");
        twelve.addTilesetImage("tileset-offices");
        twelve.addTilesetImage("tematic");


        // Ajusta los valores para cambiar la posición del mapa
        const mapOffsetX = 0; // Ajustar si es necesario
        const mapOffsetY = 0;
        // pisos_1
        twelve.createLayer("pisos", ["tileset-offices"], mapOffsetX, mapOffsetY);

        // paredes_1
        const wall = twelve.createLayer("paredes", ["tileset-offices", "tematic"], mapOffsetX, mapOffsetY);
        wall.setDepth(12);
        // decoracion
        const decoration = twelve.createLayer("decoracion2", ["tematic", "tileset-offices"], mapOffsetX, mapOffsetY);
        decoration.setDepth(13);
        // decoracion_1
        const decoration2 = twelve.createLayer("decoracion", ["tileset-offices", "tematic"], mapOffsetX, mapOffsetY);
        decoration2.setDepth(14);


        this.twelve = twelve;

        this.events.emit("scene-awake");
    }

    /** @type {Phaser.Tilemaps.Tilemap} */
    twelve;
    /* START-USER-CODE */

    // Write your code here

    create() {
        this.editorCreate();

        const startX = 500; // Ajusta según el punto de inicio
        const startY = 5880;

        const animations = this.cache.json.get('one_map').anims;
        // Crear animaciones en Phaser
        animations.forEach((animData) => {
            this.anims.create({
                key: animData.key,
                frames: this.anims.generateFrameNames('character_one', {
                    frames: animData.frames.map(frame => frame.frame),
                }),
                frameRate: animData.frameRate,
                repeat: animData.repeat,
            });
        });



        this.character_one = this.physics.add.sprite(startX, startY, "character_one", 1);
        this.character_one.setOrigin(1, 0.5);
        this.character_one.setDepth(10);
        this.character_one.setScale(1.2);
        this.character_one.setVelocityX(200); 
        this.character_one.anims.play('walk_right'); 


        // const mapHeight = 5200;
        // const mapWidth = 1000;
        // this.physics.world.setBounds(0, 0, mapWidth, mapHeight);
        // Configurar la cámara para seguir al personaje
        this.cameras.main.setBounds(0, 0, this.twelve.widthInPixels, this.twelve.heightInPixels);
        // Configurar la cámara para seguir al personaje en todo el mapa
        this.cameras.main.startFollow(this.character_one);
        this.cameras.main.setBounds(0, 0, this.twelve.widthInPixels, this.twelve.heightInPixels);
        this.cameras.main.setZoom(0.8);

        // Definir posiciones de casillas específicas


        // Configura el grupo de casillas
        this.casillasGroup = this.physics.add.staticGroup();

        this.dayPositions = [
            { x: 570, y: 5900, type: "level-3", id: 1 },
            { x: 650, y: 5900, type: "level-3", id: 2 },
            { x: 730, y: 5900, type: "level-3", id: 3 },
            { x: 810, y: 5900, type: "level-3", id: 4 },
            { x: 890, y: 5900, type: "level-3", id: 5 },
            { x: 970, y: 5900, type: "rest", id: 6 },
        
            //domingo
            { x: 1050, y: 5820, type: "level-3", id: 8 },
            { x: 970, y: 5820, type: "level-2", id: 9 },
            { x: 890, y: 5820, type: "level-2", id: 10 },
            { x: 810, y: 5820, type: "level-2", id: 11 },
            { x: 730, y: 5820, type: "level-2", id: 12 },
            { x: 650, y: 5820, type: "rest", id: 13 },
        
            //domingo
            { x: 570, y: 5740, type: "level-2", id: 15 },
            { x: 650, y: 5740, type: "level-2", id: 16 },
            { x: 730, y: 5740, type: "level-2", id: 17 },
            { x: 810, y: 5740, type: "level-2", id: 18 },
            { x: 890, y: 5740, type: "level-3", id: 19 },
            { x: 970, y: 5740, type: "rest", id: 20 },
        
            //domingo
            { x: 1050, y: 5670, type: "level-1", id: 22 },
            { x: 970, y: 5670, type: "level-1", id: 23 },
            { x: 890, y: 5670, type: "level-1", id: 24 },
            { x: 810, y: 5670, type: "level-1", id: 25 },
            { x: 730, y: 5670, type: "level-1", id: 26 },
            { x: 650, y: 5670, type: "rest", id: 27 },
        
            //domingo
            { x: 570, y: 5600, type: "level-2", id: 29 },
            { x: 650, y: 5600, type: "level-2", id: 30 },
        
            {  x: 815, y: 5600, id: 366 },// colision transparente

            //February// colision transparente

            { x: 800, y: 5400, type: "level-2", id: 31 },
            { x: 880, y: 5400, type: "level-2", id: 32 },
            { x: 960, y: 5400, type: "level-3", id: 33 },
            { x: 1040, y: 5400, type: "rest", id: 34 },
        ];
        
        this.restPositions = [
            { x: 1050, y: 5900, type: "rest", id: 7 },
            { x: 570, y: 5820, type: "rest", id: 14 },
            { x: 1050, y: 5740, type: "rest", id: 21 },
            { x: 570, y: 5670, type: "rest", id: 28 },
            { x: 1120, y: 5400, type: "rest", id: 35 },
        ];


        this.dayPositions.forEach((pos) => {
            const casilla = this.casillasGroup.create(pos.x, pos.y, pos.type);
            casilla.setData('id', pos.id);
            if (pos.id === 366) {
                casilla.setAlpha(0); 
            }
            casilla.refreshBody();
        });

        this.restPositions.forEach((pos) => {
            const casilla = this.casillasGroup.create(pos.x, pos.y, pos.type);
            casilla.setData('id', pos.id);
            casilla.refreshBody();
        });

        // Colisión entre personaje y casillas
        this.physics.add.overlap(this.character_one, this.casillasGroup, this.handleCollision, null, this);

        // Variables de control de movimiento
        this.direction = "right"; 
        this.lastHorizontalDirection = "right";
        this.isMovingUp = false;
        this.casillaCount = 0;
        this.visitedCasillas = new Set();

        this.upwardPointIds = [7, 14, 21, 28]; 
        this.oppositeDirectionIds = [8, 15, 22, 29];
        this.lastCollisionId = null;
        this.nextExpectedId = 1;
    }

    setDiceRoll(value) {
        this.diceRollResult = value;
        this.currentCasillaId = 10;
    }


    getCurrentCasillaId(number) {

        const currentPosition = number;
        return currentPosition ? currentPosition.id : null;
    }

    handleCollision(character, casilla) {
        const casillaId = casilla.getData('id');
        const tolerance = 16; // Ajusta esta tolerancia según lo que necesites
        let pointdices = 10;
        let countField = 0;

        // Obtener la posición actual del personaje
        const currentX = Math.round(character.x);
        const currentY = Math.round(character.y + character.height / 2);

        // Obtener la posición exacta de la casilla con la que el personaje colisionó
        const tileX = Math.round(casilla.x);
        const tileY = Math.round(casilla.y);

        // Verificar si el personaje está dentro de la tolerancia del centro de la casilla
        const withinTolerance = Math.abs(currentX - tileX) < tolerance && Math.abs(currentY - tileY) < tolerance;

        // pointdices = 10;

        if (this.visitedCasillas.has(casillaId) || casillaId === pointdices) {
            return; // Si ya visitó esta casilla, no procesar de nuevo
        }

        // Solo continuar si el personaje está lo suficientemente cerca del centro de la casilla
        if (withinTolerance) {
            // Log para ver el ID de la casilla en consola
            console.log('Colisión con casilla ID:', casillaId);
            if (casillaId === pointdices) {
                character.setVelocityX(0);
                character.setVelocityY(0);
                character.anims.play('idle', true);
                countField = pointdices;

                if (this.restPositions.some(pos => pos.id === casillaId)) {
                    character.anims.play('rest', true);
                }
                return;
            }

            // Verificar si el ID de la casilla está en la lista de puntos de subida
            if (this.upwardPointIds.includes(casillaId) || casillaId === 366) {
                if (this.direction !== "up") {
                    // Mover hacia arriba
                    this.direction = "up";
                    character.setVelocityX(0);
                    character.setVelocityY(-200);
                    character.anims.play('walk_backward', true);
                }
            }
            // Verificar si el ID de la casilla está en la lista de cambio de dirección opuesta
            else if (this.oppositeDirectionIds.includes(casillaId)) {
                if (this.direction === "up" && this.lastHorizontalDirection === "right") {
                    // Cambiar dirección a la izquierda
                    this.lastHorizontalDirection = "left";
                    character.setVelocityX(-200);
                    character.setVelocityY(0);
                    character.anims.play('walk_left', true);
                    this.direction = "horizontal";
                } else if (this.direction === "up" && this.lastHorizontalDirection === "left") {
                    // Cambiar dirección a la derecha
                    this.lastHorizontalDirection = "right";
                    character.setVelocityX(200);
                    character.setVelocityY(0);
                    character.anims.play('walk_right', true);
                    this.direction = "horizontal";
                }
            }
            // Verificar si la casilla es de descanso
            else if (this.restPositions.some(pos => pos.id === casillaId)) {
                console.log('Colisión con casilla de descanso');
                // Detener el movimiento en la casilla de descanso
                character.setVelocityX(0);
                character.setVelocityY(0);
            }

            // Añadir la casilla al conjunto de casillas visitadas para evitar activar la lógica repetidamente
            this.visitedCasillas.add(casillaId);
        }
    }




    update() {
    }

    toggleDirection() {
        // Alternar entre izquierda y derecha
        if (this.lastHorizontalDirection === "right") {
            this.lastHorizontalDirection = "left";
            this.character_one.setVelocity(-200, 0);
            // this.character_one.setOrigin(0, 0.5); // Ajustar el origen para que mire a la izquierda
            this.character_one.anims.play('walk_left', true);
        }
        else {
            this.lastHorizontalDirection = "right";
            this.character_one.setVelocity(200, 0);
            // this.character_one.setOrigin(0, 0.5); // Ajustar el origen para que mire a la derecha
            this.character_one.anims.play('walk_right', true);

        }
    }

}