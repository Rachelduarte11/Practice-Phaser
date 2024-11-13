import MainScene from './scenes/MainScene.js';

let config = {
    width: 400 * 3,
    height:1000,
    backfroundColor: '#3498db',
    type: Phaser.AUTO,
    pixelArt: true,
    parent: 'container',
    scene: [MainScene],
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: false
        }
    }
};

const game = new Phaser.Game(config);
