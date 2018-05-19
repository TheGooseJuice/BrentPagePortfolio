var config = {
    type: Phaser.AUTO,
    width:   window.innerWidth/2.5,
    height: window.innerHeight/2.5,
    
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: false
        }
    },
    scene: [ mainScene ]
};

var game = new Phaser.Game(config);
game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL
