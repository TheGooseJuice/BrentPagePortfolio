class GamePlay extends Phaser.Scene {
    constructor() {
        super({key:"GamePlay"});
    }

    create(){

        this.bg = this.add.sprite(0, 0, 'back').setOrigin(0,0).setDisplaySize(innerWidth, innerHeight);

        this.coin = this.physics.add.sprite(innerWidth/2,innerHeight/4, 'space').setInteractive().setDisplaySize(innerWidth/18, innerHeight/10).setPosition(innerWidth/2, innerHeight/4).setCollideWorldBounds(true);
        
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
        this.bg.setDisplaySize(innerWidth, innerHeight);
        this.coin.setDisplaySize(innerWidth/16, innerHeight/10);
    }

    setPosition(){
       this.coin.setX(innerWidth/2);
    }

    playerController(){
        if (this.input.activePointer.isDown){
            this.coin.body.setVelocityY(-275);
        }else{

            this.coin.body.setAccelerationY(800);
        }
    }

}