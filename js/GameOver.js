class GameOver extends Phaser.Scene {
    constructor() {
        super({key:"GameOver"});
    }


    create(){
        this.coin = this.add.sprite(window.innerWidth/2 , window.innerHeight/2 , 'coin');
        this.coin.setInteractive();
        this.coin.once('pointerup', function () {

            this.scene.start("Preload");

        }, this);
    }

    update(){
        this.coin.setDisplaySize(window.innerWidth/18, window.innerHeight/10).setPosition(window.innerWidth/2,window.innerHeight/2);
    }
    
}