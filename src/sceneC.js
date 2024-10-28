class SceneC extends Phaser.Scene {
    constructor() {
        super({ key: 'SceneC', active: true });
    }
    preload() {
         this.load.image('bird', './assets/bird.png');
     }
    create() {
        let graphics = this.add.graphics();
        graphics.fillStyle(0xff6655, 1);
        graphics.fillRect(100, 200, 600, 400);
        graphics.fillRect(300, 100, 100, 100);
        this.add.text(320, 100, 'C', { font: "96px Arial", fill: '#FFFFFF' });
    }
    update() {
        //this.bird.angle++
    }
}