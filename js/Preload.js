class Preload extends Phaser.Scene {
    constructor() {
        super({key:"Preload"});
    }

    preload(){
    var progress = this.add.graphics();

    this.load.on('progress', function (value) {

        progress.clear();
        progress.fillStyle(0xffffff, 1);
        progress.fillRect(0, innerHeight/2, innerWidth * value, 60);

    });

    this.load.on('complete', function () {

        progress.destroy();

    });

        this.load.image('coin', 'assets/coinGold.png' );
        this.load.image('back', 'assets/back.png' );
        this.load.image('space', 'assets/Background-1.jpg' );
    }

    create(){
        this.scene.start('MainMenu');
    }
}