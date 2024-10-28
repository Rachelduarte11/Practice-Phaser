class SceneA extends Phaser.Scene {
    constructor() {
        super({ key: 'SceneA', active: true });
    }
    preload() {
         this.load.image('bird', './assets/bird.png');
     }
    create() {
        let graphics = this.add.graphics();
        graphics.fillStyle(0xff33500, 1);
        graphics.fillRect(100, 200, 600, 400);
        graphics.fillRect(100, 100, 100, 100);
        this.add.text(120, 100, 'A', { font: "96px Arial", fill: '#ffffff' });
    }
    update() {
        //this.bird.angle++
    }
}