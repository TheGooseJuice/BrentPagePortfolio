class MainMenu extends Phaser.Scene {
    constructor() {
        super({key:"MainMenu"});
    }

    

    create(){
        
        this.bg = this.add.sprite(0, 0, 'space').setOrigin(0, 0,).setDisplaySize(window.innerWidth, window.innerHeight);  
        this.coin = this.physics.add.sprite(window.innerWidth / 2, window.innerHeight / 2, 'coin').setInteractive().setDisplaySize(window.innerWidth/18, window.innerHeight/10).setPosition(window.innerWidth/2, window.innerHeight/2).setCollideWorldBounds(true);
        this.coin.once('pointerup', function () {
            this.scene.start('GamePlay');
        }, this);        
    }

    update(){
        this.sizeChange();
        this.setPosition();
        this.playerController();
        this.playerBounds();
        
    }

    playerBounds(){
        if(this.coin.y >= window.innerHeight){
            this.coin.setY(window.innerHeight);
        }
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
            if(this.coin.y <= window.innerHeight - this.coin.height){
                this.coin.body.setAccelerationY(800);
            }else{
                this.coin.body.setAccelerationY(0);
            }
            
        }
    }



}