var config = {
    type: Phaser.AUTO,
    width:   window.innerHeight/2,
    height: window.innerWidth/2,
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