
const config = {
    width: 320 * 4,
    height: 240 * 3,
    parent: 'container',
    type: Phaser.AUTO,
    scene: {
        preload: preload,
        create: create,
        update: update
    },
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    }
}

const game = new Phaser.Game(config);

function preload() {

    this.load.image('bird', './assets/bird.png');
    
}

function create() {
    this.add.text(10, 10, 'Hello World', { font: '16px Courier', fill: '#00ff00' });
    this.bird = this.physics.add.image(100, 80, 'bird');
    this.bird.setScale(2);
    //fisicas
    this.bird.setCollideWorldBounds(true);
    this.bird.setBounce(0.5);
    this.bird.setVelocity(100, 0);

}

function update() {
    //this.bird.angle++
}

