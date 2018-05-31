class GameOver extends Phaser.Scene {
    constructor() {
        super({key:"GameOver"});
    }


    create(){
        this.coin = this.add.sprite(innerWidth/2 , innerHeight/2 , 'coin');
        this.coin.setInteractive();
        this.coin.once('pointerup', function () {

            this.scene.start("Preload");

        }, this);
    }

    update(){
        this.coin.setDisplaySize(innerWidth/18, innerHeight/10).setPosition(innerWidth/2,innerHeight/2);
    }
    
}