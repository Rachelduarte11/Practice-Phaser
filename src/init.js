
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
            // gravity: { y: 300 },
            debug: false
        }
    }
}
//Pressed Keys
keyDownRight= 'keydown-RIGHT';
keyDownLeft= 'keydown-LEFT';
keyDownUp= 'keydown-UP';
keyDownDown= 'keydown-DOWN';

//Is not Pressed Keys
keyUpRight= 'keyup-RIGHT';
keyUpLeft= 'keyup-LEFT';
keyUpUp= 'keyup-UP';
keyUpDown= 'keyup-DOWN';


const game = new Phaser.Game(config);

function preload() {

    this.load.image('bird', './assets/bird.png');
    
}

function create() {
   this.bird = this.physics.add.image(100, 100, 'bird');
//    this.input.keyboard.on(keyDownRight, () => {
//          this.bird.setAccelerationX(100);
//    });

//    this.input.keyboard.on(keyUpRight, () => {
//     this.bird.setAccelerationX(0);
//     this.bird.setVelocityX(0);
// });

//    this.input.keyboard.on(keyLeft, () => {
//     this.bird.x= this.bird.x -4;
// });

  this.cursorKeys = this.input.keyboard.createCursorKeys();

}

function update(time, delta) {
    if(this.cursorKeys.right.isDown){
        this.bird.x++;
    }else if(this.cursorKeys.left.isDown){
        this.bird.x--;
    }else if(this.cursorKeys.up.isDown){
        this.bird.y--;
    }else {
        this.bird.setAccelerationX(0);
        this.bird.setAccelerationY(0);
    }
}

