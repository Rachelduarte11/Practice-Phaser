let config = {
    width: 400 * 4,
    height: 340 * 3,
    backfroundColor: '#3498db',
    type: Phaser.AUTO,
    pixelArt: true,
    scene: { preload, create },
};

let game = new Phaser.Game(config);

function preload() {
    // Cargar cada personaje con su propio JSON y Atlas
    this.load.path = './assets/';
    
    // Character One
    this.load.json('one_map', 'character_one/character_one_anim.json');
    this.load.atlas('character_one', 'character_one/character_one.png', 'character_one/character_one_atlas.json');
    
    // Character Second
    this.load.json('second_map', 'character_second/character_second_anim.json');
    this.load.atlas('character_second', 'character_second/character_second.png', 'character_second/character_second_atlas.json');
    
    // Character Third
    this.load.json('third_map', 'character_third/character_third_anim.json');
    this.load.atlas('character_third', 'character_third/character_third.png', 'character_third/character_third_atlas.json');
    
    // Character Fourth
    this.load.json('fourth_map', 'character_fourth/character_fourth_anim.json');
    this.load.atlas('character_fourth', 'character_fourth/character_fourth.png', 'character_fourth/character_fourth_atlas.json');
}
function create() { 
    // Cargar las animaciones y crear los sprites para cada personaje

    this.cameras.main.setBackgroundColor('#ffffff');
    // Character One
    this.one_anim = this.cache.json.get('one_map');
    this.anims.fromJSON(this.one_anim);
    this.characterOne = this.add.sprite(150, 150, 'one').setScale(2);
    this.characterOneWalkR = this.add.sprite(300, 150, 'one').setScale(2);
    this.characterOneRest = this.add.sprite(450, 150, 'one').setScale(2);
    this.characterOneWalkBackward = this.add.sprite(600, 150, 'one').setScale(2);
    this.characterOneWalkToward = this.add.sprite(750, 150, 'one').setScale(2);
    
    this.characterOne.anims.play('one_walk_left');
    this.characterOneWalkR.anims.play('one_walk_right');
    this.characterOneRest.anims.play('one_rest');
    this.characterOneWalkBackward.anims.play('one_walk_backward');
    this.characterOneWalkToward.anims.play('one_walk_toward');

    // Character Second
    this.second_anim = this.cache.json.get('second_map');
    this.anims.fromJSON(this.second_anim);
    this.characterSecond = this.add.sprite(150, 300, 'second').setScale(2);
    this.characterSecondWalkR = this.add.sprite(300, 300, 'second').setScale(2);
    this.characterSecondRest = this.add.sprite(450, 300, 'second').setScale(2);
    this.characterSecondWalkBackward = this.add.sprite(600, 300, 'second').setScale(2);
    this.characterSecondWalkToward = this.add.sprite(750, 300, 'second').setScale(2);
    
    this.characterSecond.anims.play('second_walk_left');
    this.characterSecondWalkR.anims.play('second_walk_right');
    this.characterSecondRest.anims.play('second_rest');
    this.characterSecondWalkBackward.anims.play('second_walk_backward');
    this.characterSecondWalkToward.anims.play('second_walk_toward');

    // Character Third
    this.third_anim = this.cache.json.get('third_map');
    this.anims.fromJSON(this.third_anim);
    this.characterThird = this.add.sprite(150, 450, 'third').setScale(2);
    this.characterThirdWalkR = this.add.sprite(300, 450, 'third').setScale(2);
    this.characterThirdRest = this.add.sprite(450, 450, 'third').setScale(2);
    this.characterThirdWalkBackward = this.add.sprite(600, 450, 'third').setScale(2);
    this.characterThirdWalkToward = this.add.sprite(750, 450, 'third').setScale(2);
    
    this.characterThird.anims.play('third_walk_left');
    this.characterThirdWalkR.anims.play('third_walk_right');
    this.characterThirdRest.anims.play('third_rest');
    this.characterThirdWalkBackward.anims.play('third_walk_backward');
    this.characterThirdWalkToward.anims.play('third_walk_toward');

    // Character Fourth
    this.fourth_anim = this.cache.json.get('fourth_map');
    this.anims.fromJSON(this.fourth_anim);
    this.characterFourth = this.add.sprite(150, 600, 'fourth').setScale(2);
    this.characterFourthWalkR = this.add.sprite(300, 600, 'fourth').setScale(2);
    this.characterFourthRest = this.add.sprite(450, 600, 'fourth').setScale(2);
    this.characterFourthWalkBackward = this.add.sprite(600, 600, 'fourth').setScale(2);
    this.characterFourthWalkToward = this.add.sprite(750, 600, 'fourth').setScale(2);
    
    this.characterFourth.anims.play('fourth_walk_left');
    this.characterFourthWalkR.anims.play('fourth_walk_right');
    this.characterFourthRest.anims.play('fourth_rest');
    this.characterFourthWalkBackward.anims.play('fourth_walk_backward');
    this.characterFourthWalkToward.anims.play('fourth_walk_toward');
}
