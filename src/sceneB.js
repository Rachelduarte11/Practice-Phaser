class SceneB extends Phaser.Scene {
    constructor() {
        super({ key: 'SceneB', active: false });
    }
    preload() {
         this.load.image('bird', './assets/bird.png');
     }
    create() {
        let graphics = this.add.graphics();
        graphics.fillStyle(0xff3399, 1);
        graphics.fillRect(100, 200, 600, 400);
        graphics.fillRect(200, 100, 100, 100);
        this.add.text(220, 100, 'B', { font: "96px Arial", fill: '#FFFFFF' });
    }
    update() {
        //this.bird.angle++
    }
}