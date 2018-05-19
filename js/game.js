var config = {
    type: Phaser.AUTO,
    width:   window.innerWidth,
    height: window.innerHeight,
    
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
game.screen.orientation.lock('landscape');
