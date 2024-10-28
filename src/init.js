let config = {
    width: 400 * 4,
    height: 340 * 3,
    type: Phaser.AUTO,
    pixelArt: true,
    scene: { preload, create },
}

let game = new Phaser.Game(config);

function preload() {
    this.load.path = './assets/';
    this.load.json('map', 'tomato_anim.json');
    this.load.atlas('tomato', 'tomato.png', 'tomato_atlas.json');
}

function create() { 
    // Crear personajes escalados y alineados horizontalmente
    this.tomato = this.add.sprite(150, 150, 'tomato');
    this.tomato.setScale(2); // Duplicar el tamaño del sprite

    this.tomato_walk = this.add.sprite(300, 150, 'tomato');
    this.tomato_walk.setScale(2); // Duplicar el tamaño

    this.tomato_down = this.add.sprite(450, 150, 'tomato');
    this.tomato_down.setScale(2); // Duplicar el tamaño

    // Cargar las animaciones desde el archivo JSON
    this.tomato_anim = this.cache.json.get('map');
    this.anims.fromJSON(this.tomato_anim);

    // Reproducir animaciones
    this.tomato.anims.play('idle');
    this.tomato_walk.anims.play('walk');
    this.tomato_down.anims.play('down');
}
