class Game {
    constructor(){

    }
    getState(){
        var gameStateref = database.ref("gameState")
        gameStateref.on("value",function(data){gameState=data.val();}) 
    }
    update (state){
        database.ref('/').update({gameState:state})
    }
    start (){
        if(gameState === 0){
            player = new Player()
            player.getCount()
            form = new Form()
            form.display();
        }

        car1 = createSprite(100,200)
        car1.addImage(car1_image)
        car2 = createSprite(300,200)
        car2.addImage(car2_image)
        car3 = createSprite(500,200)
        car3.addImage(car3_image)
        car4 = createSprite(700,200)
        car4.addImage(car4_image)
        cars = [car1,car2,car3,car4]
    }

    play(){
        form.hide()
        Player.getPlayerInfo()
        //
        //text("Game Start",120,100)

        player.getcarsatend()
        
        if (all_players !== undefined){
            background(ground_image)
            //console.log(displayHeight)
            image(track_image,0,-displayHeight*4,displayWidth,displayHeight*5)
           // console.log("player")
            var displayPosition = 130;
            var index = 0
            var x = 147
            var y 
        
           
            for (var plr in all_players){
                
                index =index+1
                x = x+200
                //console.log(x)
                y = displayHeight-all_players[plr].distance
                cars[index-1].x = x
                cars[index-1].y = y
                

                if (index === player.index){
                    fill("red")
                    stroke("black")
                    strokeWeight(3)
                    ellipse(x,y,60,60)
                    camera.position.x = displayWidth/2
                    camera.position.y = cars[index-1].y 
                }
            }
            
               
        }
                
                if (keyIsDown(UP_ARROW) && player.index !== null){
                    player.distance+=25;
                  //  console.log("player.distance")
                    player.update();
                }

                if (player.distance>3800){
                    player.rank +=1;
                    Player.updatecarsatend(player.rank)
                    gameState = 2;
                    
 }




             
            
        drawSprites()   
    }
    end(){
        console.log("game over")
        console.log(player.rank)
    }
    

    
}

