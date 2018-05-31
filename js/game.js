var config = {
    type: Phaser.AUTO,
    width: innerWidth,
    height: innerHeight,
    physics: {
        default: 'arcade',
        matter: {
            gravity: {
                y: 0
            }
        }
    },
    scene: [ Preload, MainMenu, GamePlay, GameOver ]
};

var game = new Phaser.Game(config);
