var canvas,background
var gameState = 0;
var playerCount,database;
var all_players
var player, form,game
var cars,car1,car2,car3,car4; 
var track_image,car1_image,car2_image,car3_image,car4_image,ground_image
var endcount;

function preload(){
    track_image = loadImage("images/track.jpg")
    car1_image = loadImage("images/car1.png")
    car2_image = loadImage("images/car2.png")
    car3_image = loadImage("images/car3.png")
    car4_image = loadImage("images/car4.png")
    ground_image = loadImage("images/ground.png")

}

function setup (){
    canvas = createCanvas(displayWidth-20,displayHeight-30);
    database =firebase.database();
    game = new Game()
    game.getState()
    game.start()
}


function draw (){
    background("grey")
    
    if (playerCount === 4){
        game.update(1)
    }
    if(gameState === 1){
        clear()
        game.play()
    }
    if (gameState === 2){
    //    console.log("hello"+gameState)
        game.update(2)
     // player.getcarsatendcount()
      game.end()
        
    }
    //if (endcount===4){
    //    game.update(2)
    //}
}
