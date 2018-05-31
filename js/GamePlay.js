class GamePlay extends Phaser.Scene {
    constructor() {
        super({key:"GamePlay"});
    }

    create(){

        this.bg = this.add.sprite(0, 0, 'back').setOrigin(0,0).setDisplaySize(window.innerWidth, window.innerHeight);

        this.coin = this.physics.add.sprite(window.innerWidth/2,window.innerHeight/4, 'space').setInteractive().setDisplaySize(window.innerWidth/18, window.innerHeight/10).setPosition(window.innerWidth/2, window.innerHeight/4).setCollideWorldBounds(true);
        
            this.coin.once('pointerup', function () {
                this.scene.start('GameOver');
            }, this);
    }

    update(){
        this.sizeChange();
        this.setPosition();
        this.playerController();
    }

    sizeChange(){
        this.bg.setDisplaySize(window.innerWidth, window.innerHeight);
        this.coin.setDisplaySize(window.innerWidth/16, window.innerHeight/10);
    }

    setPosition(){
       this.coin.setX(window.innerWidth/2);
    }

    playerController(){
        if (this.input.activePointer.isDown){
            this.coin.body.setVelocityY(-275);
        }else{

            this.coin.body.setAccelerationY(800);
        }
    }

}